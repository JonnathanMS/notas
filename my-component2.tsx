import { Component, h, State } from "@stencil/core";

// I added some properties to the user interface user
interface User {
  id: number;
  firstName: string;
  email: string;
  lastName: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
    country: string;
  };
}

@Component({
  tag: "my-component",
  styleUrl: "my-component.scss",
  shadow: true,
})

// I added some state and private properties, for search, typing and pagination.
export class MyComponent {
  @State() private searchTerm: string = "";
  @State() private users: User[] = [];
  @State() private page: number = 0;
  @State() private totalUsers: number = 0;
  private typingTimeout: number | undefined;
  private readonly defaultLimit: number = 10;

  async componentWillLoad() {
    await this.fetchUsers();
  }

  // I added a try-catch for error handling, I modified the logic to perform the searches on the server side, which I will later use in the search handler
  private async fetchUsers(): Promise<void> {
    try {
      const skip = this.page * this.defaultLimit;
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${this.searchTerm}&limit=${this.defaultLimit}&skip=${skip}`
      );
      const json = await response.json();
      this.users = json.users;
      this.totalUsers = json.total;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // In this handler I use the fetchUsers method to do the search directly from the server, I manage the search criteria such as a minimum of three characters and a time of 1 second.
  private handleSearchInput(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;

    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }

    if (this.searchTerm.length >= 3 || this.searchTerm.length == 0) {
      this.typingTimeout = window.setTimeout(async () => {
        this.page = 0;
        await this.fetchUsers();
      }, 1000);
    } else {
      this.users = [];
    }
  }

  // logic for the pagination, in the defaultLimit property resides the value of 10 elements that defines the pagination in this case.
  private async changePage(direction: "next" | "previous"): Promise<void> {
    if (
      direction === "next" &&
      (this.page + 1) * this.defaultLimit < this.totalUsers
    ) {
      this.page++;
    } else if (direction === "previous" && this.page > 0) {
      this.page--;
    }
    await this.fetchUsers();
  }

  // I Add some customization while keeping it simple
  render() {
    const pages = Math.ceil(this.totalUsers / this.defaultLimit);
    return (
      <div
        style={{
          overflowY: "auto",
          maxHeight: "100vh",
          backgroundColor: "rgba(0, 0, 0)",
        }}
      >
        <h1>Tailorsoft S.A.S coding test</h1>
        <ion-card>
          <ion-card-header>
            <ion-searchbar
              placeholder="Search by first name"
              onIonInput={(e) => this.handleSearchInput(e)}
              clear-icon="custom-clear-icon"
              style={{ "--background": "rgba(0, 0, 0, 0.039)" }}
            ></ion-searchbar>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              {this.users.map((user) => (
                <ion-item>
                  <ion-label class="user-name">{`${user.firstName} ${user.lastName}`}</ion-label>
                  <ion-label class="user-email">{user.email}</ion-label>
                  <ion-label class="user-address">{`${user.address.address} ${user.address.city} ${user.address.state} ${user.address.stateCode}, ${user.address.postalCode} ${user.address.country}, lat:${user.address.coordinates.lat} lng:${user.address.coordinates.lng}`}</ion-label>
                </ion-item>
              ))}
            </ion-list>
          </ion-card-content>

          <ion-card-footer>
            <div class="pagination">
              <ion-button
                class="custom-button"
                disabled={this.page === 0}
                onClick={() => this.changePage("previous")}
              >
                Previous
              </ion-button>
              {pages === 0 ? (
                <span class="spanRed">{"No results found"}</span>
              ) : this.searchTerm.length > 0 && this.searchTerm.length < 3 ? (
                <span class="span">
                  {"type at least three letters to start the search "}
                </span>
              ) : (
                <span class="span">
                  {"Page "}
                  {this.page + 1} of {pages}
                </span>
              )}
              <ion-button
                class="custom-button"
                disabled={
                  (this.page + 1) * this.defaultLimit >= this.totalUsers
                }
                onClick={() => this.changePage("next")}
              >
                Next
              </ion-button>
            </div>
          </ion-card-footer>
        </ion-card>
        <style>
          {`
            h1 {
              text-align: center;
              color: white;
            }

            .custom-button {
            --background: linear-gradient(145deg, #000000, #333333);
            --color: white;
            --font-weight: bold;
            --box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
            --border-radius: 8px;
            --padding: 10px 20px;
            --transition: background 0.3s ease, box-shadow 0.3s ease;
            }

            .custom-button:hover {
            --background: linear-gradient(145deg, #333333, #000000);
            --box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.7);
            }

            .custom-button:active {
            --background: linear-gradient(145deg, #000000, #1a1a1a);
            --box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.5);
            --font-weight: bold;
            }

            .custom-button[disabled] {
            --background: #a5a5a5;
            --color: #d5d5d5;
            --box-shadow: none;
            }


              .user-name {
              font-weight: bold;
              font-size: 1.2em;
            }

            .span {
                font-weight: bold;
            }

            .spanRed {
                font-weight: bold;
                color:red;
            }

            .pagination {
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

                @media (min-width: 600px) {
                .user-item {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .user-email,
                .user-address {
                    flex: 1;
                    margin: 0 10px;
                }
                }
                    `}
        </style>
      </div>
    );
  }
}
