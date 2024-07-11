import { Component, h, State } from "@stencil/core";
// I added some properties to the user interface user
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
}

@Component({
  tag: "my-component",
  styleUrl: "my-component.scss",
  shadow: true,
})

// I added some state and private properties, for search and pagination.
export class MyComponent {
  @State() searchTerm: string = "";
  @State() users: User[] = [];
  @State() currentPage: number = 1;
  private readonly pageSizeNum: number = 10;
  private searchTime: number;

  // I added a try-catch for error handling
  async componentWillLoad() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const json = await response.json();
      this.users = json.users;
    } catch (error) {
      console.error("The error fetching users is:", error);
    }
  }

  // I manage the search input event so that it is activated only when there are at least 3 characters and after 1 second that the user does not type, also returns to page 1 when a new search begins and add that the search does not differentiate between lowercase or uppercase to avoid user errors
  applyFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    clearTimeout(this.searchTime);

    this.searchTime = window.setTimeout(() => {
      this.searchTerm = value.length >= 3 ? value : "";
      this.currentPage = 1;
    }, 1000);
  }

  // I added this method to update the current page
  pageChange(page: number) {
    this.currentPage = page;
  }

  // I added the search criteria by email since the search placeholder indicated search by email, however the email will only appear when the search is done, this is because it is possible users with the same name, but not with the same email.
  getFilteredUsers(): User[] {
    return this.users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(this.searchTerm) ||
        user.email.toLowerCase().includes(this.searchTerm)
    );
  }

  // This method obtains the users according to the page number
  ActualPaginated(filteredUsers: User[]): User[] {
    const startIndex = (this.currentPage - 1) * this.pageSizeNum;
    return filteredUsers.slice(startIndex, startIndex + this.pageSizeNum);
  }

  // With this method, the pagination buttons are rendered according to the number of users
  paginationButtons(totalPages: number) {
    return (
      <ion-pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <ion-button
            onClick={() => this.pageChange(i + 1)}
            disabled={this.currentPage === i + 1}
          >
            {i + 1}
          </ion-button>
        ))}
      </ion-pagination>
    );
  }

  // I added pagination to the render method, and only when there is a search by name or email does it show other data such as age, last name, and email. I also left one of the 'x' to delete the search because it was repeating itself and I put a margin so that the title does not appear stuck to the edge of the screen, also add a scroll for when the screen size gets too short. I understand This would be better done in the my-component.scss file
  render() {
    const filteredUsers = this.getFilteredUsers();
    const totalPages = Math.ceil(filteredUsers.length / this.pageSizeNum);
    const paginatedUsers = this.ActualPaginated(filteredUsers);

    return (
      <div style={{ margin: "10px", overflowY: "auto", maxHeight: "100vh" }}>
        <h1>Tailorsoft S.A.S coding test</h1>
        <ion-card>
          <ion-card-header>
            <ion-searchbar
              placeholder="Search by first name or email"
              onIonInput={(e) => this.applyFilter(e)}
              clear-icon="custom-clear-icon"
            ></ion-searchbar>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              {paginatedUsers.map((user) => (
                <ion-item>
                  <ion-label>
                    {user.firstName}
                    {this.searchTerm && (
                      <span>
                        {" "}
                        {user.lastName}, Age:{user.age}, Email: {user.email}
                      </span>
                    )}
                  </ion-label>
                </ion-item>
              ))}
            </ion-list>
          </ion-card-content>
          <ion-card-footer>
            {this.paginationButtons(totalPages)}
          </ion-card-footer>
        </ion-card>
      </div>
    );
  }
}
