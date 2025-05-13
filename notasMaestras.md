////*INDICE:

////*JAVASCRIPT:
{

    //¿.......ARRAYS:


    ////....map
    ////....filter
    ////....find
    ////....findIndex
    ////....findLastIndex
    ////....fill
    ////....every
    ////....some
    ////....reduce
    ////....forEach
    ////....indexOf
    ////....join
    ////....reverse(modifica el arreglo)   toReversed()
    ////....pop
    ////....push
    ////....shift
    ////....unshift
    ////....splice toSpliced(no modifica el array)
    ////....slice
    ////....with
    ////....sort sort(modifica)   toSorted(no lo modifica)
    ////....includes
    ////....flat
    ////....flatMap
    ////....values
    ////....keys
    ////....entries


    // ¿STRINGS:


    ////....charAt
    ////....concat
    ////....includes
    ////....indexOf
    ////....toUpperCase
    ////....toLowerCase
    ////....slice
    ////....split
    ////....trim
    ////....replace
    ////....substring

    // ¿OBJECTS:

    ////....keys
    ////....values
    ////....entries
    ////....assign
    ////....create
    ////....freeze
    ////....is
    ////....seal
    ////....fromEntries

    // ¿MATH:

    ////....abs
    ////....ceil
    ////....floor
    ////....round
    ////....max
    ////....min
    ////....random
    ////....sqrt
    ////....pow

    // ¿JSON:

    ////....parse
    ////....stringify
    ////....parseAsync (no estándar, asumiendo un escenario asíncrono)
    ////....stringifyAsync (no estándar, asumiendo un escenario asíncrono)

}
////*TYPESCRIPT:
{

    // INDICE:

    // !Variables y Tipos Básicos
    ////....number
    ////....string
    ////....boolean
    ////....array
    ////....tuple
    ////....enum
    ////....any
    ////....void
    ////....null y undefined
    ////....never

    // !FUNCIONES:
    ////....funciones
    ////....funciones anónimas
    ////....funciones con parámetros opcionales y predeterminados
    ////....funciones con parámetros de tipo rest

    // !OBJETOS:
    ////....objetos
    ////....interfaces
    ////....interfaces opcionales
    ////....interfaces con propiedades de solo lectura
    ////....interfaces con métodos
    ////....clases
    ////....herencia
    ////....modificadores de acceso
    ////....clases abstractas

    // !Clases y Herencia
    ////....clases
    ////....herencia
    ////....modificadores de acceso
    ////....clases abstractas

    // !GENERICS
    ////....funciones genéricas
    ////....clases genéricas
    ////....interfaces genéricas
}
////*METODOS DOM:
{
    // !METODOS DOM
    ////....getElementById
    ////....getElementsByClassName
    ////....getElementsByTagName
    ////....querySelector
    ////....querySelectorAll
    ////....createElement
    ////....appendChild
    ////....removeChild
    ////....replaceChild
    ////....cloneNode
    ////....addEventListener
    ////....removeEventListener
    ////....setAttribute
    ////....getAttribute
    ////....removeAttribute
    // archivo Dom.md
    ////....insertBefore(newNode, referenceNode)
    ////....focus
    ////....blur
}

// *ARCHIVO propiedadesUtiles.md
{
    // 1.[typeof]
    // 2.[instanceof]
    // 3.[Array.isArray]
    // 4.[parseInt]
    // 5.[parseFloat]
    // 6.[isNaN]
    // 7.[isFinite]
    // 8.[Object.keys]
    // 9.[Object.values]
    // 10.[Object.entries]
    // 11.[JSON.stringify]
    // 12.[JSON.parse]
    // 13.[Number]
    // 14.[String]
    // 15.[Boolean]
}

// Expresiones regulares en propiedadesUtiles.md
1.[RegExp]
2.[test]
3.[exec]
4.[match]
5.[matchAll]
6.[replace]
7.[replaceAll]
8.[search]
9.[split]

////*CSS:
{
    // !RESUMEN CSS
    ////....color
    ////....background-color
    ////....font-size
    ////....margin
    ////....padding
    ////....border
    ////....width
    ////....height
    ////....display
    ////....position
    ////....flex
    ////....grid
    ////....text-align
    ////....align-items
    ////....justify-content
    ////....background-image
    ////....background-size
    ////....opacity
    ////....transition
    ////....transform
    ////....box-shadow
    ////....border-radius
    ////....overflow
    ////....z-index

    // !FUNCIONALIDADES:
    ////....Media Queries
    ////....Pseudo-clases
    ////....Pseudo-elementos
    ////....Keyframes
    ////....Animations
    ////....Variables

    // !INNOVACIONES Y CURIOSIDADES:
    /////....Basico
}
////*REACT:
{
    // !RESUMEN REACT:
    // !HOOKS
    ////....useState
    ////....useEffect
    ////....useContext
    ////....useReducer
    ////....useRef
    ////....useMemo
    ////....useCallback
    ////....useLayoutEffect
    ////....useImperativeHandle
    ////....useDebugValue

    // !COMPONENTS
    ////....Componentes de Clase
    ////....Componentes Funcionales
    ////....JSX
    ////....Props
    ////....State
    ////....Lifecycle Methods
    ////....Fragment
    ////....Context

    // !comceptos clave React

    // !parametros de las funciones js

    // !parametros de las funciones js ejemplos

    // !flex box y grid css

}
  //// TYPOS DE USOS DE...
{
  //// usos de .reduce

}

// funcionAnonimaconjson

// NOTAS SQL

// NOTAS MONGO

// ARCHIVOS MD

// CLAVES DE TECLADO

// Emmet

// GRID VS FLEXBOX

////*PENDIENTE
{
    // METODOS QUE FALTAN A CADA LISTA
    // FORMAS: FUNCION, ARROW FUNCTION, ANONIMA, ANOMIMA AUTOEJECUTABLE, DESTRUCTURACIONES
    // CLASES EN JAVASCRIPT
    // OBJETOS EN JAVASCIRPT
    // CONSUMO DE JSON CON FETCH
    // ENVIO DE DATOS CON FETCH
    // FORMULARIOS
    // RUTAS A CODIGO EJEMPLO
    // STENCIL
    //!APRENDER SOBRE LA NUBE Y API DE IA DE GOOGLE Y DE MICRISOFT

}

 //    COMANDOS DE GUIT

//    ASPECTOS DE TYLORSOFT

//    Comandos de la terminal:



//***********************************
//***********************************
//***********************************
//***********************************
//¿.......ARRAYS:

////....map

// Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original
Array.prototype.map = function (callback) {
    // lógica para mapear cada elemento
};
// Ejemplo breve: 
[1, 2, 3].map(n => n * 2);
// Transforma cada número multiplicando por 2. Resultado = [2, 4, 6].

// EJEMPLO PRINCIPAL:
arrn.map((num, index, array) => {
    let cuadrado = num * num;
    let index2 = index * 2;
    let siguiente = array[index + 1] ? array[index + 1] : array[index + 1] == 0 ? 0 : 'terminado';
    return `num: ${num}, cuadrado:${cuadrado}, index2:${index2},siguiente:${siguiente}`
})

//***********************************
////....filter

// Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada
Array.prototype.filter = function (callback) {
    // lógica para filtrar cada elemento
};
// Ejemplo breve:
['a', 'b', 'c', 'b'].filter(n => n != 'b');
// Filtra la letra b en el array. Resultado = ['a', 'c'].

// Ejemplo principal:
const products = [
    { name: 'Product 1', price: 50 },
    { name: 'Product 2', price: 30 },
    { name: 'Product 3', price: 70 },
    { name: 'Product 4', price: 20 },
    { name: 'Product 5', price: 90 }
];

const context = {
    comparador: 40,
    comparador2: 20
};
// productos que tienen un precio por encima de un umbral definido en el contexto y están ubicados en índices pares pero no son el ultimo elemento
const filtradorProductos = products.filter(function (product, index, array) {
    // Accediendo al contexto con this
    const mayoresque = product.price > this.comparador2;
    const indicePar = index % 2 === 0;
    const noUltimo = index < array.length - 1;

    console.log(`Index: ${index}, Product: ${product.name}, Price: ${product.price}, Comparador: ${this.comparador}, Comparador2: ${this.comparador2}`);
    return mayoresque && indicePar && noUltimo;
}, context);

console.log(filtradorProductos);
// Output: [ { name: 'Product 1', price: 50 }, { name: 'Product 3', price: 70 } ]

//***********************************
////....find

// Devuelve el primer elemento del array que cumple con la condición de la función proporcionada
Array.prototype.find = function (callback) {
    // lógica para encontrar el primer elemento que cumple la condición
};
// Ejemplo breve:
['a', 'b', 'c', 'b'].find(n => n == 'c');
// Encuentra y devuelve la letra 'c'. Resultado = 'c'.

// Ejemplo principal:
// products y context del ejemplo de filter
const foundProduct = products.find(function (product, index, array) {
    // Accediendo al contexto con this
    console.log(`Index: ${index}, Product: ${product.name}, Price: ${product.price}`);
    return product.price > this.priceThreshold && index % 2 === 0;
}, context);

console.log(foundProduct);
// Output: { name: 'Product 1', price: 50 }


//***********************************
////....findIndex

// Devuelve el índice del primer elemento del array que cumple con la condición de la función proporcionada
Array.prototype.findIndex = function (callback) {
    // lógica para encontrar el índice del primer elemento que cumple la condición
};
// Ejemplo breve:
['a', 'b', 'c', 'b'].findIndex(n => n == 'b');
// Encuentra el primer índice donde está la letra 'b'. Resultado = 1.

//***********************************
////....findLastIndex

// Devuelve el índice del último elemento del array que cumple con la condición de la función proporcionada
Array.prototype.findLastIndex = function (callback) {
    // lógica para encontrar el índice del último elemento que cumple la condición
};
// Ejemplo breve:
['a', 'b', 'c', 'b'].findLastIndex(n => n == 'b');
// Encuentra el último índice donde está la letra 'b'. Resultado = 3.

//***********************************
////....fill

// Rellena todos los elementos de un array desde un índice inicial a un índice final con un valor estático
Array.prototype.fill = function (value, start, end) {
    // lógica para rellenar elementos
};
// Ejemplo breve:
['', '', '', ''].fill('x');
// Rellena el array de 'x'. Resultado = ['x', 'x', 'x', 'x'].

// Ejemplo principal:
const array = [1, 2, 3, 4, 5];
// (valor, inicio, fin) fin por defecto es array.length EN ESTE CASO EL CONTEO EMPIZA DESDE 1 NO DESDE 0
array.fill(0, 2, 4);
console.log(array); // Output: [1, 2, 0, 0, 5]

//***********************************
////....every

// (elem, index, array)
// Devuelve true si todos los elementos pasan la prueba. De lo contrario, devuelve false

// Verifica si todos los elementos en el array cumplen con la condición implementada por la función proporcionada
Array.prototype.every = function (callback) {
    // lógica para verificar si todos los elementos cumplen la condición
};
// Ejemplo breve:
['v', 'v', 'v', 'v'].every(n => n == 'v');
// Revisa que todos los elementos sean 'v'. Resultado = true.

const products = [
    { name: 'Product 1', price: 50 },
    { name: 'Product 2', price: 30 },
    { name: 'Product 3', price: 70 },
    { name: 'Product 4', price: 20 },
    { name: 'Product 5', price: 90 }
];

const context = {
    priceThreshold: 10
};

const areAllAboveThreshold = products.every(function (product, index, array) {
    // Accediendo al contexto con this
    console.log(`Index: ${index}, Product: ${product.name}, Price: ${product.price}`);
    return product.price > this.priceThreshold;
}, context);

console.log(areAllAboveThreshold); // Output: true

//***********************************
////....some

// Verifica si al menos un elemento en el array cumple con la condición implementada por la función proporcionada
Array.prototype.some = function (callback) {
    // lógica para verificar si al menos un elemento cumple la condición
};
// Ejemplo breve:
['v', 'v', 'x', 'v'].some(n => n == 'x');
// Revisa si hay alguna 'x'. Resultado = true.

//***********************************
////....reduce

// Reduce el array a un único valor aplicando una función acumuladora
Array.prototype.reduce = function (callback, initialValue) {
    // lógica para reducir el array
};
// Ejemplo breve:
[1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
// Suma todos los números en el array. Resultado = 10.

//***********************************
////....forEach

// Ejecuta una función para cada elemento del array
Array.prototype.forEach = function (callback) {
    // lógica para ejecutar por cada elemento
};
// Ejemplo breve:
['a', 'b', 'c'].forEach(n => console.log(n));
// Imprime cada letra en la consola. Resultado = a, b, c (en líneas separadas).

//***********************************
////....indexOf

// Devuelve la posición del primer hallazgo de un valor especificado en el array, o -1 si no se encuentra
Array.prototype.indexOf = function (element) {
    // lógica para encontrar la posición del primer hallazgo
};
// Ejemplo breve:
['a', 'b', 'c'].indexOf('b');
// Encuentra el índice de 'b'. Resultado = 1.

//***********************************
////....join

// Une todos los elementos de un array en una cadena, separados por un delimitador especificado
Array.prototype.join = function (separator) {
    // lógica para unir los elementos del array
};
// Ejemplo breve:
['a', 'b', 'c'].join('-');
// Une los elementos con '-' como separador. Resultado = 'a-b-c'.

//***********************************
////....reverse(modifica el arreglo)   toReversed()

// Invierte el orden de los elementos de un array
Array.prototype.reverse = function () {
    // lógica para invertir el orden de los elementos
};
// Ejemplo breve:
['a', 'b', 'c'].reverse();
// Invierte el orden del array. Resultado = ['c', 'b', 'a'].

//***********************************
////....pop

// Quita el último elemento de un array y lo devuelve
Array.prototype.pop = function () {
    // lógica para quitar el último elemento
};
// Ejemplo breve:
let arr = ['a', 'b', 'c'];
arr.pop();
// Quita el último elemento 'c'. Resultado = ['a', 'b'], devuelve 'c'.

//***********************************
////....push

// Añade uno o más elementos al final de un array y devuelve la nueva longitud
Array.prototype.push = function (...elements) {
    // lógica para añadir elementos al final
};
// Ejemplo breve:
let arr = ['a', 'b'];
arr.push('c', 'd');
// Añade 'c' y 'd' al final. Resultado = ['a', 'b', 'c', 'd'], devuelve 4.

//***********************************
////....shift

// Quita el primer elemento de un array y lo devuelve
Array.prototype.shift = function () {
    // lógica para quitar el primer elemento
};
// Ejemplo breve:
let arr = ['a', 'b', 'c'];
arr.shift();
// Quita el primer elemento 'a'. Resultado = ['b', 'c'], devuelve 'a'.

//***********************************
////....unshift

// Añade uno o más elementos al principio de un array y devuelve la nueva longitud
Array.prototype.unshift = function (...elements) {
    // lógica para añadir elementos al principio
};
// Ejemplo breve:
let arr = ['b', 'c'];
arr.unshift('a');
// Añade 'a' al principio. Resultado = ['a', 'b', 'c'], devuelve 3.

//***********************************
////....splice toSpliced(no modifica el array)

// Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
Array.prototype.splice = function (start, deleteCount, ...items) {
    // lógica para cambiar el contenido del array
};
// Ejemplo breve:
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr.splice(2, 2, 'x', 'y', 'desdeIndex-eliminarTantos-agregarLodemas');
// Elimina 2 elementos desde el índice 1 y añade 'x' y 'y'. Resultado = ['a', 'b', 'x', 'y', 'desdeIndex-eliminarTantos-agregarLodemas', 'e', 'f', 'g'] retorno: ['c', 'd']

//***********************************
////....slice

// Devuelve una copia superficial de una parte de un array en un nuevo array
Array.prototype.slice = function (start, end) {
    // lógica para devolver una copia superficial
};
// Ejemplo breve:
let arr = ['a', 'b', 'c', 'd'];
let newArr = arr.slice(1, 3);
// Copia desde el índice 1 hasta el 3 (sin incluirlo). Resultado = ['b', 'c'].

//***********************************
////....with
// cambia el contenido de un array modificando el value de un index seleccionado
Array.prototype.with = function (index, value) {
    // lógica para devolver una copia superficial
};
// Ejemplo breve:
let arr2 = [1, 2, 3];
let arr3 = arr2.with(1, 'cambio');
// retorna [1, 'cambio', 3] y no modifica el original
//***********************************
////....sort sort(modifica)   toSorted(no lo modifica)

// Ordena los elementos de un array en su lugar y devuelve el array
Array.prototype.sort = function (compareFunction) {
    // lógica para ordenar los elementos
};
// Ejemplo breve:
let arr = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b);
// Ordena los números en orden ascendente. Resultado = [1, 1, 3, 4, 5].


//***********************************
////....includes

// Verifica si un array incluye un determinado elemento, devolviendo true o false según corresponda
Array.prototype.includes = function (element) {
    // lógica para verificar si el array incluye el elemento
};
// Ejemplo breve:
['a', 'b', 'c'].includes('b');
// Verifica si 'b' está en el array. Resultado = true.

//***********************************
////....flat

// Crea una nueva instancia de array con todos los sub-elementos concatenados hasta la profundidad especificada
Array.prototype.flat = function (depth) {
    // lógica para aplanar el array
};
// Ejemplo breve:
[1, [2, [3]]].flat(2);
// Aplana el array hasta una profundidad de 2. Resultado = [1, 2, 3].

//***********************************
////....flatMap

// Devuelve un nuevo array de objetos, que contiene los resultados de la llamada de la función provista
Array.prototype.flatMap = function (callback) {
    // lógica para mapear cada elemento y aplanar el resultado
};
// Ejemplo breve:
[1, 2, 3].flatMap(n => [n, n * 2]);
// Mapea y aplana el resultado. Resultado = [1, 2, 2, 4, 3, 6].

//***********************************
////....values

// Devuelve un nuevo objeto Array Iterator que contiene los valores de cada índice del array
Array.prototype.values = function () {
    // lógica para devolver un iterador de valores
};
// Ejemplo breve:
let arr = ['a', 'b', 'c'];
let iterator = arr.values();
iterator.next().value;
// Devuelve el primer valor del iterador. Resultado = 'a'.

//***********************************
////....keys

// Devuelve un nuevo objeto Array Iterator que contiene las claves de cada índice del array
Array.prototype.keys = function () {
    // lógica para devolver un iterador de claves
};
// Ejemplo breve:
let arr = ['a', 'b', 'c'];
let iterator = arr.keys();
iterator.next().value;
// Devuelve la primera clave del iterador. Resultado = 0.

//***********************************
////....entries

// Devuelve un nuevo objeto Array Iterator que contiene pares clave/valor para cada índice del array
Array.prototype.entries = function () {
    // lógica para devolver un iterador de pares clave/valor
};
// Ejemplo breve:
let arr = ['a', 'b', 'c'];
let iterator = arr.entries();
iterator.next().value;
// Devuelve el primer par clave/valor del iterador. Resultado = [0, 'a'].

//***********************************
//***********************************
//***********************************
//***********************************
// ¿STRINGS:
//***********************************
//***********************************
//***********************************
////....charAt

// Devuelve el carácter en el índice especificado en una cadena
String.prototype.charAt = function (index) {
    // lógica para devolver el carácter en el índice especificado
};
// Ejemplo breve:
'hello'.charAt(1);
// Devuelve el carácter en el índice 1. Resultado = 'e'.

//***********************************
////....concat

// Combina dos o más cadenas y devuelve una nueva cadena
String.prototype.concat = function (...strings) {
    // lógica para concatenar cadenas
};
// Ejemplo breve:
'hello'.concat(' ', 'world');
// Combina 'hello' y 'world'. Resultado = 'hello world'.

//***********************************
////....includes

// Determina si una cadena puede encontrarse dentro de otra cadena
String.prototype.includes = function (searchString, position) {
    // lógica para verificar si una cadena contiene otra cadena
};
// Ejemplo breve:
'hello world'.includes('world');
// Verifica si 'world' está en 'hello world'. Resultado = true.

//***********************************
////....indexOf

// Devuelve el índice dentro del objeto String de la primera aparición del valor especificado, comenzando la búsqueda en fromIndex
String.prototype.indexOf = function (searchValue, fromIndex) {
    // lógica para encontrar el índice de la primera aparición del valor especificado
};
// Ejemplo breve:
'hello world'.indexOf('o');
// Encuentra el índice de 'o'. Resultado = 4.

//***********************************
////....toUpperCase

// Devuelve el valor de la cadena convertido en mayúsculas
String.prototype.toUpperCase = function () {
    // lógica para convertir la cadena a mayúsculas
};
// Ejemplo breve:
'hello'.toUpperCase();
// Convierte 'hello' a mayúsculas. Resultado = 'HELLO'.

//***********************************
////....toLowerCase

// Devuelve el valor de la cadena convertido en minúsculas
String.prototype.toLowerCase = function () {
    // lógica para convertir la cadena a minúsculas
};
// Ejemplo breve:
'HELLO'.toLowerCase();
// Convierte 'HELLO' a minúsculas. Resultado = 'hello'.

//***********************************
////....slice

// Extrae una sección de una cadena y devuelve una nueva cadena
String.prototype.slice = function (beginIndex, endIndex) {
    // lógica para extraer una sección de la cadena
};
// Ejemplo breve:
'hello world'.slice(0, 5);
// Extrae los primeros 5 caracteres. Resultado = 'hello'.

//***********************************
////....split

// Divide un objeto String en un array de cadenas mediante la separación de la cadena en subcadenas
String.prototype.split = function (separator, limit) {
    // lógica para dividir la cadena
};
// Ejemplo breve:
'hello world'.split(' ');
// Divide la cadena en palabras. Resultado = ['hello', 'world'].

//***********************************
////....trim

// Elimina los espacios en blanco de ambos extremos de una cadena
String.prototype.trim = function () {
    // lógica para eliminar los espacios en blanco
};
// Ejemplo breve:
'  hello  '.trim();
// Elimina los espacios en blanco. Resultado = 'hello'.

//***********************************
////....replace

// Devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazada por un valor
String.prototype.replace = function (searchValue, replaceValue) {
    // lógica para reemplazar coincidencias en la cadena
};
// Ejemplo breve:
'hello world'.replace('world', 'everyone');
// Reemplaza 'world' con 'everyone'. Resultado = 'hello everyone'.

//***********************************
////....substring

// Devuelve los caracteres de una cadena entre dos índices especificados
String.prototype.substring = function (indexStart, indexEnd) {
    // lógica para extraer caracteres entre dos índices
};
// Ejemplo breve:
'hello world'.substring(0, 5);
// Extrae los primeros 5 caracteres. Resultado = 'hello'. no modifica el string o variable original

//***********************************
//***********************************
//***********************************
//***********************************
//!Objects
// ¿OBJECTS:
//***********************************
//***********************************

//***********************************
////....keys

// Devuelve un array con las claves de las propiedades de un objeto
Object.keys = function (obj) {
    // lógica para devolver las claves del objeto
};
// Ejemplo breve:
Object.keys({ a: 1, b: 2, c: 3 });
// Devuelve las claves del objeto. Resultado = ['a', 'b', 'c'].

//***********************************
////....values

// Devuelve un array con los valores de las propiedades de un objeto
Object.values = function (obj) {
    // lógica para devolver los valores del objeto
};
// Ejemplo breve:
Object.values({ a: 1, b: 2, c: 3 });
// Devuelve los valores del objeto. Resultado = [1, 2, 3].

//***********************************
////....entries

// Devuelve un array de arrays, cada uno con la clave y el valor de las propiedades de un objeto
Object.entries = function (obj) {
    // lógica para devolver pares clave/valor del objeto
};
// Ejemplo breve:
Object.entries({ a: 1, b: 2, c: 3 });
// Devuelve los pares clave/valor del objeto. Resultado = [['a', 1], ['b', 2], ['c', 3]].

//***********************************
////....assign

// Copia los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino
Object.assign = function (target, ...sources) {
    // lógica para copiar propiedades a un objeto destino
};
// Ejemplo breve:
Object.assign({ a: 1 }, { b: 2 }, { c: 3 });
// Copia las propiedades de los objetos fuente al objeto destino. Resultado = {a: 1, b: 2, c: 3}.

//***********************************
////....create

// Crea un nuevo objeto con un prototipo especificado y propiedades opcionales
Object.create = function (proto, propertiesObject) {
    // lógica para crear un nuevo objeto con el prototipo especificado
};
// Ejemplo breve:
const proto = { greet: function () { return 'hello'; } };
const obj = Object.create(proto);
// Crea un objeto con 'proto' como prototipo. Resultado = obj.greet() devuelve 'hello'.

//***********************************
////....freeze

// Congela un objeto: impide que se le agreguen nuevas propiedades, que se eliminen propiedades existentes, que se cambien las enumerabilidades, configurabilidades, o valores de sus propiedades existentes
Object.freeze = function (obj) {
    // lógica para congelar un objeto
};
// Ejemplo breve:
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
// Congela el objeto, no permite cambios. Resultado = obj.a sigue siendo 1.

//***********************************
////....is

// Determina si dos valores tienen el mismo valor
Object.is = function (value1, value2) {
    // lógica para determinar si dos valores son iguales
};
// Ejemplo breve:
Object.is(25, 25);
// Verifica si ambos valores son iguales. Resultado = true.

//***********************************
////....seal

// Sella un objeto, evitando que se agreguen o eliminen propiedades del objeto, pero permite modificar las propiedades existentes
Object.seal = function (obj) {
    // lógica para sellar un objeto
};
// Ejemplo breve:
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2;
delete obj.a;
// Sella el objeto, permite modificaciones pero no eliminaciones. Resultado = obj.a es 2, delete no tiene efecto.

//***********************************
////....fromEntries

// Transforma una lista de pares clave-valor en un objeto
Object.fromEntries = function (entries) {
    // lógica para crear un objeto desde pares clave/valor
};
// Ejemplo breve:
Object.fromEntries([['a', 1], ['b', 2]]);
// Convierte pares clave/valor en un objeto. Resultado = {a: 1, b: 2}.

//***********************************
//***********************************
//***********************************
//!MATH
// ¿MATH:
//***********************************
//***********************************
//***********************************
//***********************************
////....abs

// Devuelve el valor absoluto de un número
Math.abs = function (x) {
    // lógica para devolver el valor absoluto
};
// Ejemplo breve:
Math.abs(-5);
// Devuelve el valor absoluto de -5. Resultado = 5.

//***********************************
////....ceil

// Devuelve el entero mayor o igual más próximo a un número
Math.ceil = function (x) {
    // lógica para redondear hacia arriba
};
// Ejemplo breve:
Math.ceil(4.2);
// Redondea 4.2 hacia arriba. Resultado = 5.

//***********************************
////....floor

// Devuelve el mayor entero menor o igual a un número
Math.floor = function (x) {
    // lógica para redondear hacia abajo
};
// Ejemplo breve:
Math.floor(4.9);
// Redondea 4.9 hacia abajo. Resultado = 4.

//***********************************
////....round

// Devuelve el valor de un número redondeado al entero más cercano
Math.round = function (x) {
    // lógica para redondear al entero más cercano
};
// Ejemplo breve:
Math.round(4.5);
// Redondea 4.5 al entero más cercano. Resultado = 5.

//***********************************
////....max

// Devuelve el mayor de cero o más números
Math.max = function (...values) {
    // lógica para encontrar el valor máximo
};
// Ejemplo breve:
Math.max(1, 3, 2);
// Encuentra el valor máximo. Resultado = 3.

//***********************************
////....min

// Devuelve el menor de cero o más números
Math.min = function (...values) {
    // lógica para encontrar el valor mínimo
};
// Ejemplo breve:
Math.min(1, 3, 2);
// Encuentra el valor mínimo. Resultado = 1.

//***********************************
////....random

// Devuelve un número pseudo-aleatorio entre 0 (inclusive) y 1 (exclusivo)
Math.random = function () {
    // lógica para generar un número aleatorio
};
// Ejemplo breve:
Math.random();
// Devuelve un número aleatorio. Resultado = un número entre 0 y 1.

//***********************************
////....sqrt

// Devuelve la raíz cuadrada de un número
Math.sqrt = function (x) {
    // lógica para calcular la raíz cuadrada
};
// Ejemplo breve:
Math.sqrt(16);
// Devuelve la raíz cuadrada de 16. Resultado = 4.

//***********************************
////....pow

// Devuelve la base elevada al exponente, esto es, base^exponente
Math.pow = function (base, exponent) {
    // lógica para calcular la potencia
};
// Ejemplo breve:
Math.pow(2, 3);
// Calcula 2 elevado a 3. Resultado = 8.

//***********************************
//***********************************
//***********************************
//!json
// ¿JSON:
//***********************************
//***********************************
//***********************************
//***********************************
////....parse

// Analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis
JSON.parse = function (text, reviver) {
    // lógica para analizar una cadena JSON
};
// Ejemplo breve:
JSON.parse('{"a":1,"b":2}');
// Convierte la cadena JSON en un objeto. Resultado = {a: 1, b: 2}.

//***********************************
////....stringify

// Convierte un objeto o valor de JavaScript en una cadena de texto JSON
JSON.stringify = function (value, replacer, space) {
    // lógica para convertir un objeto en una cadena JSON
};
// Ejemplo breve:
JSON.stringify({ a: 1, b: 2 });
// Convierte el objeto en una cadena JSON. Resultado = '{"a":1,"b":2}'.

//***********************************
////....parseAsync (no estándar, asumiendo un escenario asíncrono)

// Analiza una cadena de texto como JSON de forma asíncrona
JSON.parseAsync = async function (text, reviver) {
    // lógica para analizar una cadena JSON de forma asíncrona
    return JSON.parse(text, reviver);
};
// Ejemplo breve:
await JSON.parseAsync('{"a":1,"b":2}');
// Convierte la cadena JSON en un objeto de forma asíncrona. Resultado = {a: 1, b: 2}.

//***********************************
////....stringifyAsync (no estándar, asumiendo un escenario asíncrono)

// Convierte un objeto o valor de JavaScript en una cadena de texto JSON de forma asíncrona
JSON.stringifyAsync = async function (value, replacer, space) {
    // lógica para convertir un objeto en una cadena JSON de forma asíncrona
    return JSON.stringify(value, replacer, space);
};
// Ejemplo breve:
await JSON.stringifyAsync({ a: 1, b: 2 });
// Convierte el objeto en una cadena JSON de forma asíncrona. Resultado = '{"a":1,"b":2}'.

//***********************************
//***********************************
//***********************************
//***********************************
//***********************************
//!TYPESCRIPT
//***********************************
////*TYPESCRIPT:

//***********************************
// !Variables y Tipos Básicos
//***********************************
////....number

// Un tipo de datos para valores numéricos
let age: number = 25;
// Declara una variable de tipo número. Resultado = 25.

//***********************************
////....string

// Un tipo de datos para cadenas de texto
let name: string = "John";
// Declara una variable de tipo cadena. Resultado = "John".

//***********************************
////....boolean

// Un tipo de datos para valores verdaderos o falsos
let isActive: boolean = true;
// Declara una variable de tipo booleano. Resultado = true.

//***********************************
////....array

// Un tipo de datos para arrays, puede ser genérico
let numbers: number[] = [1, 2, 3];
// Declara un array de números. Resultado = [1, 2, 3].

//***********************************
////....tuple

// Un tipo de datos para arrays con un número fijo de elementos de tipos específicos
let person: [string, number] = ["John", 25];
// Declara una tupla con una cadena y un número. Resultado = ["John", 25].

//***********************************
////....enum

// Un tipo de datos para valores constantes
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
// Declara una enumeración y asigna un valor. Resultado = 1 (índice de Green).

//***********************************
////....any

// Un tipo de datos para cualquier valor
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
// Declara una variable de tipo any que puede cambiar de tipo. Resultado = true.

//***********************************
////....void

// Un tipo de datos para ausencia de valor, típicamente usado en funciones que no retornan nada
function warnUser(): void {
    console.log("This is a warning message");
}
// Declara una función que no retorna ningún valor. Resultado = "This is a warning message".

//***********************************
////....null y undefined

// Tipos de datos para valores nulos e indefinidos
let u: undefined = undefined;
let n: null = null;
// Declara variables de tipo undefined y null. Resultado = undefined y null.

//***********************************
////....never

// Un tipo de datos para valores que nunca ocurren, usado para funciones que siempre lanzan una excepción o que nunca retornan
function error(message: string): never {
    throw new Error(message);
}
// Declara una función que nunca retorna. Resultado = Error lanzado.

//***********************************
//***********************************
//***********************************
//***********************************
//***********************************
// !FUNCIONES:
//***********************************
//***********************************
////....funciones

// Declaración y uso de funciones con tipos
function add(x: number, y: number): number {
    return x + y;
}
// Declara una función que suma dos números. Resultado = 5 para add(2, 3).

//***********************************
////....funciones anónimas

// Declaración de funciones anónimas con tipos
let myAdd = function (x: number, y: number): number {
    return x + y;
};
// Declara una función anónima que suma dos números. Resultado = 5 para myAdd(2, 3).

//***********************************
////....funciones con parámetros opcionales y predeterminados

// Declaración de funciones con parámetros opcionales y predeterminados
function buildName(firstName: string, lastName?: string): string {
    return firstName + " " + (lastName || "");
}
// Declara una función con un parámetro opcional. Resultado = "John" para buildName("John").

//***********************************
////....funciones con parámetros de tipo rest

// Declaración de funciones con parámetros de tipo rest
function buildNameWithRest(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}
// Declara una función con parámetros de tipo rest. Resultado = "John Doe Smith" para buildNameWithRest("John", "Doe", "Smith").

//***********************************
//***********************************
//***********************************
//***********************************
//***********************************
// !OBJETOS:
// !Objetos y Tipos Avanzados
//***********************************
//***********************************
////....objetos

// Declaración y uso de tipos de objetos
let person: { name: string, age: number } = { name: "John", age: 25 };
// Declara un objeto con propiedades de tipo específico. Resultado = {name: "John", age: 25}.

//***********************************
////....interfaces

// Declaración y uso de interfaces
interface Person {
    name: string;
    age: number;
}

let john: Person = { name: "John", age: 25 };
// Declara una interfaz y un objeto que cumple con esa interfaz. Resultado = {name: "John", age: 25}.

//***********************************
////....interfaces opcionales

// Declaración de interfaces con propiedades opcionales
interface Person {
    name: string;
    age?: number;
}

let jane: Person = { name: "Jane" };
// Declara una interfaz con una propiedad opcional. Resultado = {name: "Jane"}.

//***********************************
////....interfaces con propiedades de solo lectura

// Declaración de interfaces con propiedades de solo lectura
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// Declara una interfaz con propiedades de solo lectura. Resultado = {x: 10, y: 20}.

//***********************************
////....interfaces con métodos

// Declaración de interfaces con métodos
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
}
// Declara una interfaz con métodos y una clase que implementa esa interfaz. Resultado = Clock con currentTime y setTime.

//***********************************
//***********************************
////....clases

// Declaración y uso de clases
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
// Declara una clase con un constructor y un método. Resultado = "Hello, world" para greeter.greet().

//***********************************
////....herencia

// Declaración y uso de herencia en clases
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
// Declara una clase que hereda de otra clase. Resultado = "Woof! Woof!" y "Animal moved 10m.".

//***********************************
////....modificadores de acceso

// Uso de modificadores de acceso en clases
class Animal {
    private name: string;
    protected age: number;
    public color: string;

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

let cat = new Animal("Kitty", 2, "black");
// Declara una clase con modificadores de acceso. Resultado = "Kitty", 2, "black" para las propiedades respectivas.

//***********************************
////....clases abstractas

// Declaración y uso de clases abstractas
abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // Debe ser implementado en clases derivadas
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // Constructores en clases derivadas deben llamar super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
// department = new Department(); // Error: no se puede crear una instancia de una clase abstracta
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // Error: método no declarado en el tipo 'Department'

//***********************************
//***********************************
//***********************************
//***********************************
// !CLASES
// !Clases y Herencia
//***********************************
//***********************************
////....clases

// Declaración y uso de clases
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
// Declara una clase con un constructor y un método. Resultado = "Hello, world" para greeter.greet().

//***********************************
////....herencia

// Declaración y uso de herencia en clases
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
// Declara una clase que hereda de otra clase. Resultado = "Woof! Woof!" y "Animal moved 10m.".

//***********************************
////....modificadores de acceso

// Uso de modificadores de acceso en clases
class Animal {
    private name: string;
    protected age: number;
    public color: string;

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

let cat = new Animal("Kitty", 2, "black");
// Declara una clase con modificadores de acceso. Resultado = "Kitty", 2, "black" para las propiedades respectivas.

//***********************************
////....clases abstractas

// Declaración y uso de clases abstractas
abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // Debe ser implementado en clases derivadas
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // Constructores en clases derivadas deben llamar super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
// department = new Department(); // Error: no se puede crear una instancia de una clase abstracta
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // Error: método no declarado en el tipo 'Department'

//***********************************
//***********************************
//***********************************
//***********************************
//***********************************
// !GENERICS
//***********************************
//***********************************
////....funciones genéricas

// Declaración y uso de funciones genéricas
function identity<T>(arg: T): T {
    return arg;
}

let output = identity < string > ("myString");
// Declara una función genérica. Resultado = "myString" para identity("myString").

//***********************************
////....clases genéricas

// Declaración y uso de clases genéricas
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber < number > ();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// Declara una clase genérica. Resultado = myGenericNumber con propiedades zeroValue y add.

//***********************************
////....interfaces genéricas

// Declaración y uso de interfaces genéricas
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
// Declara una interfaz genérica y la utiliza. Resultado = identity para myIdentity(10).

//***********************************
//***********************************
//***********************************
//***********************************
//***********************************


// !METODOS DOM

//***********************************
////....getElementById

// Devuelve una referencia al elemento por su ID
document.getElementById = function (id) {
    // lógica para obtener el elemento por su ID
};
// Ejemplo breve:
document.getElementById('myId');
// Busca y devuelve el elemento con id 'myId'. Resultado = <div id="myId"></div> (si existe).

//***********************************
////....getElementsByClassName

// Devuelve una colección de todos los elementos en el documento con la clase especificada
document.getElementsByClassName = function (className) {
    // lógica para obtener los elementos por su clase
};
// Ejemplo breve:
document.getElementsByClassName('myClass');
// Busca y devuelve todos los elementos con clase 'myClass'. Resultado = HTMLCollection [element1, element2, ...].

//***********************************
////....getElementsByTagName

// Devuelve una colección de todos los elementos en el documento con el nombre de la etiqueta especificada
document.getElementsByTagName = function (tagName) {
    // lógica para obtener los elementos por su etiqueta
};
// Ejemplo breve:
document.getElementsByTagName('div');
// Busca y devuelve todos los elementos <div>. Resultado = HTMLCollection [div1, div2, ...].

//***********************************
////....querySelector

// Devuelve el primer elemento del documento que coincide con el selector especificado
document.querySelector = function (selector) {
    // lógica para obtener el primer elemento que coincide con el selector
};
// Ejemplo breve:
document.querySelector('.myClass');
// Busca y devuelve el primer elemento con clase 'myClass'. Resultado = <div class="myClass"></div> (el primer elemento encontrado).

//***********************************
////....querySelectorAll

// Devuelve una lista estática de todos los elementos del documento que coinciden con el selector especificado
document.querySelectorAll = function (selector) {
    // lógica para obtener todos los elementos que coinciden con el selector
};
// Ejemplo breve:
document.querySelectorAll('.myClass');
// Busca y devuelve todos los elementos con clase 'myClass'. Resultado = NodeList [element1, element2, ...].

//***********************************
////....createElement

// Crea un nuevo elemento HTML especificado por su tagName
document.createElement = function (tagName) {
    // lógica para crear un nuevo elemento
};
// Ejemplo breve:
document.createElement('div');
// Crea un nuevo elemento <div>. Resultado = <div></div>.

//***********************************
////....appendChild

// Añade un nuevo nodo al final de la lista de un nodo padre especificado
Element.prototype.appendChild = function (newChild) {
    // lógica para añadir un nuevo nodo hijo
};
// Ejemplo breve:
document.body.appendChild(document.createElement('div'));
// Añade un nuevo <div> al final del body. Resultado = <body> ... <div></div> </body>.

//***********************************
////....removeChild

// Elimina un nodo hijo del DOM y lo devuelve
Element.prototype.removeChild = function (child) {
    // lógica para eliminar un nodo hijo
};
// Ejemplo breve:
let child = document.getElementById('myId');
document.body.removeChild(child);
// Elimina el elemento con id 'myId' del body. Resultado = el elemento con id 'myId' ya no está en el DOM.

//***********************************
////....replaceChild

// Reemplaza un nodo hijo por otro nodo
Element.prototype.replaceChild = function (newChild, oldChild) {
    // lógica para reemplazar un nodo hijo
};
// Ejemplo breve:
let newChild = document.createElement('span');
let oldChild = document.getElementById('myId');
document.body.replaceChild(newChild, oldChild);
// Reemplaza el elemento con id 'myId' por un nuevo <span>. Resultado = <body> ... <span></span> ... </body>.

//***********************************
////....cloneNode

// Clona un nodo, y si deep es true, también clona sus hijos
Element.prototype.cloneNode = function (deep) {
    // lógica para clonar un nodo
};
// Ejemplo breve:
let clone = document.getElementById('myId').cloneNode(true);
// Clona el elemento con id 'myId' y todos sus hijos. Resultado = un nuevo nodo idéntico al original.

//***********************************
////....addEventListener

// Adjunta un evento a un elemento
Element.prototype.addEventListener = function (type, listener) {
    // lógica para añadir un evento
};
// Ejemplo breve:
document.getElementById('myButton').addEventListener('click', function () {
    alert('Button clicked!');
});
// Añade un evento de clic al botón con id 'myButton'. Resultado = muestra una alerta cuando se hace clic en el botón.

//***********************************
////....removeEventListener

// Elimina un evento previamente registrado
Element.prototype.removeEventListener = function (type, listener) {
    // lógica para eliminar un evento
};
// Ejemplo breve:
function handleClick() {
    alert('Button clicked!');
}
document.getElementById('myButton').addEventListener('click', handleClick);
document.getElementById('myButton').removeEventListener('click', handleClick);
// Añade y luego elimina un evento de clic del botón con id 'myButton'. Resultado = el botón ya no muestra una alerta al hacer clic.

//***********************************
////....setAttribute

// Establece el valor de un atributo en el elemento especificado
Element.prototype.setAttribute = function (name, value) {
    // lógica para establecer un atributo
};
// Ejemplo breve:
document.getElementById('myDiv').setAttribute('data-custom', 'value');
// Establece un atributo 'data-custom' con el valor 'value' en el elemento con id 'myDiv'. Resultado = <div id="myDiv" data-custom="value"></div>.

//***********************************
////....getAttribute

// Devuelve el valor del atributo especificado en el elemento
Element.prototype.getAttribute = function (name) {
    // lógica para obtener un atributo
};
// Ejemplo breve:
document.getElementById('myDiv').getAttribute('data-custom');
// Obtiene el valor del atributo 'data-custom' en el elemento con id 'myDiv'. Resultado = 'value' (si el atributo existe).

//***********************************
////....removeAttribute

// Elimina el atributo especificado del elemento
Element.prototype.removeAttribute = function (name) {
    // lógica para eliminar un atributo
};
// Ejemplo breve:
document.getElementById('myDiv').removeAttribute('data-custom');
// Elimina el atributo 'data-custom' del elemento con id 'myDiv'. Resultado = <div id="myDiv"></div> (sin el atributo 'data-custom').




✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
### Índice

1. [typeof](#typeof)
2. [instanceof](#instanceof)
3. [Array.isArray](#arrayisarray)
4. [parseInt](#parseint)
5. [parseFloat](#parsefloat)
6. [isNaN](#isnan)
7. [isFinite](#isfinite)
8. [Object.keys](#objectkeys)
9. [Object.values](#objectvalues)
10. [Object.entries](#objectentries)
11. [JSON.stringify](#jsonstringify)
12. [JSON.parse](#jsonparse)
13. [Number](#number)
14. [String](#string)
15. [Boolean](#boolean)

---

---

### Expresiones regulares

1. [RegExp](#regexp)
2. [test](#test)
3. [exec](#exec)
4. [match](#match)
5. [matchAll](#matchall)
6. [replace](#replace)
7. [replaceAll](#replaceall)
8. [search](#search)
9. [split](#split)

---

### 1. typeof

**Descripción:**
Devuelve una cadena que indica el tipo de una variable u objeto.

**Uso:**

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof null); // "object" (esto es una peculiaridad de JavaScript)
console.log(typeof function () {}); // "function"
console.log(typeof Symbol()); // "symbol"
```

---

### 2. instanceof

**Descripción:**
Verifica si un objeto es una instancia de una clase o constructor.

**Uso:**

```javascript
const date = new Date();
console.log(date instanceof Date); // true

const arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
```

---

### 3. Array.isArray

**Descripción:**
Determina si el valor pasado es un Array.

**Uso:**

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
```

---

### 4. parseInt

**Descripción:**
Convierte una cadena a un número entero.

**Uso:**

```javascript
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("101", 2)); // 5 (interpreta '101' como binario)
```

---

### 5. parseFloat

**Descripción:**
Convierte una cadena a un número de punto flotante.

**Uso:**

```javascript
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14px")); // 3.14
```

---

### 6. isNaN

**Descripción:**
Determina si el valor es NaN (Not-a-Number).

**Uso:**

```javascript
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true (cadena no numérica)
console.log(isNaN(42)); // false
```

---

### 7. isFinite

**Descripción:**
Determina si el valor es un número finito.

**Uso:**

```javascript
console.log(isFinite(42)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
```

---

### 8. Object.keys

**Descripción:**
Devuelve un array con las claves (propiedades) enumerables de un objeto.

**Uso:**

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
```

---

### 9. Object.values

**Descripción:**
Devuelve un array con los valores de las propiedades enumerables de un objeto.

**Uso:**

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
```

---

### 10. Object.entries

**Descripción:**
Devuelve un array de pares [key, value] de las propiedades enumerables de un objeto.

**Uso:**

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
```

---

### 11. JSON.stringify

**Descripción:**
Convierte un objeto o valor de JavaScript a una cadena JSON.

**Uso:**

```javascript
const obj = { name: "Alice", age: 25 };
console.log(JSON.stringify(obj)); // '{"name":"Alice","age":25}'
```

---

### 12. JSON.parse

**Descripción:**
Convierte una cadena JSON a un objeto o valor de JavaScript.

**Uso:**

```javascript
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);
console.log(obj); // { name: 'Alice', age: 25 }
```

---

### 13. Number

**Descripción:**
Convierte un valor a un número.

**Uso:**

```javascript
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

---

### 14. String

**Descripción:**
Convierte un valor a una cadena.

**Uso:**

```javascript
console.log(String(42)); // "42"
console.log(String(true)); // "true"
console.log(String({ name: "Alice" })); // "[object Object]"
```

---

### 15. Boolean

**Descripción:**
Convierte un valor a un booleano.

**Uso:**

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

### 1. RegExp

**Descripción:**
El constructor `RegExp` crea un objeto de expresión regular para buscar texto con un patrón específico.

**Uso:**

```javascript
const regex = new RegExp("hello", "i"); // 'i' es un flag que indica búsqueda sin distinguir mayúsculas
const regex2 = /hello/i; // Sintaxis literal
```

---

### 2. test

**Descripción:**
Prueba si hay una coincidencia en una cadena. Devuelve `true` o `false`.

**Uso:**

```javascript
const regex = /hello/i;
console.log(regex.test("Hello World")); // true
console.log(regex.test("Hi there")); // false
```

---

### 3. exec

**Descripción:**
Busca una coincidencia en una cadena y devuelve un array de información sobre la coincidencia encontrada o `null`.

**Uso:**

```javascript
const regex = /hello/i;
const result = regex.exec("Hello World");
console.log(result); // ["Hello", index: 0, input: "Hello World", groups: undefined]
```

---

### 4. match

**Descripción:**
Busca una coincidencia en una cadena y devuelve un array con las coincidencias o `null`. Funciona con el método `String`.

**Uso:**

```javascript
const str = "Hello World";
const result = str.match(/hello/i);
console.log(result); // ["Hello", index: 0, input: "Hello World", groups: undefined]
```

---

### 5. matchAll

**Descripción:**
Devuelve un iterador de todas las coincidencias de una expresión regular en una cadena.

**Uso:**

```javascript
const str = "Hello World, hello universe";
const regex = /hello/gi;
const matches = str.matchAll(regex);

for (const match of matches) {
  console.log(match); // Imprime todas las coincidencias encontradas
}
// ["Hello", index: 0, input: "Hello World, hello universe", groups: undefined]
// ["hello", index: 13, input: "Hello World, hello universe", groups: undefined]
```

---

### 6. replace

**Descripción:**
Reemplaza coincidencias en una cadena con una nueva subcadena. Funciona con el método `String`.

**Uso:**

```javascript
const str = "Hello World";
const newStr = str.replace(/hello/i, "Hi");
console.log(newStr); // "Hi World"
```

---

### 7. replaceAll

**Descripción:**
Reemplaza todas las coincidencias en una cadena con una nueva subcadena. Funciona con el método `String`.

**Uso:**

```javascript
const str = "Hello World, hello universe";
const newStr = str.replaceAll(/hello/gi, "Hi");
console.log(newStr); // "Hi World, Hi universe"
```

---

### 8. search

**Descripción:**
Busca una coincidencia en una cadena y devuelve el índice de la primera coincidencia o `-1` si no se encuentra. Funciona con el método `String`.

**Uso:**

```javascript
const str = "Hello World";
const index = str.search(/world/i);
console.log(index); // 6
```

---

### 9. split

**Descripción:**
Divide una cadena en un array de subcadenas usando una expresión regular o un separador. Funciona con el método `String`.

**Uso:**

```javascript
const str = "apple, banana, cherry";
const array = str.split(/,\s*/);
console.log(array); // ["apple", "banana", "cherry"]
```

---


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

//***********************************

// !RESUMEN CSS

// /************************************
////....color

// /* Establece el color del texto */
color: red;
/* Ejemplo breve: */
p {
    color: red;
}
// /* El texto del párrafo será rojo. Resultado: <p style="color: red;">Texto</p>. */

// /***********************************
////....background-color

// /* Establece el color de fondo de un elemento */
// background - color: blue;
// /* Ejemplo breve: */
// div {
//     background - color: blue;
// }
// /* El fondo del div será azul. Resultado: <div style="background-color: blue;">Contenido</div>. */

// /***********************************
////....font-size

// /* Establece el tamaño de la fuente */
// font - size: 16px;
// /* Ejemplo breve: */
// h1 {
//     font - size: 32px;
// }
// /* El tamaño del texto del encabezado será 32px. Resultado: <h1 style="font-size: 32px;">Encabezado</h1>. */

// /***********************************
////....margin

// /* Establece el margen externo de un elemento */
// margin: 20px;
// /* Ejemplo breve: */
// div {
//     margin: 20px;
// }
// /* El div tendrá un margen de 20px alrededor. Resultado: <div style="margin: 20px;">Contenido</div>. */

// /***********************************
////....padding

// /* Establece el relleno interno de un elemento */
// padding: 10px;
// /* Ejemplo breve: */
// div {
//     padding: 10px;
// }
// /* El div tendrá un relleno de 10px dentro de sus bordes. Resultado: <div style="padding: 10px;">Contenido</div>. */

// /***********************************
////....border

// /* Establece el borde de un elemento */
// border: 1px solid black;
// /* Ejemplo breve: */
// div {
//     border: 1px solid black;
// }
// /* El div tendrá un borde de 1px de grosor y color negro. Resultado: <div style="border: 1px solid black;">Contenido</div>. */

// /***********************************
////....width

// /* Establece el ancho de un elemento */
// width: 100px;
// /* Ejemplo breve: */
// img {
//     width: 100px;
// }
// /* La imagen tendrá un ancho de 100px. Resultado: <img style="width: 100px;" src="imagen.jpg" alt="Imagen"> */

// /***********************************
////....height

// /* Establece la altura de un elemento */
// height: 200px;
// /* Ejemplo breve: */
// img {
//     height: 200px;
// }
// /* La imagen tendrá una altura de 200px. Resultado: <img style="height: 200px;" src="imagen.jpg" alt="Imagen"> */

// /***********************************
////....display

// /* Establece cómo se muestra un elemento */
// display: none;
// /* Ejemplo breve: */
// div {
//     display: none;
// }
// /* El div no se mostrará en la página. Resultado: <div style="display: none;">Contenido</div>. */

// /***********************************
////....position

// /* Establece el método de posicionamiento de un elemento */
// position: absolute;
// /* Ejemplo breve: */
// div {
//     position: absolute;
//     top: 50px;
//     left: 100px;
// }
// /* El div se posicionará a 50px del top y 100px del left del contenedor relativo más cercano. Resultado: <div style="position: absolute; top: 50px; left: 100px;">Contenido</div>. */

// /***********************************
////....flex

// /* Establece las propiedades flexibles de un contenedor flex */
// display: flex;
// /* Ejemplo breve: */
// div {
//     display: flex;
//     justify - content: center;
//     align - items: center;
// }
// /* Los elementos hijos del div se alinearán al centro del contenedor flex. Resultado: <div style="display: flex; justify-content: center; align-items: center;">Contenido</div>. */

// /***********************************
////....grid

// /* Establece las propiedades de un contenedor de cuadrícula */
// display: grid;
// /* Ejemplo breve: */
// div {
//     display: grid;
//     grid - template - columns: repeat(3, 1fr);
//     gap: 10px;
// }
// /* El div se divide en una cuadrícula con 3 columnas iguales y un espacio de 10px entre las celdas. Resultado: <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">Contenido</div>. */

// /***********************************
////....text-align

// /* Establece la alineación del texto dentro de un elemento */
// text - align: center;
// /* Ejemplo breve: */
// p {
//     text - align: center;
// }
// /* El texto del párrafo se centrará horizontalmente. Resultado: <p style="text-align: center;">Texto</p>. */

// /***********************************
////....align-items

// /* Alinea los elementos dentro de un contenedor flex */
// align - items: center;
// /* Ejemplo breve: */
// div {
//     display: flex;
//     align - items: center;
// }
// /* Los elementos hijos del div se alinearán al centro verticalmente. Resultado: <div style="display: flex; align-items: center;">Contenido</div>. */

// /***********************************
////....justify-content

// /* Justifica los elementos dentro de un contenedor flex */
// justify - content: space - between;
// /* Ejemplo breve: */
// div {
//     display: flex;
//     justify - content: space - between;
// }
// /* Los elementos hijos del div se distribuirán con espacio entre ellos. Resultado: <div style="display: flex; justify-content: space-between;">Contenido</div>. */

// /***********************************
////....background-image

// /* Establece una imagen de fondo para un elemento */
// background - image: url('image.jpg');
// /* Ejemplo breve: */
// div {
//     background - image: url('image.jpg');
// }
// /* El fondo del div será la imagen especificada. Resultado: <div style="background-image: url('image.jpg');">Contenido</div>. */

// /***********************************
////....background-size

// /* Establece el tamaño de la imagen de fondo */
// background - size: cover;
// /* Ejemplo breve: */
// div {
//     background - size: cover;
// }
// /* La imagen de fondo cubrirá completamente el div sin distorsionarse. Resultado: <div style="background-size: cover;">Contenido</div>. */

// /***********************************
////....opacity

// /* Establece la opacidad de un elemento */
// opacity: 0.5;
// /* Ejemplo breve: */
// div {
//     opacity: 0.5;
// }
// /* El div será semi-transparente. Resultado: <div style="opacity: 0.5;">Contenido</div>. */

// /***********************************
////....transition

// /* Establece el efecto de transición entre estados de un elemento */
// transition: all 0.3s ease;
// /* Ejemplo breve: */
// div {
//     transition: all 0.3s ease;
// }
// /* Los cambios en todas las propiedades se animarán durante 0.3 segundos con una transición suave. Resultado: <div style="transition: all 0.3s ease;">Contenido</div>. */

// /***********************************
////....transform

// /* Aplica transformaciones 2D o 3D a un elemento */
// transform: rotate(45deg);
// /* Ejemplo breve: */
// div {
//     transform: rotate(45deg);
// }
// /* El div se rotará 45 grados. Resultado: <div style="transform: rotate(45deg);">Contenido</div>. */

// /***********************************
////....box-shadow

// /* Aplica una sombra a un elemento */
// box - shadow: 10px 10px 5px #888888;
// /* Ejemplo breve: */
// div {
//     box - shadow: 10px 10px 5px #888888;
// }
// /* El div tendrá una sombra de 10px horizontal y vertical, con 5px de difuminado y color #888888. Resultado: <div style="box-shadow: 10px 10px 5px #888888;">Contenido</div>. */

// /***********************************
////....border-radius

// /* Establece el radio de las esquinas del borde de un elemento */
// border - radius: 10px;
// /* Ejemplo breve: */
// div {
//     border - radius: 10px;
// }
// /* Las esquinas del div serán redondeadas con un radio de 10px. Resultado: <div style="border-radius: 10px;">Contenido</div>. */

// /***********************************
////....overflow

// /* Controla lo que sucede si el contenido desborda el área del elemento */
// overflow: hidden;
// /* Ejemplo breve: */
// div {
//     overflow: hidden;
// }
// /* El contenido que desborde el div no será visible. Resultado: <div style="overflow: hidden;">Contenido</div>. */

// /***********************************
////....z-index

// /* Establece el orden z de un elemento posicionado */
// z - index: 10;
// /* Ejemplo breve: */
// div {
//     position: absolute;
//     z - index: 10;
// }
// /* El div tendrá una prioridad z de 10, colocándolo por delante de otros elementos con menor z-index. Resultado: <div style="position: absolute; z-index: 10;">Contenido</div>. */

// /***********************************
// /***********************************
// /***********************************
// /***********************************
//  // !FUNCIONALIDADES:
//  /***********************************
//  /***********************************
//  /***********************************


//  //***********************************
////....Media Queries

// /* Aplica estilos específicos según el tamaño de la pantalla o dispositivo */
// @media(max - width: 600px) {
//     body {
//         background - color: lightblue;
//     }
// }
// /* Si el ancho de la pantalla es menor o igual a 600px, el fondo del body será azul claro. Resultado: <body style="background-color: lightblue;">Contenido</body> en pantallas pequeñas. */

// //***********************************
////....Pseudo-clases

// /* Aplica estilos a un estado específico de un elemento */
// a:hover {
//     color: red;
// }
// /* Cuando el usuario pasa el cursor sobre el enlace, su color cambiará a rojo. Resultado: <a style="color: red;" href="#">Enlace</a> al pasar el cursor. */

// //***********************************
////....Pseudo-elementos

// /* Aplica estilos a una parte específica de un elemento */
// p:: first - line {
//     font - weight: bold;
// }
// /* La primera línea del párrafo será negrita. Resultado: <p style="font-weight: bold;">Primera línea</p>. */

// //***********************************
////....Keyframes

// /* Define una animación CSS */
// @keyframes example {
//     0 % {
//         background- color: red;
// }
// 100 % {
//     background- color: yellow;
//     }
// }
// /* La animación cambiará el fondo de rojo a amarillo. Resultado: <div style="animation: example 5s;">Contenido</div> animará el color de fondo. */

// //***********************************
////....Animations

// /* Aplica la animación a un elemento */
// div {
//     animation: example 5s infinite;
// }
// /* El div animará su fondo de rojo a amarillo cada 5 segundos. Resultado: <div style="animation: example 5s infinite;">Contenido</div>. */

// //***********************************
////....Variables

// /* Define variables CSS */
// :root {
//     --main - color: coral;
// }
// /* Usa la variable en propiedades CSS */
// p {
//     color: var(--main - color);
// }
// /* El color del texto del párrafo será coral. Resultado: <p style="color: coral;">Texto</p>. */

// //***********************************
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// !INNOVACIONES Y CURIOSIDADES:

/////....Basico


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
SELECTION AND ORGANIZATION:

// con > se toma el elemento siguiente.

// con + se toma un hermano seguido de otro en ese orden ej:
```css
p + span { 
color: yellow; 
} 
```
```html
 <p>This is a paragraph</p>
 <span>This is a yellow span</span>
```

We have a lot more selectors we can use:
 attribute selectors
 pseudo class selectors
 pseudo element selectors

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// !RESUMEN REACT:

Para iniciar el frontend:
 npm create vite@latest 

 para implementar react bootstrap podemos agregar en main.tsx la importacion de la libreria css de reac bootstrap y ejecutar el comando npm de ract bootstrap, luego solo es copiar los componentes. Todo ello extraido directamente de la libreria.

// !HOOKS

//***********************************
//***********************************
//***********************************
////....useState

// Declara una variable de estado y una función para actualizarla
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
// Declara una variable `count` con valor inicial 0 y la función `setCount` para actualizarla. Resultado = La cuenta incrementa cada vez que se hace clic en el botón.

//***********************************
////....useEffect

// Realiza efectos secundarios en componentes funcionales
import { useEffect } from 'react';

function Example() {
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }); //  Sin lista de dependencias: Se ejecuta en cada renderizado.
        // [] Con lista de dependencias vacía: Se ejecuta solo al montar el componente.
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
// Ejecuta el efecto después de cada renderizado. En este caso, actualiza el título del documento. Resultado = El título del documento cambia cada vez que se hace clic en el botón.

//***********************************
////....useContext

// Accede al contexto en un componente funcional
import { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>I am styled by theme context!</button>;
}
// Usa el valor del contexto `ThemeContext` en el componente. Resultado = El botón se estiliza según el valor del contexto.

//***********************************
////....useReducer

// Maneja el estado con un reductor
import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
// Usa un reductor para manejar el estado. Resultado = La cuenta incrementa o decrementa según el botón presionado.

//***********************************
////....useRef

// Crea una referencia mutable que persiste durante el ciclo de vida completo del componente
import { useRef } from 'react';

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}
// Crea una referencia al elemento input para enfocarlo cuando se presiona el botón. Resultado = El campo de entrada se enfoca cuando se hace clic en el botón.

//***********************************
////....useMemo

// Memoriza valores calculados para optimizar el rendimiento
import { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
    const expensiveValue = useMemo(() => {
        return a + b;
    }, [a, b]);
    return <div>{expensiveValue}</div>;
}
// Memoriza el valor `expensiveValue` para recalcularlo solo cuando cambien `a` o `b`. Resultado = El componente se renderiza más eficientemente.

//***********************************
////....useCallback

// Memoriza funciones para optimizar el rendimiento
import { useCallback } from 'react';

function Parent({ onClick }) {
    const handleClick = useCallback(() => {
        console.log('Clicked');
    }, []);
    return <button onClick={handleClick}>Click me</button>;
}
// Memoriza la función `handleClick` para que no se vuelva a crear en cada renderizado. Resultado = El botón imprime "Clicked" en la consola cuando se hace clic.

//***********************************
////....useLayoutEffect

// Igual que useEffect, pero se dispara síncronamente después de todas las mutaciones del DOM
import { useLayoutEffect, useRef } from 'react';

function LayoutEffectExample() {
    const ref = useRef();
    useLayoutEffect(() => {
        console.log(ref.current.getBoundingClientRect());
    });
    return <div ref={ref}>Hello, world</div>;
}
// Ejecuta el efecto inmediatamente después de las mutaciones del DOM. Resultado = Muestra las dimensiones del elemento en la consola justo después de que se renderiza.

//***********************************
////....useImperativeHandle

// Personaliza la instancia de valor que se expone cuando se usa ref en un componente
import { useImperativeHandle, forwardRef, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />;
});

function Parent() {
    const inputRef = useRef();
    return (
        <div>
            <FancyInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus input</button>
        </div>
    );
}
// Personaliza la instancia expuesta por el ref. Resultado = El campo de entrada se enfoca cuando se hace clic en el botón.

//***********************************
////....useDebugValue

// Muestra una etiqueta en las herramientas de desarrollo de React
import { useDebugValue } from 'react';

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    useDebugValue(isOnline ? 'Online' : 'Offline');
    // ... lógica para suscribirse/desuscribirse
    return isOnline;
}
// Muestra "Online" u "Offline" en las herramientas de desarrollo de React. Resultado = Ayuda a depurar el hook en las herramientas de desarrollo.

//***********************************
//***********************************
// !COMPONENTS
//***********************************
//***********************************


//***********************************
////....Componentes de Clase

// Declaración de un componente de clase
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
// Declara un componente de clase que muestra un saludo. Resultado = "Hello, [nombre]" según la propiedad `name`.

//***********************************
////....Componentes Funcionales

// Declaración de un componente funcional
import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// Declara un componente funcional que muestra un saludo. Resultado = "Hello, [nombre]" según la propiedad `name`.

//***********************************
////....JSX

// Sintaxis de JavaScript que produce elementos de React
const element = <h1>Hello, world!</h1>;
// Crea un elemento de React usando JSX. Resultado = <h1>Hello, world!</h1>.

//***********************************
////....Props

// Propiedades que se pasan a los componentes
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// Usa propiedades en un componente funcional. Resultado = "Hello, [nombre]" según la propiedad `name`.

//***********************************
////....State

// Estado local en componentes de clase
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// Usa estado en un componente de clase para mostrar la hora actual. Resultado = "It is [hora actual]".

//***********************************
////....Lifecycle Methods

// Métodos de ciclo de vida en componentes de clase
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// Usa métodos de ciclo de vida para configurar y limpiar un temporizador. Resultado = "It is [hora actual]" que se actualiza cada segundo.

//***********************************
////....Fragment

// Agrupa una lista de hijos sin agregar nodos extra al DOM
import React from 'react';

function ListItem({ item }) {
    return (
        <React.Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </React.Fragment>
    );
}
// Usa Fragment para devolver múltiples elementos. Resultado = Una lista con términos y descripciones sin elementos extra en el DOM.

//***********************************
////....Context

// Proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel
const ThemeContext = React.createContext('light');

function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider value="dark">
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const theme = React.useContext(ThemeContext);
    return <button className={theme}>Button</button>;
}
// Usa Context para compartir el tema a través del árbol de componentes. Resultado = El botón se estiliza según el tema proporcionado.

//***********************************


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
// !comceptos clave React

// Important: after of "return" in a component could not put comments, because this appear in
   the render.

### **JSX**

**Explicación:** JSX es una extensión de la sintaxis de JavaScript que permite escribir código que se parece a HTML dentro de JavaScript. Es una forma de describir la estructura de la interfaz de usuario.

**Ejemplo:**
```jsx
const element = <h1>Hello, world!</h1>;
```

---

### **Componentes**

**Explicación:** Los componentes son bloques de construcción en React. Pueden ser de clase o funcionales, y encapsulan el comportamiento y la presentación que se pueden reutilizar en diferentes partes de la aplicación.

**Ejemplo:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

### **Estado (State)**

**Explicación:** El estado es un objeto que representa los datos dinámicos de un componente. Los componentes pueden cambiar su propio estado usando `setState` en componentes de clase o el hook `useState` en componentes funcionales.

**Ejemplo:**
```jsx
const [count, setCount] = useState(0);
```

---

### **Props**

**Explicación:** Props son argumentos que se pasan a los componentes. Son inmutables, lo que significa que un componente no puede cambiarlas directamente.

**Ejemplo:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

### **Ciclo de vida de los componentes**

**Explicación:** Los métodos del ciclo de vida de los componentes son funciones especiales en los componentes de clase que permiten ejecutar código en momentos específicos del ciclo de vida del componente.

**Ejemplo:**
```jsx
componentDidMount() {
  // Código que se ejecuta después de que el componente se ha montado
}
```

---

### **Hooks**

**Explicación:** Los hooks son funciones que permiten usar el estado y otras características de React sin escribir una clase. Los hooks más comunes son `useState` y `useEffect`.

**Ejemplo:**
```jsx
useEffect(() => {
  // Código que se ejecuta después de renderizar el componente
}, []);
```

---

### **Renderizado condicional**

**Explicación:** El renderizado condicional permite mostrar u ocultar elementos de la interfaz de usuario en función de ciertas condiciones.

**Ejemplo:**
```jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```

---

### **Listas y claves**

**Explicación:** Al renderizar listas de elementos en React, es importante proporcionar una "key" única para cada elemento para ayudar a React a identificar qué elementos han cambiado, han sido añadidos o eliminados.

**Ejemplo:**
```jsx
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);
```

---

### **Context API**

**Explicación:** La Context API permite pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

**Ejemplo:**
```jsx
const MyContext = React.createContext();

<MyContext.Provider value={/* algún valor */}>
  <MyComponent />
</MyContext.Provider>
```

---

### **Fragmentos**

**Explicación:** Los fragmentos permiten agrupar una lista de hijos sin agregar nodos adicionales al DOM.

**Ejemplo:**
```jsx
<React.Fragment>
  <ChildA />
  <ChildB />
</React.Fragment>
```

---

### **Portales**

**Explicación:** Los portales proporcionan una forma de renderizar hijos en un nodo del DOM que existe fuera de la jerarquía DOM del componente padre.

**Ejemplo:**
```jsx
ReactDOM.createPortal(
  <ChildComponent />,
  document.getElementById('modal-root')
);
```

---

### **Error Boundaries**

**Explicación:** Los Error Boundaries son componentes que capturan errores en sus hijos y evitan que se propaguen, permitiendo manejar errores de manera específica.

**Ejemplo:**
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
// !parametros de las funciones js
### Array Methods

**************************\*\*************************** `.filter()`

```javascript
const newArray = array.filter(callback(element[, index[, array]])[, thisArg]);
```

- **Parámetros**:
  - `callback`: Función que prueba cada elemento del array.
    - `element`: El elemento actual que se está procesando en el array.
    - `index` (opcional): El índice del elemento actual.
    - `array` (opcional): El array original.
  - `thisArg` (opcional): Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**:
  - Array con elementos que cumplen la condición del callback.
  - Si no hay elementos que cumplan la condición, devuelve un array vacío.

**************************\*\*************************** `.map()`

```javascript
const newArray = array.map(callback(element[, index[, array]])[, thisArg]);
```

- **Parámetros**:
  - `callback`: Función que produce un nuevo valor para cada elemento del array.
    - `element`: El elemento actual que se está procesando en el array.
    - `index` (opcional): El índice del elemento actual.
    - `array` (opcional): El array original.
  - `thisArg` (opcional): Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**:
  - Nuevo array con los resultados de aplicar el callback a cada elemento.

**************************\*\*************************** `.find()`

```javascript
const element = array.find(callback(element[, index[, array]])[, thisArg]);
```

- **Parámetros**:
  - `callback`: Función que prueba cada elemento del array.
    - `element`: El elemento actual que se está procesando en el array.
    - `index` (opcional): El índice del elemento actual.
    - `array` (opcional): El array original.
  - `thisArg` (opcional): Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**:
  - El primer elemento que cumple la condición del callback.
  - Si no hay elementos que cumplan la condición, devuelve `undefined`.

**************************\*\*************************** `.reduce()`

```javascript
const value = array.reduce(callback(accumulator, currentValue[, index[, array]]), initialValue);
```

- **Parámetros**:
  - `callback`: Función que ejecuta en cada valor del array.
    - `accumulator`: Acumulador que guarda el valor acumulado.
    - `currentValue`: El elemento actual que se está procesando en el array.
    - `index` (opcional): El índice del elemento actual.
    - `array` (opcional): El array original.
  - `initialValue` (opcional): Valor inicial para el acumulador.
- **Valor de retorno**:
  - El valor acumulado resultante de la reducción del array.

**************************\*\*************************** `.every()`

```javascript
const bool = array.every(callback(element[, index[, array]])[, thisArg]);
```

- **Parámetros**:
  - `callback`: Función que prueba cada elemento del array.
    - `element`: El elemento actual que se está procesando en el array.
    - `index` (opcional): El índice del elemento actual.
    - `array` (opcional): El array original.
  - `thisArg` (opcional): Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**:
  - `true` si todos los elementos pasan la prueba implementada por el callback.
  - `false` si algún elemento no pasa la prueba.

**************************\*\*************************** `.some()`

```javascript
const bool = array.some(callback(element[, index[, array]])[, thisArg]);
```

- **Parámetros**:
  - `callback`: Función que prueba cada elemento del array.
    - `element`: El elemento actual que se está procesando en el array.
    - `index` (opcional): El índice del elemento actual.
    - `array` (opcional): El array original.
  - `thisArg` (opcional): Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**:
  - `true` si al menos un elemento pasa la prueba implementada por el callback.
  - `false` si ningún elemento pasa la prueba.

**************************\*\*************************** `.fill()`

```javascript
const array = array.fill(value[, start[, end]]);
```

- **Parámetros**:
  - `value`: Valor con el que se va a llenar el array.
  - `start` (opcional): Índice inicial, por defecto 0.
  - `end` (opcional): Índice final, por defecto `array.length`.
- **Valor de retorno**:
  - El array modificado.

### String Methods

**************************\*\*************************** `.includes()`

```javascript
const bool = string.includes(searchString[, position]);
```

- **Parámetros**:
  - `searchString`: La cadena de caracteres que se busca.
  - `position` (opcional): La posición en la cadena en la que comenzar la búsqueda.
- **Valor de retorno**:
  - `true` si la cadena contiene la `searchString`.
  - `false` si no la contiene.

**************************\*\*************************** `.indexOf()`

```javascript
const index = string.indexOf(searchValue[, fromIndex]);
```

- **Parámetros**:
  - `searchValue`: La cadena de caracteres que se busca.
  - `fromIndex` (opcional): La posición en la cadena desde donde comenzar la búsqueda.
- **Valor de retorno**:
  - El primer índice en el que se encuentra el valor buscado.
  - `-1` si no se encuentra el valor.

**************************\*\*************************** `.substring()`

```javascript
const substring = string.substring(indexStart[, indexEnd]);
```

- **Parámetros**:
  - `indexStart`: Índice en la cadena donde comienza la subcadena.
  - `indexEnd` (opcional): Índice en la cadena donde termina la subcadena (sin incluir).
- **Valor de retorno**:
  - La subcadena correspondiente a los índices proporcionados.

### JSON Methods

**************************\*\*************************** `JSON.parse()`

```javascript
const obj = JSON.parse(text[, reviver]);
```

- **Parámetros**:
  - `text`: La cadena de texto JSON que se va a analizar.
  - `reviver` (opcional): Función que puede transformar los resultados.
- **Valor de retorno**:
  - El objeto JavaScript correspondiente al texto JSON.

**************************\*\*************************** `JSON.stringify()`

```javascript
const jsonString = JSON.stringify(value[, replacer[, space]]);
```

- **Parámetros**:
  - `value`: El valor que se convertirá en una cadena JSON.
  - `replacer` (opcional): Función que transforma los resultados o una matriz de propiedades para incluir.
  - `space` (opcional): Espacio en blanco para usar como sangría en la salida JSON.
- **Valor de retorno**:
  - La cadena JSON correspondiente al valor.

### Otros Métodos

**************************\*\*************************** `.setTimeout()`

```javascript
const timeoutID = setTimeout(callback, delay[, ...args]);
```

- **Parámetros**:
  - `callback`: Función que se ejecutará después del retraso.
  - `delay`: Tiempo en milisegundos que el temporizador debe esperar antes de ejecutar la función.
  - `...args` (opcional): Argumentos adicionales que se pasan a la función callback.
- **Valor de retorno**:
  - Un ID único que representa el temporizador creado.

**************************\*\*************************** `.clearTimeout()`

```javascript
clearTimeout(timeoutID);
```

- **Parámetros**:
  - `timeoutID`: El ID del temporizador que se cancelará.
- **Valor de retorno**:
  - No tiene valor de retorno.

### Resumen

Esta lista proporciona una visión general de algunos de los métodos más utilizados en JavaScript junto con sus parámetros y valores de retorno. La documentación oficial de MDN (Mozilla Developer Network) es una excelente referencia para obtener más detalles sobre cada uno de estos métodos y otros que no están cubiertos aquí.

- [MDN - Array.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)



✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
// !parametros de las funciones js ejemplos

lista actualizada con ejemplos de uso que incluyen todos los parámetros y el `thisArg` cuando aplica:

### Array Methods

################################# `.filter()`

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const context = {
  threshold: 5,
};

const filteredNumbers = numbers.filter(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}`);
  return element > this.threshold;
}, context);

console.log(filteredNumbers); // Output: [6, 7, 8, 9]
```

- **Parámetros**:
  - `element`: El elemento actual que se está procesando en el array.
  - `index`: El índice del elemento actual.
  - `array`: El array original.
  - `thisArg`: Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**: Array con elementos mayores que 5.

################################# `.map()`

```javascript
const numbers = [1, 2, 3, 4, 5];

const incrementedNumbers = numbers.map(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}`);
  return element + 1;
});

console.log(incrementedNumbers); // Output: [2, 3, 4, 5, 6]
```

- **Parámetros**:
  - `element`: El elemento actual que se está procesando en el array.
  - `index`: El índice del elemento actual.
  - `array`: El array original.
- **Valor de retorno**: Nuevo array con cada elemento incrementado en 1.

################################# `.find()`

```javascript
const products = [
  { name: "Product 1", price: 50 },
  { name: "Product 2", price: 30 },
  { name: "Product 3", price: 70 },
];

const context = {
  priceThreshold: 40,
};

const foundProduct = products.find(function (product, index, array) {
  console.log(`Product: ${product.name}, Index: ${index}`);
  return product.price > this.priceThreshold;
}, context);

console.log(foundProduct); // Output: { name: 'Product 3', price: 70 }
```

- **Parámetros**:
  - `element`: El elemento actual que se está procesando en el array.
  - `index`: El índice del elemento actual.
  - `array`: El array original.
  - `thisArg`: Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**: El primer producto con precio mayor que 40.

################################# `.reduce()`

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue, index, array) {
  console.log(
    `Accumulator: ${accumulator}, Current Value: ${currentValue}, Index: ${index}`
  );
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```

- **Parámetros**:
  - `accumulator`: Acumulador que guarda el valor acumulado.
  - `currentValue`: El elemento actual que se está procesando en el array.
  - `index`: El índice del elemento actual.
  - `array`: El array original.
  - `initialValue`: Valor inicial para el acumulador.
- **Valor de retorno**: La suma de todos los elementos.

################################# `.every()`

```javascript
const numbers = [2, 4, 6, 8, 10];

const context = {
  divisor: 2,
};

const allEven = numbers.every(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}`);
  return element % this.divisor === 0;
}, context);

console.log(allEven); // Output: true
```

- **Parámetros**:
  - `element`: El elemento actual que se está procesando en el array.
  - `index`: El índice del elemento actual.
  - `array`: El array original.
  - `thisArg`: Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**: `true` si todos los elementos son divisibles por 2.

################################# `.some()`

```javascript
const numbers = [1, 2, 3, 4, 5];

const context = {
  threshold: 3,
};

const hasAboveThreshold = numbers.some(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}`);
  return element > this.threshold;
}, context);

console.log(hasAboveThreshold); // Output: true
```

- **Parámetros**:
  - `element`: El elemento actual que se está procesando en el array.
  - `index`: El índice del elemento actual.
  - `array`: El array original.
  - `thisArg`: Valor para usar como `this` al ejecutar el callback.
- **Valor de retorno**: `true` si al menos un elemento es mayor que el umbral.

################################# `.fill()`

```javascript
const array = [1, 2, 3, 4, 5];

array.fill(0, 2, 4);

console.log(array); // Output: [1, 2, 0, 0, 5]
```

- **Parámetros**:
  - `value`: Valor con el que se va a llenar el array.
  - `start`: Índice inicial, por defecto 0.
  - `end`: Índice final, por defecto `array.length`.
- **Valor de retorno**: El array modificado.

### String Methods

################################# `.includes()`

```javascript
const string = "Hello, world!";

const result = string.includes("world", 7);

console.log(result); // Output: true
```

- **Parámetros**:
  - `searchString`: La cadena de caracteres que se busca.
  - `position` (opcional): La posición en la cadena en la que comenzar la búsqueda.
- **Valor de retorno**: `true` si la cadena contiene `searchString`, de lo contrario `false`.

################################# `.indexOf()`

```javascript
const string = "Hello, world!";

const index = string.indexOf("world", 7);

console.log(index); // Output: 7
```

- **Parámetros**:
  - `searchValue`: La cadena de caracteres que se busca.
  - `fromIndex` (opcional): La posición en la cadena desde donde comenzar la búsqueda.
- **Valor de retorno**: El índice del primer carácter del valor buscado, o `-1` si no se encuentra.

################################# `.substring()`

```javascript
const string = "Hello, world!";

const substring = string.substring(7, 12);

console.log(substring); // Output: world
```

- **Parámetros**:
  - `indexStart`: Índice en la cadena donde comienza la subcadena.
  - `indexEnd` (opcional): Índice en la cadena donde termina la subcadena (sin incluir).
- **Valor de retorno**: La subcadena correspondiente a los índices proporcionados.

### JSON Methods

################################# `JSON.parse()`

```javascript
const jsonString = '{"name": "John", "age": 30}';

const context = {
  isAdmin: false,
};

const obj = JSON.parse(jsonString, function (key, value) {
  console.log(`Key: ${key}, Value: ${value}`);
  return key === "age" ? value + 1 : value;
});

console.log(obj); // Output: { name: 'John', age: 31 }
```

- **Parámetros**:
  - `text`: La cadena de texto JSON que se va a analizar.
  - `reviver` (opcional): Función que puede transformar los resultados.
- **Valor de retorno**: El objeto JavaScript correspondiente al texto JSON.

################################# `JSON.stringify()`

```javascript
const obj = { name: "John", age: 30 };

const jsonString = JSON.stringify(
  obj,
  function (key, value) {
    console.log(`Key: ${key}, Value: ${value}`);
    return key === "age" ? value + 1 : value;
  },
  2
);

console.log(jsonString);
// Output:
// {
//   "name": "John",
//   "age": 31
// }
```

- **Parámetros**:
  - `value`: El valor que se convertirá en una cadena JSON.
  - `replacer` (opcional): Función que transforma los resultados o una matriz de propiedades para incluir.
  - `space` (opcional): Espacio en blanco para usar como sangría en la salida JSON.
- **Valor de retorno**: La cadena JSON correspondiente al valor.

### Otros Métodos

################################# `.setTimeout()`

```javascript
const timeoutID = setTimeout(
  function (message) {
    console.log(message);
  },
  1000,
  "Hello, World!"
);

console.log(timeoutID); // Output: ID del temporizador
```

- **Parámetros**:
  - `callback`: Función que se ejecutará después del retraso.
  - `delay`: Tiempo en milisegundos que el temporizador debe esperar antes de ejecutar la función.
  - `...args` (opcional): Argumentos adicionales que se pasan a la función callback.
- **Valor de retorno**: Un ID único que representa el temporizador creado.

################################# `.clearTimeout()`

```javascript
const timeoutID = setTimeout;
```

```javascript
const timeoutID = setTimeout(
  function (message) {
    console.log(message);
  },
  1000,
  "Hello, World!"
);

console.log(timeoutID); // Output: ID del temporizador

clearTimeout(timeoutID);

console.log("Timeout cleared"); // Output: Timeout cleared
```

- **Parámetros**:
  - `timeoutID`: El ID del temporizador que se cancelará.
- **Valor de retorno**: No tiene valor de retorno.

### Resumen

Esta lista proporciona una visión general de algunos de los métodos más utilizados en JavaScript junto con sus parámetros, valores de retorno y ejemplos de uso con todos los parámetros y el `thisArg` cuando aplica. Para más detalles, siempre es recomendable consultar la documentación oficial de MDN (Mozilla Developer Network):

- [MDN - Array.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
### Flexbox en CSS

Flexbox es un modelo de diseño unidimensional que permite alinear y distribuir elementos dentro de un contenedor. Es ideal para el diseño de layouts responsivos y adaptables.

#### Propiedades principales de Flexbox

**Contenedor Flex (Padre)**

```css
display: flex; /* Define el contenedor como flex */
```

1. **flex-direction**: Define la dirección principal en la que se colocan los elementos flexibles.

   ```css
   flex-direction: row; /* Por defecto: izquierda a derecha */
   flex-direction: row-reverse; /* Derecha a izquierda */
   flex-direction: column; /* De arriba a abajo */
   flex-direction: column-reverse; /* De abajo a arriba */
   ```

2. **justify-content**: Alinea los elementos a lo largo del eje principal.

   ```css
   justify-content: flex-start; /* Alineación al inicio */
   justify-content: flex-end; /* Alineación al final */
   justify-content: center; /* Alineación al centro */
   justify-content: space-between; /* Espacio entre elementos */
   justify-content: space-around; /* Espacio alrededor de los elementos */
   justify-content: space-evenly; /* Espacio uniformemente distribuido */
   ```

3. **align-items**: Alinea los elementos a lo largo del eje transversal.

   ```css
   align-items: stretch; /* Por defecto: estira los elementos */
   align-items: flex-start; /* Alineación al inicio del eje transversal */
   align-items: flex-end; /* Alineación al final del eje transversal */
   align-items: center; /* Alineación al centro del eje transversal */
   align-items: baseline; /* Alineación en la línea base del texto */
   ```

4. **flex-wrap**: Controla si los elementos flexibles se ajustan o no en una sola línea.

   ```css
   flex-wrap: nowrap; /* Por defecto: todos en una sola línea */
   flex-wrap: wrap; /* Los elementos se ajustan a múltiples líneas */
   flex-wrap: wrap-reverse; /* Los elementos se ajustan a múltiples líneas en el orden inverso */
   ```

5. **align-content**: Alinea las líneas del contenedor flex cuando hay espacio adicional en el eje transversal.
   ```css
   align-content: flex-start; /* Alinea las líneas al inicio */
   align-content: flex-end; /* Alinea las líneas al final */
   align-content: center; /* Alinea las líneas al centro */
   align-content: space-between; /* Espacio entre líneas */
   align-content: space-around; /* Espacio alrededor de las líneas */
   align-content: stretch; /* Estira las líneas */
   ```

**Elementos Flex (Hijos)**

1. **order**: Controla el orden de los elementos flexibles.

   ```css
   order: 1; /* Por defecto: 0, mayor número = mayor prioridad */
   ```

2. **flex-grow**: Controla la cantidad de espacio adicional que ocupa un elemento.

   ```css
   flex-grow: 1; /* Por defecto: 0, 1 = toma todo el espacio disponible */
   ```

3. **flex-shrink**: Controla cómo se encogen los elementos cuando hay menos espacio.

   ```css
   flex-shrink: 1; /* Por defecto: 1, 0 = no se encoge */
   ```

4. **flex-basis**: Define el tamaño inicial de un elemento antes de distribuir el espacio restante.

   ```css
   flex-basis: 100px; /* Puede ser auto, porcentaje o tamaño fijo */
   ```

5. **align-self**: Permite la alineación individual de un elemento en el eje transversal.
   ```css
   align-self: auto; /* Hereda de align-items del contenedor */
   align-self: flex-start; /* Alineación al inicio */
   align-self: flex-end; /* Alineación al final */
   align-self: center; /* Alineación al centro */
   align-self: baseline; /* Alineación en la línea base del texto */
   align-self: stretch; /* Estira el elemento */
   ```

#### Ejemplo básico de Flexbox

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
      }
      .item {
        background-color: lightblue;
        padding: 20px;
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
  </body>
</html>
```

### Grid Layout en CSS

Grid Layout es un sistema de diseño bidimensional que permite crear layouts complejos con filas y columnas. Es especialmente útil para estructuras de diseño avanzadas.

#### Propiedades principales de Grid Layout

**Contenedor Grid (Padre)**

```css
display: grid; /* Define el contenedor como grid */
```

1. **grid-template-columns**: Define el número y el tamaño de las columnas.

   ```css
   grid-template-columns: 100px 200px; /* Dos columnas: una de 100px y otra de 200px */
   grid-template-columns: 1fr 2fr; /* Dos columnas con fracciones: la segunda columna es el doble de la primera */
   grid-template-columns: repeat(3, 1fr); /* Tres columnas iguales */
   ```

2. **grid-template-rows**: Define el número y el tamaño de las filas.

   ```css
   grid-template-rows: 100px 200px; /* Dos filas: una de 100px y otra de 200px */
   grid-template-rows: auto; /* Filas con altura automática */
   ```

3. **gap**: Define el espacio entre filas y columnas.

   ```css
   gap: 10px; /* Espacio de 10px entre todas las filas y columnas */
   row-gap: 10px; /* Espacio de 10px entre filas */
   column-gap: 20px; /* Espacio de 20px entre columnas */
   ```

4. **grid-auto-flow**: Controla cómo se colocan los elementos automáticamente.

   ```css
   grid-auto-flow: row; /* Coloca los elementos en filas (por defecto) */
   grid-auto-flow: column; /* Coloca los elementos en columnas */
   grid-auto-flow: dense; /* Coloca los elementos de manera densa, sin huecos */
   ```

5. **grid-template-areas**: Define áreas en la cuadrícula nombradas.
   ```css
   grid-template-areas:
     "header header header"
     "sidebar content content"
     "footer footer footer";
   ```

**Elementos Grid (Hijos)**

1. **grid-column**: Define el inicio y fin de una columna.

   ```css
   grid-column: 1 / 3; /* El elemento abarca desde la columna 1 hasta la 3 */
   ```

2. **grid-row**: Define el inicio y fin de una fila.

   ```css
   grid-row: 1 / 2; /* El elemento abarca desde la fila 1 hasta la 2 */
   ```

3. **grid-area**: Asigna el área nombrada a un elemento.

   ```css
   grid-area: header; /* El elemento ocupa el área "header" */
   ```

4. **justify-self**: Alinea un elemento en el eje horizontal.

   ```css
   justify-self: center; /* Alinea el elemento al centro horizontalmente */
   ```

5. **align-self**: Alinea un elemento en el eje vertical.
   ```css
   align-self: center; /* Alinea el elemento al centro verticalmente */
   ```

#### Ejemplo básico de Grid Layout

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto;
        gap: 10px;
      }
      .header {
        grid-column: 1 / -1;
        background-color: lightcoral;
      }
      .sidebar {
        background-color: lightgreen;
      }
      .content {
        background-color: lightblue;
      }
      .footer {
        grid-column: 1 / -1;
        background-color: lightgrey;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Header</div>
      <div class="sidebar">Sidebar</div>
      <div class="content">Content</div>
      <div class="footer">Footer</div>
    </div>
  </body>
</html>
```


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
<!--  * ESTE COMENTARIO SE VE MUY BIEN  -->
<!-- ! ESTE ES UN COMENTARIO EN COLOR BLANCO -->
<!--  //  ESTE TEXTO esta subrayado  -->
<!-- todo ESTA PENDIENTE REALIZARCE -->
<!-- ¿ ESTO SERIA UNA PREGUNTA -->
 <!-- para abrir settigns.json presionar: ctrl + shift + p  Escribe Preferences: Open Settings (JSON) y selecciona la opción.-->

ID Y CLASES: div#hero.wrapper.clase1 —>
<div id="hero" class="wrapper clase1"></div>

ATRIBUTOS: img[src="cat.jpg"][alt="foto de gato"] —>
<img src="cat.jpg" alt="foto de gato" />

CONTENIDO: p{Esto es un párrafo}
<p>Esto es un párrafo</p>

Escalando: Nodos hermanos + div+div>p>span+em^bq —>
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>

Agrupar: Nodos hijos > div>(header>ul>li>a)+footer>p

<div>
  <header>
    <ul>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>

MULTIPLICAR: ul>li{Item $}*3
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

COMENZANDO DESDE UN # ESPECIFICO ul>li.item$@3*5
<ul>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
  <li class="item6"></li>
  <li class="item7"></li>
</ul>

Dirección inversa: ul>li.item$@-*5

<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>

Dirección inversa desde un número específico: ul>li.item$@-3*5
<ul>
  <li class="item7"></li>
  <li class="item6"></li>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
</ul>

NODOS SUPERIORES ^: ul>li>div+p^li>span

<ul>
  <li>
    <div></div>
    <p></p>
  </li>
  <li><span></span></li>
</ul>

ul>li>div+p^^p

<ul>
  <li>
    <div></div>
    <p></p>
  </li>
</ul>
<p></p>

<!--  ?PONER EN NEGRITA O SELECCIONAR DENTRO DE UN TEXTO ej: texto b{texto} texto: -->
Lorem ipsum, b{dolor sit amet consectetur} adipisicing elit.
<p>
  Lorem ipsum dolor, <b>sit amet consectetur adipisicing elit.</b> Dolorem,
  earum.
</p>

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// funcionAnonimaconjson
```

(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        const { userId, id, title, body } = data;

        console.log('User ID:', userId);
        console.log('ID:', id);
        console.log('Title:', title);
        console.log('Body:', body);
    } catch (error) {
        console.error('Fetch error:', error);
    }
})();

```

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// NOTAS SQL

```
      


    -- create database prueba;
    -- link de la documentacion https://dev.mysql.com/doc/refman/8.0/en/create-table.html
    /* use prueba;
    drop database prueba;
    create database prueba character set utf8mb4 collate utf8mb4_spanish_ci;
    */
    create database escuela character set utf8mb4 collate utf8mb4_spanish_ci;
    use escuela;
    create table alumnos(
      nombre varchar(100) not null,
        id int auto_increment primary key,
        grado smallint not null,
        grupo varchar(2) not null,
        fecha_ingreso date default '0000-00-00'
        );
    show tables;
    show columns from alumnos;
    show create table alumnos;
    rename table alumnos to alumno;
    show columns from alumno;
    alter table alumno add edades int not null;
    alter table alumno change edades edad smallint not null;
    alter table alumno drop column edad;

    create table salon(
    id int not null primary key auto_increment,
    grado int not null,
    grupo varchar (2) not null
    );
    alter table alumno drop column grado;
    alter table alumno drop column grupo;
    alter table alumno drop column idSalon;
    alter table alumno add column idSalon int not null after id;

    alter table alumno add constraint fk_idSalon foreign key (idSalon) -- establece la relacion de llave foranea entre tablas
    references salon(id)  on delete cascade on update cascade;

    --  PILAS: Lo siguiente va en comillas invertidas no comillas normales.
    insert into `salon` (grupo,grado) values ('A',1),('B',1),('C',1);
    insert into `alumno` (nombre,fecha_ingreso,idSalon) values ('Juan','2020-01-01',1),('Daniel','2020-01-02',2),('Andrea','2020-01-01',1),('Natalia','2020-01-01',2),('Juana','2020-01-01',1);
    alter table alumno drop constraint fk_idSalon;


    -- ¿SEGUNDO CODIGO

    use escuela;
    select * from salon;
    truncate table salon; -- la llave foranea impide hacer el truncate

    set foreign_key_checks=0; -- Deshabilita el chekeo de las llaves foraneaas 
    truncate table salon; -- despues de deshablitar las llaves si funciona
    truncate table alumno; -- borramos la tabla alumno

    show columns from salon;
    -- CUATRO FORMAS DE INSERTAR VALORES
    insert into salon (id,grado,grupo) values (null,1,"B");
    insert into salon (grado,grupo) values (1,"A");
    insert into salon  values (null,1,"C");  -- NO es buena práctica, pues no muestra las columnas. Tiene que ser en el orden que se colocaron los campos. 
    insert into salon (grado,grupo) values (2,"A"), (2,"B"),(2,"C"); -- ESTA ES LA FORMA RECOMENDADA. 

    show columns from alumno;
    insert into alumno (idSalon,nombre,fecha_ingreso) values (1,"Maria","2021-01-01");
    insert into alumno (idSalon, nombre, fecha_ingreso) values (10,"Pepe","2021-01-01"); -- se pudo hacer esto aunque el salon 10 no existe porque estaba desactivado el chequeo de llaves foráneas
    select * from alumno;
    set foreign_key_checks=1;
    insert into alumno (idSalon, nombre, fecha_ingreso) values (11,"Pepe","2021-01-01"); -- no se pudo hacer esto aunque el salon 11 no existe y esta activo el chequeo de las llaves foraneas. 
    insert into alumno (idSalon, nombre, fecha_ingreso) values (2,"Juan","2021-01-01"); 

    -- ACTUALIZACION DE REGISTROS EN MYSQL
    select * from alumno;
    update alumno set nombre="Maria Antonieta"; -- pondria a todos los alumnos maria Antonieta
    update alumno set nombre="Maria Antonieta" where id="1";
    update alumno set nombre="Maria Antonieta", fecha_ingreso="2019-05-05" where id="1";  -- se puden poner los campos separados por coma para modificar. 

    alter table alumno add column nota int not null; -- agrega la columna nota a la tabla alumno;

    update alumno set nota=nota+3 where id='1';
    update alumno set nota=nota+3 where id='1';
    select * from alumno;

    -- lo siguiente reemplaza letras o numeros en todos los valores del campo que se indique
    update alumno set nota=replace(nota,0,5); -- hay que desactivar la condicion Safe Updates en edit-preferences- sql editor- deschequear abajo safe update...  luego dar a reconect DBMS
    update alumno set nombre=replace(nombre,'uan','uanito'); -- es capaz de reemplazar partes parciales de texto, en este caso cambiara juan por juanito habiendo puesto uan-uanito. 


    /*
    INSERT INTO `escuela`.`alumno` (`nombre`, `idSalon`, `fecha_ingreso`, `nota`) VALUES ('Juan', '1', '2021-01-01', '10');
    INSERT INTO `escuela`.`alumno` (`nombre`, `idSalon`, `fecha_ingreso`, `nota`) VALUES ('Maria', '1', '2021-02-02', '10');
    INSERT INTO `escuela`.`alumno` (`nombre`, `idSalon`, `fecha_ingreso`, `nota`) VALUES ('Petra', '2', '2021-03-05', '10');
    */

    -- ELIMINAR UN REGISTRO

    select * from alumno;
    delete from alumno where id='1';

    delete from alumno where nota='5';
    delete from salon where id='1';

    delete from alumno; -- borra todo lo que hay en la tabla alumno, sin resetar los indices o contadores
    truncate table alumno; -- borra todo lo que hay en la tabla alumno, reseteando tambien los contadores que hay.


    -- CONSULTAS AVANZADAS. 

    select * from alumno; --  NO SE RECOMIENDA PORQUE PUEDEN SER DEMSASIADOS DATOS.
    select nombre from alumno;
    select idSalon, nombre, nota from alumno;
    select idSalon, nombre, nota from alumno where idSalon=3 and nota>5;
    select idSalon as salon, nombre, fecha_ingreso as fecha from alumno where idSalon=3 and nota>5;  -- como todavia no se ha actulizado el as de idSalon no se puedde usar el alias salon en el query. 

    -- USANDO GROUP BY:

    select * from alumno group by idSalon; -- mostrara el primer elemento de cada grupo, pero habra generado grupos basandose en idSalon. 
    select count(id) from alumno group by idSalon; -- Cuenta de los campos id de la tabla alumno cuantos hay en cada grupo. 
    select idSalon, count(id) from alumno group by idSalon; -- muestra los idSalon que hay en una columna y luego el conteo de cada grupo. 
    select idSalon, count(id) as Cantidad_de_alumnos from alumno group by idSalon; -- hace lo mismo que el anterior solo que le cambia el nombre a count(id) para que sea mas entendible. 

    -- MINIMOS Y MAXIMOS:

    select min(nota), max(nota) from alumno; -- minimo y maximo. 
    select min(nota) as minima_nota, max(nota) as maxima_nota from alumno; -- minimo y maximo renombrado.
    select min(nota) as minima_nota, max(nota) as maxima_nota from alumno; -- minimo y maximo renombrado.
    select min(nota) as minima_nota, max(nota) as maxima_nota from alumno where idSalon=3; -- minimo y maximo renombrado y filtrado con el idSalon. 

    -- LIMITES:

    select * from alumno limit 5; -- muestra solo los cinco primeros elementos. 
    select * from alumno limit 5,2; -- muestra los 2 siguientes  elementos que esten despues de la posicion 5. 
    select * from alumno order by nota; -- por default los muestra en orden ascendente, de menor a mayor.
    select * from alumno order by nota asc; -- por default los muestra en orden ascendente, de menor a mayor. asc indica en orden ascendente. 
    select * from alumno order by nota desc; -- por default los muestra en orden ascendente, de menor a mayor. desc indica en orden descendente. 


    -- 
    use escuela;
    select * from alumno;
    select * from alumno where nota=5 or nota=8 or nota=9; --  uso del or.
    select * from alumno where (nota=5 or nota=8 or nota=9) and idSalon=3; --  uso de parentesis, hay que agrupar correctamente. 
    select * from alumno where nota!=10 and nota<>5; -- ESTAS DOS FORMAS SIGNIFICAN DIFERENTE DE...
    select * from alumno where nota is null; -- entrega solo los valores nulos. 
    select * from alumno where nota is not null; -- entrega solo los valores que nó son nulos. 
    select * from alumno where nota>=7 and nota<=9; -- entrega notas entre 7 y 9. 
    select * from alumno where nota between 7 and 9; -- entrega notas entre 7 y 9. 


    -- ******************************************************************

    -- * RESPALDAR BASES DE DATOS 
    -- Generando el archivo de respaldo de la base de datos completa.
    mysqldump -u root -p nombreBaseDeDatos > C:\Users\Administrador\Desktop\nombre_de_la_carpeta\nombreDelNuevoArchivo.sql

    -- Generando el archivo de respaldo de la algunas tablas de la base de datos.
    mysqldump -u root -p escuela --tables tabla1 tabla2 > C:\Users\Administrador\Desktop\nombre_de_la_carpeta\tabla1-tabla2.sql


    -- Generando el archivo de respaldo del servidor completo
    -- este codigo par el servidor genera una base de datos y el uso, las otras formas solo exsportan las tablas o bases pero nolas crean
    mysqldump -u root -p -A > C:\Users\Administrador\Desktop\nombre_de_la_carpeta\todoElServidor.sql

    -- * IMPORTAR UN RESPALDO.

    -- primero loguerse
    mysql -u root -p

    -- generar el nombre de la nueva base de datos
    create database nombreDeLaBaseDeDatos;

    --poner activa la base.
    use nombreDeLaBaseDeDatos;

    -- Darle la ruta donde guardamos anteriormente el respaldo.
    source  C:\Users\Administrador\Desktop\nombre_de_la_carpeta\todoElServidor.sql
    -- //si sale un error:
    -- dale click secundario en el archivo de respaldo darle en editar y en codificacion cambiar al utf8, guardamos y repetimos el paso.


    -- ******************************************************************



    use escuela;
    select * from salon;
    truncate table salon; -- la llave foranea impide hacer el truncate

    set foreign_key_checks=0; --*  Deshabilita el chekeo de las llaves foraneaas 
    truncate table salon; -- despues de deshablitar las llaves si funciona
    truncate table alumno; -- borramos la tabla alumno

    show columns from salon;
    -- *CUATRO FORMAS DE INSERTAR VALORES
    insert into salon (id,grado,grupo) values (null,1,"B");
    insert into salon (grado,grupo) values (1,"A");
    insert into salon  values (null,1,"C");  -- NO es buena práctica, pues no muestra las columnas. Tiene que ser en el orden que se colocaron los campos. 
    insert into salon (grado,grupo) values (2,"A"), (2,"B"),(2,"C"); -- ESTA ES LA FORMA RECOMENDADA. 

    show columns from alumno;
    insert into alumno (idSalon,nombre,fecha_ingreso) values (1,"Maria","2021-01-01");
    insert into alumno (idSalon, nombre, fecha_ingreso) values (10,"Pepe","2021-01-01"); -- se pudo hacer esto aunque el salon 10 no existe porque estaba desactivado el chequeo de llaves foráneas
    select * from alumno;
    set foreign_key_checks=1;
    insert into alumno (idSalon, nombre, fecha_ingreso) values (11,"Pepe","2021-01-01"); -- no se pudo hacer esto aunque el salon 11 no existe y esta activo el chequeo de las llaves foraneas. 
    insert into alumno (idSalon, nombre, fecha_ingreso) values (2,"Juan","2021-01-01"); 

    -- ACTUALIZACION DE REGISTROS EN MYSQL
    select * from alumno;
    update alumno set nombre="Maria Antonieta"; -- pondria a todos los alumnos maria Antonieta
    update alumno set nombre="Maria Antonieta" where id="1";
    update alumno set nombre="Maria Antonieta", fecha_ingreso="2019-05-05" where id="1";  -- se puden poner los campos separados por coma para modificar. 

    alter table alumno add column nota int not null; -- agrega la columna nota a la tabla alumno;

    update alumno set nota=nota+3 where id='1';
    update alumno set nota=nota+3 where id='1';
    select * from alumno;

    -- lo siguiente reemplaza letras o numeros en todos los valores del campo que se indique
    update alumno set nota=replace(nota,0,5); -- hay que desactivar la condicion Safe Updates en edit-preferences- sql editor- deschequear abajo safe update...  luego dar a reconect DBMS
    update alumno set nombre=replace(nombre,'uan','uanito'); -- es capaz de reemplazar partes parciales de texto, en este caso cambiara juan por juanito habiendo puesto uan-uanito. 


    /*
    INSERT INTO `escuela`.`alumno` (`nombre`, `idSalon`, `fecha_ingreso`, `nota`) VALUES ('Juan', '1', '2021-01-01', '10');
    INSERT INTO `escuela`.`alumno` (`nombre`, `idSalon`, `fecha_ingreso`, `nota`) VALUES ('Maria', '1', '2021-02-02', '10');
    INSERT INTO `escuela`.`alumno` (`nombre`, `idSalon`, `fecha_ingreso`, `nota`) VALUES ('Petra', '2', '2021-03-05', '10');
    */
    -- *ELIMINAR UN REGISTRO

    select * from alumno;
    delete from alumno where id='1';

    delete from alumno where nota='5';
    delete from salon where id='1';

    delete from alumno; -- borra todo lo que hay en la tabla alumno, sin resetear los indices o contadores
    truncate table alumno; -- borra todo lo que hay en la tabla alumno, reseteando tambien los contadores que hay.


    -- *CONSULTAS AVANZADAS. 

    select * from alumno; --  NO SE RECOMIENDA PORQUE PUEDEN SER DEMSASIADOS DATOS.
    select nombre from alumno;
    select idSalon, nombre, nota from alumno;
    select idSalon, nombre, nota from alumno where idSalon=3 and nota>5;
    select idSalon as salon, nombre, fecha_ingreso as fecha from alumno where idSalon=3 and nota>5;  -- como todavia no se ha actulizado el as de idSalon no se puedde usar el alias salon en el query. 

    -- *USANDO GROUP BY:

    select * from alumno group by idSalon; -- mostrara el primer elemento de cada grupo, pero habra generado grupos basandose en idSalon. 
    select count(id) from alumno group by idSalon; -- Cuenta de los campos id de la tabla alumno cuantos hay en cada grupo. 
    select idSalon, count(id) from alumno group by idSalon; -- muestra los idSalon que hay en una columna y luego el conteo de cada grupo. 
    select idSalon, count(id) as Cantidad_de_alumnos from alumno group by idSalon; -- hace lo mismo que el anterior solo que le cambia el nombre a count(id) para que sea mas entendible. 

    -- *MINIMOS Y MAXIMOS:

    select min(nota), max(nota) from alumno; -- minimo y maximo. 
    select min(nota) as minima_nota, max(nota) as maxima_nota from alumno; -- minimo y maximo renombrado.
    select min(nota) as minima_nota, max(nota) as maxima_nota from alumno; -- minimo y maximo renombrado.
    select min(nota) as minima_nota, max(nota) as maxima_nota from alumno where idSalon=3; -- minimo y maximo renombrado y filtrado con el idSalon. 

    -- *LIMITES:

    select * from alumno limit 5; -- muestra solo los cinco primeros elementos. 
    select * from alumno limit 5,2; -- muestra los 2 siguientes  elementos que esten despues de la posicion 5. 
    select * from alumno order by nota; -- por default los muestra en orden ascendente, de menor a mayor.
    select * from alumno order by nota asc; -- por default los muestra en orden ascendente, de menor a mayor. asc indica en orden ascendente. 
    select * from alumno order by nota desc; -- por default los muestra en orden ascendente, de menor a mayor. desc indica en orden descendente. 


    -- 
    use escuela;
    select * from alumno;
    select * from alumno where nota=5 or nota=8 or nota=9; --  uso del or.
    select * from alumno where (nota=5 or nota=8 or nota=9) and idSalon=3; --  uso de parentesis, hay que agrupar correctamente. 
    select * from alumno where nota!=10 and nota<>5; -- ESTAS DOS FORMAS SIGNIFICAN DIFERENTE DE...
    select * from alumno where nota is null; -- entrega solo los valores nulos. 
    select * from alumno where nota is not null; -- entrega solo los valores que nó son nulos. 
    select * from alumno where nota>=7 and nota<=9; -- entrega notas entre 7 y 9. 
    select * from alumno where nota between 7 and 9; -- entrega notas entre 7 y 9. 
    select * from alumno where fecha_ingreso between '2021-02-01' and '2021-03-05';  -- between se usa sobre todo para fechas. 

    select * from alumno where idSalon=2 or idSalon=3 or idSalon=4;
    select * from alumno where idSalon in (2,3,4);  -- entrega los valores que esten en el paretesis. 
    select * from salon where grado=1;
    select * from alumno where idSalon in (3,4);
    select * from alumno where idSalon in (select id from salon where grado=1); -- se puede hacer el filtro dentro del parentesis pero con una sola columna. 


    -- *CONSULTAS CON OPERECIONES MATEMÁTICAS:
    select * from alumno where nota=5*2;  -- se podrian usar variables. 
    select * from alumno where nombre like 'juan';  -- busca elementos parecidos indeferente de mayusculas y minusculas.
    select * from alumno where nombre like 'j%';  -- busca elementos parecidos que inicien con j 
    select * from alumno where nombre like '%a';  -- busca elementos parecidos que terminan en a 
    select * from alumno where nombre like '%n%';  -- busca elementos parecidos que tengan una n en alguna parte.

    select * from alumno where nombre not like '%n%' and nombre not like '%p%';  -- busca elementos parecidos que NÓ tengan una n o una p en alguna parte.
    
    -- *CONSULTAS CON INNER JOIN- LEFT JOIN- RIGHT JOIN


    -- primera forma INNER JOIN (solo muestra valores relacionados):
    select * from alumno 
    inner join salon 
    on alumno.idSalon=salon.id;

    -- otra forma:
    select alumno.nombre, alumno.fecha_ingreso, alumno.nota, salon.grado, salon.grupo
    from alumno
    inner join salon
    on alumno.idSalon=salon.id;

    -- la misma de arriba pero usando alias as:
    select a.nombre, a.fecha_ingreso, a.nota, s.grado, s.grupo
    from alumno as a
    inner join salon as s
    on a.idSalon=s.id;

    -- LEFT JOIN (Le da prioridad a la tabla izquierda, mostrando al final tambien los valores que no esten relacionados con la segunda tabla:
    select a.nombre, a.fecha_ingreso, a.nota, s.grado, s.grupo
    from alumno as a
    left join salon as s
    on a.idSalon=s.id;


    -- RIGHT JOIN (Le da prioridad a la tabla derecha, mostrando al final tambien los valores que no esten relacionados con la primera tabla:
    select a.nombre, a.fecha_ingreso, a.nota, s.grado, s.grupo
    from alumno as a
    right join salon as s
    on a.idSalon=s.id;


    CREATE TABLE `escuela`.`materia` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(45) NULL,
      PRIMARY KEY (`id`));
      

    --* GENERAMOS UNA RELACION DE MUCHOS A MUCHOS CON LA GENERACION DE UNA NUEVA TABLA.
    -- Esta tomando datos de las tablas alumno y materia para relacionarlos en la nueva tabla clase.
    -- esto lo hace a travez de las llaves primarias de cada una (id de alumno, id de materia) y las convierte en llaves foraneas en la tabla clase.

    CREATE TABLE `escuela`.`clase` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `idAlumno` INT NULL,
      `idMateria` INT NULL,
      `hora` TIME NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_idalumno_idx` (`idAlumno` ASC) VISIBLE,
      INDEX `fk_idmateria_idx` (`idMateria` ASC) VISIBLE,
      CONSTRAINT `fk_idAlumno`
        FOREIGN KEY (`idAlumno`)
        REFERENCES `escuela`.`alumno` (`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
      CONSTRAINT `fk_idMateria`
        FOREIGN KEY (`idAlumno`)
        REFERENCES `escuela`.`materia` (`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE);
        
        
        select * from escuela.materia;
        
    INSERT INTO clase (idAlumno, idMateria, hora) VALUES 
    ('1', '1', '8:00'),
    ('1', '2', '9:00'),
    ('1', '3', '10:00'),
    ('1', '4', '11:00'),
    ('1', '5', '12:00'),
    ('2', '1', '8:00'),
    ('2', '2', '9:00'),
    ('2', '3', '10:00'),
    ('2', '4', '11:00'),
    ('2', '5', '12:00'),
    ('3', '1', '8:00'),
    ('3', '2', '9:00'),
    ('3', '3', '10:00'),
    ('3', '4', '11:00'),
    ('3', '5', '12:00');
        
    select * 
    from clase
    inner join alumno on clase.idAlumno=alumno.id;

    select * 
    from clase
    inner join materia on clase.idMateria=materia.id;


    select * 
    from clase
    inner join alumno on clase.idAlumno=alumno.id
    inner join materia on clase.idMateria=materia.id;

    select a.nombre as alumno, m.nombre as materia, c.hora   -- ESTA ES LA MAS COMPLETA que muestra la tabla 
    from clase as c
    inner join alumno as a on c.idAlumno=a.id
    inner join materia as m on c.idMateria=m.id;

    select a.nombre as alumno, m.nombre as materia, c.hora   -- ESTA ES LA MAS COMPLETA haciendo filtro con where
    from clase as c
    inner join alumno as a on c.idAlumno=a.id
    inner join materia as m on c.idMateria=m.id
    -- where c.hora='8:00' -- quedo comentado
    where c.hora  between '8:00' and '10:00'
    ;


    -- *GENERANDO VISTAS 

    create view vista_alumnos_sin_salon as
    select *
    from alumno
    where idSalon is null;

    select * from vista_alumnos_sin_salon;  -- PARA VER LO QUE HAY EN LA VISTA HAY QUE LLAMARLA IGUAL QUE UNA TABLA. 

    drop view vista_alumnos_sin_salon;  -- borramos la vista para modificarla. 

    alter view vista_alumnos_sin_salon as  -- cuando usamos alter no tenemos que usar el drop de la linea anterior pues esto altera la vista sin tener que eliminarla.
    select id, nombre as alumno, nota as calificacion  -- la vista tiene que existir para poder alterarla.
    from alumno
    where idSalon is null;

    select * from vista_alumnos_sin_salon
    where alumno like '%n%';


    -- *INNER JOIN ENTRE TRES TABLAS:

    alter view vista_alumnos_en_materia as
    select count(m.id) as Cantidad_alumnos, m.nombre as materia
    from clase as c
    inner join materia as m on c.idMateria=m.id
    inner join alumno as a on c.idAlumno=a.id
    group by m.id
    ;

    select * from vista_alumnos_en_materia;



    -- *VARIABLES EN SQL:
    use escuela;
    set @nota_reprobado=4;
    set @nota_minimo=5;
    set @nota_excelente=10;

    set @cantidad_reprovado=0;
    set @cantidad_minimo=0;
    set @cantidad_excelente=0;

    --¿ la palabra into guarda el valor en la variable:

    select count(*) into @cantidad_reprobado
    from alumno
    where nota<=@nota_reprobado;

    select count(*) into @cantidad_minimo
    from alumno
    where nota>=@nota_minimo;

    select count(*) into @cantidad_excelente
    from alumno
    where nota>=@nota_excelente;

    select @cantidad_reprobado as reprobados, @cantidad_minimo as aprobados, @cantidad_excelente as excelentes;




    -- *PROCEDIMIENTOS ALMACENADOS EN MYSQL:

    -- se diferencian de las funciones en que en este caso se puede tener cuantas variables de entrada y salida se 
    -- quiera, ademas las funciones se pueden llamar dentro de otras sentencias, estos procedure nó.

    --¿  in indica parametro de entrada. out indica parametro de salida,; luego hay que poner de que tipo es el parámetro
    --¿ begin - end indican el inicio y final respectivamente de el procedure.

    delimiter //
    create procedure alumnos_con_letra(in letra char)
    begin
    select *  -- esta linea si queremos ver el registro completo (renglon de la tabla).
    -- select count(*) -- esta linea si queremos solo contar los registros. 
    from alumno
    where nombre like concat('%',letra,'%');
    end//
    delimiter ; -- entre delimiter y ; hay un espacio para que no salga error.

    -- drop procedure alumnos_con_letra; -- asi se borra un procedure. 

    call alumnos_con_letra('j');


    delimiter //
    create procedure alumnos_con_letra_con_retorno(in letra char, out numero int)
    begin
    -- select *  -- esta linea si queremos ver el registro completo (renglon de la tabla).
    select count(*) into numero-- esta linea si queremos solo contar los registros. 
    from alumno
    where nombre like concat('%',letra,'%');
    end//
    delimiter ; -- entre delimiter y ; hay un espacio para que no salga error.


    call alumnos_con_letra_con_retorno('j',@cantidad_j);
    select @cantidad_j;

    call alumnos_con_letra_con_retorno('l',@cantidad_l);
    select @cantidad_l;


    -- FORMA PARA LLAMAR TODO JUNTO:
    call alumnos_con_letra_con_retorno('l',@cantidad_l);
    call alumnos_con_letra_con_retorno('i',@cantidad_i);
    call alumnos_con_letra_con_retorno('j',@cantidad_j);

    select @cantidad_l as con_l, @cantidad_j as con_j,  @cantidad_i as con_i;

    -- *FUNCIONES EN SQL:
    -- se diferencian de los procedure en que en este caso se puede tener solo variables de entrada en los parametros, una sola salida  
    -- , ademas las funciones se pueden llamar dentro de otras sentencias, los procedure nó.

    delimiter //
    create function numero_letras(letra char) returns int
    begin
      declare numero int;
        select count(*) into numero from alumno where nombre like concat('%',letra,'%');
        return numero;
    end//
    delimiter ; -- entre delimiter y ; hay un espacio. 

    select numero_letras('j');


    select left(nombre,1) from alumno; -- muestra la primera letra de izquierda a derecha de cada elemento de la tabla alumno.

    select left(nombre,1) as letra, numero_letras(left(nombre,1)) as alumnos_con_letra from alumno; -- FORMA CHEVERE DE FUNCION

    -- *DIFERENCIAS ENTRE PROCEDIMIENTOS Y FUNCIONES DE SQL
    use escuela;

    drop procedure if exists opereciones_p;

    delimiter // 
    create procedure operaciones_p(in numero1 int, in numero2 int, out res_mul int, out res_suma int)
    begin
      select numero1*numero2, numero1+numero2 into res_mul, res_suma;
    end //
    delimiter ;

    set @res_mul=0;
    set @res_suma=0;
    call operaciones_p(3,3, @res_mul,@res_suma);
    select @res_mul, @res_suma;


    -- Funcion para comparar:
    delimiter //
    create function operaciones_f(numero1 int, numero2 int) returns int
    begin
      set @res_mul=0;
        select numero1*numero2 into @res_mul;
        return @res_mul;
        
    end//
    delimiter ;

    select operaciones_f(3,3);


    --  en este precedimiento usamos dentro de él una funcion.
    delimiter // 
    create procedure operaciones_p_f(in numero1 int, in numero2 int, out res_mul int, out res_suma int)
    begin
      select operaciones_f(numero1,numero2), numero1+numero2 into res_mul, res_suma;
    end //
    delimiter ;

    call operaciones_p_f(3,3,@res_mul,@res_suma);
    select @res_mul, @res_suma;

    CREATE TABLE `acciones` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `accion` VARCHAR(45) NULL,
      `fecha` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`));

    select *from escuela.acciones;


    -- *GENERANDO GATILLOS O TRIGGER:
    -- los gatillos sirven para la seguridad de la base de datos. Ya que generan registro de acciones
    -- son similares a un addEveentListener de javaScript

    delimiter //
    create trigger log_tabla_alumno after insert on alumno
    for each  row begin
      insert into acciones(accion) 
        value (concat('Se creo un registro en alumno',new.nombre,' y id:',new.id));
    end //
    delimiter ;

    drop trigger log_tabla_alumno;  -- ASI SE BORRA UN TRIGGER. 


    -- *Administrar los privilegios de usuario en mySql workbench

    select * from mysql.user; -- el signo % significa que tiene todos los permisos y se puede conectar desde cualquier red y pc. 
    grant usage on *.* to gestor identified by 'gato33_33gato'; -- el nombre 'gestor' puede ser cualquier nombre. 
    -- el signo *.* significa todas las bases de datos y todas las tablas. 

    grant usage on *.* to gestor@localhost identified by 'gato33_33_gato'; -- el @ delimita desde dónde se puede conectar.

    -- grant usage on *.* to gestor@170.168.1.,120 identified by 'gato33_33gato'; -- dando la ip como host  NO DAR ENTER, LA IP ES INVENTADA

    drop user gestor@localhost;
    -- drop user @170.168.1.,120 ;
    drop user gestor; -- de esta forma se quita el usuario que se puede conectar desde fuera, por seguridad es bueno dejar solo el de localhost. 

    grant select,delete,update,insert, create, drop on *.* to gestor;  -- Da permisos (select, delete) al usuario gestor de ver todas las bases de datos y todas las tablas. 
    grant all privileges on *.* to gestor;

    show grants for gestor; -- muestra los permisos que tenga el usuario 'gestor'. 
    revoke all privileges on *.* from gestor; -- quita todos los privilegios que se le dió al usuario. 
    flush privileges; --  actualiza los privilegios. 



    -- *EXPORTAR UN EXCELL
    use escuela;
    select * from escuela.alumno where nota >=7
    into outfile 'mayorque7s.csv'
    fields terminated by ','
    enclosed by '"'
    lines terminated by '\n'
    ;
    -- para exportar: click en el mune que se abre en: export recordset to external file
```


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

  // NOTAS MONGO

  ```
  // * AL ABRIR DEBE INICIARCE:

// Primero abrir mongod, y luego mongosh. En mongosh  es donde se ejecutarán los comandos.cuando haga coneccion debo dar un enter en el shell o terminal cmd de mongod.exe para que pueda conectarse

//hay que refrescar para que muestre los cambios agregados en las bases de datos.
//se cierra con ctrl + c
// ! MONGO FUNCIONA CON JAVASCRIPT, POR LO QUE PUEDO USAR TODAS LAS CARACTERISTICAS DE ESTE.


// // comandos comunes:
/*
help    muestra los comandos de ayuda comunes
db.help    muestra los camandos de las bases de datos
use local     selecciona la base de datos llamada local
documento = { "nombres": "Juan Carlos", "apellidos": "Martinez", "pedidos": [] }  Guardando en una variable un objeot json
 db.productos.insert({"name":"laptop"})
show collections    muestra las colecciones
show dbs     muestra las bases de datos que tienen datos. si no tiene datos no la mostrara.
db.productos.insert({"name":"laptop"})  lo que hay en las llaves es un json, genera la base de datos productos y le inserta el objeto json.
cls para limpiar la consola
db.coleccion_personas.find()  busca o muestra lo que hay en coleccion personas

db.products.drop()
webstore> db.dropDatabase()     borra la base de datos webstore
webstore> db.createCollection("users")   para generar la collecction users en la basedeDatos webstore
webstore> db.products.drop()      borra la coleccion products de la base de datos webstore
db.products.find().pretty()      muestra los objetos que hay en la coleccion products, solo que organizadamente gracias al Pretty(
db.products.insert([{objetoJson1},{objetoJson2},{objetoJson3}])     asi puedo guardar multiples objetos de una sola vez
db.products.find({"name":"mouse"})       Muestra de los objetosJson  el o los que tengan el valor "mouse" en la clave name.
db.products.find({"name":"mouse","type"="computers"})       Muestra de los objetosJson  el o los que tengan los valores indicados..
db.products.findOne({"name":"mouse","type"="computers"})       Muestra de los objetosJson  el primer resultado que tenga los valores indicados..
db.products.findOne({"tags":"computers"},{"name":1,"description":1,"_id":0})   en el segundo objeto estamos poniendo si queremos ver esa informacion en 1, y si no la queremos ver en 0
db.products.findOne({"tags":"computers"}).sort({name:1})   una vez que encuentre la busqueda que la ordene a partir de el valor de name alfabeticamente. Si no lo ordeno me da el orden segun fueron insertados.

db.products.findOne({"tags":"computers"}).limit(3) limita la cantidad de resultados.

db.products.count()    muestra cuantos elementos tiene la coleccion products.
// en vez de console.log()   en mongo se usa print()   porque no esta usando la consola. sino la terminal.

db.products.find().forEach(product=>print("Product Name: " + product.name))   imprimira solo el nombre de cada producto de la coleccion de productos.

!Actualiza todo el objeto:
db.products.update({"name":"mouse"},{"price":99.99})   en el primer objeto se pone el criterio de busqueda, en el segundo el criterio a reemplazar, en este caso busco el primer objeto de la coleccion products con nombre mouse y lo cambio por lo que este escrito en el segundo objeto(en este caso todo lo que habia quedo reemplazado por solo el precio)
//esto debe mandar un WriteResult("nMatched":1,"nUpserted":0,"nModified":1)   que indica si , sí se llevo a cabo cada accion o nó.

!Actualiza solo un valor del objeto
db.products.update({"name":"laptop"},{$set:{"description":"la nueva descripcion"}})

!Inserta el objeto en caso de que no exista
db.products.update({"name":"noExisteEsto"},{$set:{"description":"la nueva descripcion"}},{upsert:true})

!incrementar un valor numerico
db.products.update({"name":"keyboard"},{$inc:{"price":0.01}})    
incremeenta el valor price del objeto con nombre keyboard de la coleccion products en 0.01


!renombrar una propiedad
db.products.update({"name":"keyboard"},{$rename:{"name":"nombreNuevo"}})    


!eliminar datos
db.products.remove({"name":"keyboard"})

!eliminar todos los documentos que tenga dentro una coleccion
db.products.remove({})    




*/


  ```


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// ARCHIVOS MD


Elementos útiles para manejar y estructurar un archivo `.md` (Markdown) con características como bloques de código, títulos, listas, enlaces y más:

---

### 1. **Títulos y Subtítulos**
   - Usa `#` para estructurar títulos. 
   - Ejemplo:
     ```md
     # Título Principal
     ## Subtítulo
     ### Sub-subtítulo
     ```

### 2. **Listas**
   - **Listas ordenadas:**
     ```md
     1. Elemento uno
     2. Elemento dos
     3. Elemento tres
     ```
   - **Listas desordenadas:**
     ```md
     - Elemento A
     - Elemento B
     - Elemento C
     ```

### 3. **Texto Enfático**
   - **Cursiva:** Usa `*texto*` o `_texto_`
   - **Negrita:** Usa `**texto**` o `__texto__`
   - **Negrita y cursiva:** Usa `***texto***`

### 4. **Bloques de Código**
   - Usa tres comillas invertidas (\`\`\`) para delimitar bloques de código. Puedes especificar el lenguaje para resaltar la sintaxis:
     ```md
     ```javascript
     console.log("Hola, mundo!");
     ```
     ```

### 5. **Tablas**
   - Para organizar información en tablas:
     ```md
     | Columna 1 | Columna 2 | Columna 3 |
     |-----------|-----------|-----------|
     | Dato 1    | Dato 2    | Dato 3    |
     ```

### 6. **Enlaces e Imágenes**
   - **Enlace:** `[Texto](URL)`
     ```md
     [Visita Google](https://www.google.com)
     ```
   - **Imagen:** `![Texto alternativo](URL de la imagen)`
     ```md
     ![Logo](https://ejemplo.com/logo.png)
     ```

### 7. **Citas**
   - Usa `>` para agregar citas:
     ```md
     > Esto es una cita.
     ```

### 8. **Separadores**
   - Usa tres guiones (`---`) o asteriscos (`***`) para crear una línea horizontal:
     ```md
     ---
     ```

### 9. **Expandir o Contraer Bloques**
   - Aunque Markdown puro no soporta bloques desplegables, algunos motores (como GitHub o plataformas específicas) permiten usar detalles:
     ```html
     <details>
       <summary>Haz clic para expandir</summary>
       Contenido adicional aquí.
     </details>
     ```

### 10. **Checkboxes**
   - Ideal para listas de tareas:
     ```md
     - [ ] Tarea pendiente
     - [x] Tarea completada
     ```


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// CLAVES DE TECLADO

//1) //*Color amarillo   TITULOS
//2) //¿Color Azul       TEMAS POCO FRECUENTES O PREGUNTAS
//3) //!Rojo             lINKS O SINTAXIS IMPORTANTES
//4) ////Resaltado blanco
//5) // Espacio verde de comentario    PARA EXPLICAR
//6) //Sin espacio comentario por defecto




//                *TECLAS POCO FRECUENTES
// windows + espacio  : configura el tipo de teclado por idioma.


¡Claro! Aquí tienes una lista de atajos de teclado útiles en Windows 11, incluyendo los específicos para navegadores como Microsoft Edge y Google Chrome:

### Atajos Generales de Windows 11

- **Win + W**: Abrir el panel de Widgets.
- **Win + A**: Desplegar la configuración rápida.
- **Win + N**: Abrir el Centro de notificaciones.
- **Win + Z**: Abrir el selector de Snaps.
- **Win + C**: Abrir Microsoft Teams.
- **Win + Tab**: Abrir vista de tareas.
- **Win + P**: Proyectar una pantalla.
- **Win + R**: Abrir el comando Ejecutar.
- **Win + Shift + S**: Tomar un recorte de pantalla.
- **Win + I**: Abrir la configuración de Windows 11.
- **Win + X**: Abrir el menú contextual del botón Inicio.
- **Win + . (punto)**: Iniciar el teclado Emoji.
- **Win + D**: Mostrar u ocultar el escritorio.
- **Win + L**: Bloquear tu computadora.

### Atajos Comunes con Ctrl

- **Ctrl + A**: Seleccionar todo el contenido.
- **Ctrl + C**: Copiar los elementos seleccionados.
- **Ctrl + X**: Cortar los elementos seleccionados.
- **Ctrl + V**: Pegar los elementos copiados o cortados.
- **Ctrl + Z**: Deshacer una acción.
- **Ctrl + Y**: Rehacer una acción.
- **Ctrl + Supr**: Eliminar el elemento seleccionado y moverlo a la Papelera de reciclaje.
- **Ctrl + Shift + Esc**: Abrir el Administrador de tareas.
- **Ctrl + P**: Imprimir la página actual.
- **Ctrl + N**: Abrir una nueva ventana de programa de la aplicación actual.

### Atajos Específicos para Navegadores (Microsoft Edge y Google Chrome)

- **Ctrl + T**: Abrir una nueva pestaña.
- **Ctrl + W**: Cerrar la pestaña actual.
- **Ctrl + Shift + T**: Reabrir la última pestaña cerrada.
- **Ctrl + Tab**: Cambiar a la siguiente pestaña.
- **Ctrl + Shift + Tab**: Cambiar a la pestaña anterior.
- **Ctrl + L**: Seleccionar la barra de direcciones.
- **Ctrl + D**: Añadir la página actual a favoritos.
- **Ctrl + Shift + B**: Mostrar u ocultar la barra de favoritos.
- **Ctrl + H**: Abrir el historial.
- **Ctrl + J**: Abrir las descargas.
- **Ctrl + F**: Buscar en la página actual.
- **Ctrl + R** o **F5**: Recargar la página actual.
- **Ctrl + Shift + N**: Abrir una nueva ventana en modo incógnito (Chrome) o InPrivate (Edge).
- **Alt + Flecha izquierda**: Ir a la página anterior.
- **Alt + Flecha derecha**: Ir a la página siguiente.
- **F11**: Entrar o salir del modo de pantalla completa.

Estos atajos pueden ayudarte a mejorar tu productividad y eficiencia tanto en Windows 11 como en tus navegadores. ¿Hay algún otro atajo específico que te gustaría conocer? 😊

Source: Conversation with Copilot, 8/11/2024
(1) Lista completa de todos los atajos del teclado de Windows 11. https://www.guiahardware.es/atajos-del-teclado-de-windows-11/.
(2) 155+ Windows 11 Shortcuts: The Ultimate Windows Keyboard Shortcuts List .... https://techpp.com/2024/06/15/windows-11-shortcuts-list/.
(3) Alfabeto de atajos de Windows 11: 52 atajos de teclado esenciales. https://www.mekan0.com/es/windows-11-shortcut-alphabet-52-essential-keyboard-shortcuts/.
(4) Windows 11 Keyboard shortcuts you should know - The Windows Club. https://www.thewindowsclub.com/windows-11-keyboard-shortcuts.
(5) Atajos de Teclado Windows 11: Los 50 Más Utilizados. https://windowsreport.com/es/mejores-atajos-teclado-windows-11/.
(6) 43 atajos de teclado para Microsoft Edge que debes saber. https://www.cloudmasters.es/43-atajos-de-teclado-para-microsoft-edge-que-debes-saber/.
(7) Mejores gestos y atajos de teclado para Windows 11 - Xataka. https://www.xataka.com/basics/mejores-gestos-atajos-teclado-para-windows-11.
(8) Cómo poner Chrome en el escritorio de Windows 11 ️. https://tecnobits.com/como-poner-chrome-en-el-escritorio-de-windows-11/.


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// Emmet

<!--  * ESTE COMENTARIO SE VE MUY BIEN  -->
<!-- ! ESTE ES UN COMENTARIO EN COLOR BLANCO -->
<!--  //  ESTE TEXTO esta subrayado  -->
<!-- todo ESTA PENDIENTE REALIZARCE -->
<!-- ¿ ESTO SERIA UNA PREGUNTA -->
 <!-- para abrir settigns.json presionar: ctrl + shift + p  Escribe Preferences: Open Settings (JSON) y selecciona la opción.-->

ID Y CLASES: div#hero.wrapper.clase1 —>
<div id="hero" class="wrapper clase1"></div>

ATRIBUTOS: img[src="cat.jpg"][alt="foto de gato"] —>
<img src="cat.jpg" alt="foto de gato" />

CONTENIDO: p{Esto es un párrafo}
<p>Esto es un párrafo</p>

Escalando: Nodos hermanos + div+div>p>span+em^bq —>
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>

Agrupar: Nodos hijos > div>(header>ul>li>a)+footer>p

<div>
  <header>
    <ul>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>

MULTIPLICAR: ul>li{Item $}*3
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

COMENZANDO DESDE UN # ESPECIFICO ul>li.item$@3*5
<ul>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
  <li class="item6"></li>
  <li class="item7"></li>
</ul>

Dirección inversa: ul>li.item$@-*5

<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>

Dirección inversa desde un número específico: ul>li.item$@-3*5
<ul>
  <li class="item7"></li>
  <li class="item6"></li>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
</ul>

NODOS SUPERIORES ^: ul>li>div+p^li>span

<ul>
  <li>
    <div></div>
    <p></p>
  </li>
  <li><span></span></li>
</ul>

ul>li>div+p^^p

<ul>
  <li>
    <div></div>
    <p></p>
  </li>
</ul>
<p></p>

<!--  ?PONER EN NEGRITA O SELECCIONAR DENTRO DE UN TEXTO ej: texto b{texto} texto: -->
Lorem ipsum, b{dolor sit amet consectetur} adipisicing elit.
<p>
  Lorem ipsum dolor, <b>sit amet consectetur adipisicing elit.</b> Dolorem,
  earum.
</p>


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

// GRID VS FLEXBOX

CSS Grid y Flexbox son sistemas de diseño en CSS que permiten estructurar y alinear elementos de manera eficiente y flexible en una página web. Aunque ambos tienen similitudes, están diseñados para resolver diferentes tipos de problemas de diseño.

---

## **1. Grid Layout**

### **¿Qué es Grid?**
Grid es un sistema bidimensional que organiza elementos en filas y columnas. Es útil cuando necesitas diseñar interfaces complejas, como tableros o layouts con alineaciones tanto verticales como horizontales.

### **Conceptos clave de Grid**
1. **Contenedor Grid**: El elemento principal que define el grid (`display: grid;` o `display: inline-grid;`).
2. **Filas y columnas**: Se definen con las propiedades `grid-template-rows` y `grid-template-columns`.
3. **Áreas de Grid**: Puedes asignar nombres a diferentes partes del grid usando `grid-template-areas`.
4. **Gap**: Define el espacio entre filas y columnas con `grid-gap`, `row-gap` y `column-gap`.

### **Cómo implementar Grid**
```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas de igual tamaño */
    grid-template-rows: auto 100px; /* Primera fila automática, segunda 100px */
    gap: 10px; /* Espaciado entre elementos */
  }
  .item {
    background: lightblue;
    padding: 20px;
    text-align: center;
  }
</style>
```

---

## **2. Flexbox Layout**

### **¿Qué es Flexbox?**
Flexbox es un sistema unidimensional que organiza elementos en una fila **o** columna. Es ideal para alineaciones simples como menús, barras de navegación, y para centrar elementos de forma fácil.

### **Conceptos clave de Flexbox**
1. **Contenedor Flex**: El elemento padre que define el flex (`display: flex;` o `display: inline-flex;`).
2. **Eje principal**: La dirección en la que los elementos se organizan (por defecto, es horizontal).
3. **Eje cruzado**: Perpendicular al eje principal.
4. **Propiedades importantes**:
   - `justify-content`: Alinea elementos a lo largo del eje principal.
   - `align-items`: Alinea elementos a lo largo del eje cruzado.
   - `flex-wrap`: Permite que los elementos se envuelvan en varias líneas si es necesario.

### **Cómo implementar Flexbox**
```html
<div class="flex-container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>

<style>
  .flex-container {
    display: flex;
    justify-content: space-between; /* Espacio igual entre los elementos */
    align-items: center; /* Centra los elementos verticalmente */
    gap: 10px; /* Espaciado entre elementos */
  }
  .item {
    background: lightgreen;
    padding: 20px;
    text-align: center;
  }
</style>
```

---

## **Diferencias clave entre Grid y Flexbox**

| Aspecto                 | **Grid**                          | **Flexbox**                       |
|-------------------------|------------------------------------|------------------------------------|
| Dimensión               | Bidimensional (filas y columnas)  | Unidimensional (fila o columna)   |
| Alineación              | Compleja y precisa                | Más sencilla                      |
| Uso ideal               | Layouts completos                 | Componentes pequeños              |
| Gap soportado           | Entre filas y columnas            | Solo entre elementos flex         |

---

Si quieres un diseño que combine ambos, **Grid** puede definir el layout general y **Flexbox** puede manejar la alineación interna de componentes individuales. 

Aquí tienes un ejemplo que combina **Grid** para el diseño principal y **Flexbox** para la alineación interna de los componentes. Esto es útil para construir un sitio web con una estructura general y menús o botones con alineación precisa.

---

### **Ejemplo combinado: Layout de página web**

```html
<div class="grid-container">
  <header class="header">Encabezado</header>
  <nav class="nav">
    <ul class="flex-container">
      <li>Inicio</li>
      <li>Servicios</li>
      <li>Contacto</li>
    </ul>
  </nav>
  <main class="main">
    <div class="flex-container content">
      <div class="card">Artículo 1</div>
      <div class="card">Artículo 2</div>
      <div class="card">Artículo 3</div>
    </div>
  </main>
  <footer class="footer">Pie de página</footer>
</div>

<style>
  /* Estilo para el contenedor principal (Grid) */
  .grid-container {
    display: grid;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "footer";
    grid-template-rows: auto auto 1fr auto;
    gap: 20px;
    padding: 20px;
  }

  .header {
    grid-area: header;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
  }

  .nav {
    grid-area: nav;
    background-color: #333;
    color: white;
  }

  .main {
    grid-area: main;
    background-color: #f4f4f4;
    padding: 10px;
  }

  .footer {
    grid-area: footer;
    background-color: #222;
    color: white;
    text-align: center;
    padding: 10px;
  }

  /* Estilo para el menú (Flexbox) */
  .flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    list-style: none;
    margin: 0;
  }

  .flex-container li {
    color: white;
    cursor: pointer;
  }

  /* Estilo para el contenido interno (Flexbox dentro de Grid) */
  .content {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .card {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
    flex: 1; /* Se distribuyen equitativamente */
  }
</style>
```

---

### **Descripción del ejemplo**

1. **Grid Layout**:
   - Divide la página en cuatro áreas principales: encabezado, navegación, contenido principal y pie de página.
   - Usa `grid-template-areas` para asignar nombres a las áreas.

2. **Flexbox dentro de Grid**:
   - El menú de navegación (`nav`) utiliza Flexbox para alinear los elementos de forma horizontal y distribuirlos con `justify-content: space-around`.
   - Dentro de la sección principal (`main`), se alinea una fila de tarjetas con Flexbox usando `gap` para el espaciado.

---


✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

//******************************************** */
//******************************************** */
//******************************************** */
// Rutas:
////tundama
// C: \Users\Administrador\Desktop\Escritorio Mayo 2022\Sena 2023\PrácticaReact

// programacion:
// C: \Users\Administrador\Desktop\Escritorio Mayo 2022\Programacion

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

//// usos de .reduce



¡Claro! El método `reduce` en JavaScript es realmente versátil y puede utilizarse para diversas tareas. Permíteme mostrarte algunos ejemplos prácticos:

1. **Sumar los números en un array**:
   ```javascript
   const numeros = [1, 2, 3, 4, 5];
   const suma = numeros.reduce((acumulado, num) => acumulado + num);
   console.log(suma); // Resultado: 15
   ```

2. **Calcular el producto de los elementos de un array**:
   ```javascript
   const numeros = [1, 2, 3, 4, 5];
   const producto = numeros.reduce((acumulador, elementoActual) => acumulador * elementoActual, 1);
   console.log(producto); // Resultado: 120
   ```

3. **Encontrar máximos y mínimos**:
   Puedes usar `reduce` para encontrar el valor máximo o mínimo en un array. Por ejemplo, para hallar el máximo:
   ```javascript
   const valores = [10, 5, 20, 8, 15];
   const maximo = valores.reduce((max, valor) => (valor > max ? valor : max), -Infinity);
   console.log(maximo); // Resultado: 20
   ```

4. **Quitar duplicados en un array**:
   Si tienes un array con elementos duplicados, puedes usar `reduce` para obtener un nuevo array sin duplicados:
   ```javascript
   const duplicados = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
   const sinDuplicados = duplicados.reduce((resultado, elemento) => {
     if (!resultado.includes(elemento)) {
       resultado.push(elemento);
     }
     return resultado;
   }, []);
   console.log(sinDuplicados); // Resultado: [1, 2, 3, 4]
   ```

5. **Intersección de elementos de un array**:
   Supongamos que tienes varios arrays y quieres encontrar los elementos comunes entre ellos:
   ```javascript
   const array1 = [1, 2, 3, 4];
   const array2 = [3, 4, 5, 6];
   const interseccion = array1.reduce((resultado, elemento) => {
     if (array2.includes(elemento)) {
       resultado.push(elemento);
     }
     return resultado;
   }, []);
   console.log(interseccion); // Resultado: [3, 4]
   ```

En resumen, `reduce` es una herramienta poderosa para transformar y acumular valores en un array. ¡Espero que estos ejemplos te ayuden a comprender mejor su utilidad! Si tienes más preguntas o necesitas más ejemplos, no dudes en preguntar. 😊🚀

Source: Conversation with Copilot, 8/30/2024
(1) JavaScript Reduce: ejemplos prácticos para el día a día. https://zeppelin.dev/blog/javascript-reduce-ejemplos-practicos.
(2) JavaScript Reduce: ejemplos prácticos para el día a día. https://bing.com/search?q=ejemplos+de+usos+de+reduce+en+javascript.
(3) JavaScript reduce: uso en arrays y ejemplos - certidevs.com. https://certidevs.com/tutorial-javascript-reduce.
(4) ¿Cómo usar el método reduce en Javascript? - 4Geeks. https://4geeks.com/es/how-to/metodo-reduce-javascript.
(5) Manipulación de arrays de objetos en JavaScript usando `reduce`. https://abalozz.es/manipulacion-de-arrays-de-objetos-en-javascript-usando-reduce/.

```

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
 //    COMANDOS DE GUIT

 
// 	Comandos de Git:
// Ctrl + c para copiar en el terminal
// 	Cd en el terminal para entrar en una carpeta especifica
// 	$ git config--global user.name 'jonnathan777'
// 	$ git init   es el primer commando que se usa para inicializar  git
// 	$ git config--global user.email 'roycreacionesysoluciones@gmail.com'
// 	$ git config--global user.name     para confirmer que quedo inscrito el nombre.
// 	$ git config--global user.email     para confirmer que quedo registrado el email.
// 	$ git status      			me muestra la información de los cambios para git
// 	$ git add index.html      		agrega el archivo nombrado para dejarlo en sala de espera
// 	$ git log 			muestra lo que se ha hecho en los commint el historial
// 	$ git commit - m "comentario"  se realiza un commit para empezar a guardar lo que esta en sala de espera
// 	$ git log--oneline		muestro lo de git log pero solo los commint sin fecha
// 	$ git diff	muestra la diferencia entre los últimos archivos guardados antes del add
// 	$ git add.agrega todos los cambios de todos los archivos
// 	$ git restore--staged precios.html  quita quitarEsto.html en este caso del ultimo add para que no este mas pendiente por guardar en el commit
// 	$ git checkout archivo.html	devuelve o revierte el ultimo cambio del archvo nombrado 	
// 	$ git checkout 35a010f 	devuelve el proyecto hasta el commit que tenga el código alfanumérico que se pone en frente de checkout
// 	$ git checkout master	vuelve a la rama master o principal
// 	$ git stash	se usa cuando hay un error volviendo a la rama master y lo que hace es no guardar los cambios hechos y volver a la master sin modificación alguna
// 	$ git diff archivo.html	muestra las diferencias entre el archivo antes y despues del ultimo commit
// 	$ git diff eccd63b 35a010f	muestra las diferencias entre los dos commit con los dos códigos respectivos
// 	$ git branch	muestra todas las ramas y con asterisco la rama actual(si no aparece es porque hay que hacer un commit previo asi : $ git commit - m "comentario")
// 	$ git branch devJonnathan	crea una nueva rama con el nombre especificado
// 	$ git switch devJonnathan	pasa de rama a la mensionada para seguir trabajando sobre esta.
// 	$ git merge devJonnathan 	mescla la rama devJonnathan con la rama master o principal
// 	$ git log--oneline –graph	muestra un grafico de los commint según las ramas existentes
// 	$ git remote	muestra los repositorios remotos que hay
// 	$ git remote add origin1 https://github.com/Jonnathan777/ciclo3rodolfo.git   en este caso creamos la conexion con el repositorio remote que es link azul, origin es el nombre del repositorio, podria ser cualquier otro nombre
// 	$ git remote '-v'	muestra el link de arriba del repositorio remoto en uso
// 	$ git remote rm origen 	origen es el nombre del repositorio que vamos a eliminar con este comando
// 	$ git fetch 	trae todo lo que hay en el repositorio nuevo que no existe en el repositorio local pero si en el remoto.
// 	$ git push origin master	origin es el nombre del repositorio remoto y master el nombre de la rama, se pueden cambiar.Esto vincula de una vez el repositorio local al remoto agregando los cambios.
// 	$ git pull origin master	Actualiza el repositorio local con el repositorio remoto, osea que trae los cambios que los compañeros hayan hecho en la rama seleccionada, en este caso fue la rama master
// 	RESUMEN DEL SIGUIENTE VIDEO:
// https://www.youtube.com/watch?v=HiXLkL42tMU
	 
	

	

// 	git init	se inicializa el trabajo con git
// 	 git add	pasa los archivos del woriking directory al staging area
// 	git status	para ver en que estado o paso estan los archivos
// 	git commit 	pasa los archivos del staging area al repositorio
// 	git push	para subir los archivos a un repositorio remoto
// 	git pull	trae los cambios que han hecho los otros desarrolladores
// 	git clone		clona todo lo de git a una carpeta local.
// 	----------------------------------------------------------------------------------------------------
//     CUANDO ABRIMOS LA TERMINAL DE GIT:





// ls: Comando para listar directorios y archivos
// pwd: Comando para ver en que ruta de nuestro sistema esta posicionado el terminal
// cd: comando para entrar en las carpetas
// 	ETIQUETAS HTML


//     < img src = "w3schools.jpg" alt = "W3Schools.com" width = "104" height = "142>
// 	En src va la ruta de la imagen, y en alt el mensaje o ruta alterna en caso de que en la primera no salga correctamente la imagen
//     < html lang = "en" > Esta etiqueta es para indicar el lenguaje de la página, va al inicio.
// 	< p title = "I'm a tooltip" > This is a paragraph.</ > Este atributo muestra lo que esta en title cuando se paran sobre el como una informacion emergente
//     < hr > es una línea para separar contenido
//         < br > es un espacio hacia abajo como presionar enter
//             < pre > es igual que p para texto pero esta si deja el text tal como esta, osea espacios y nuevas líneas.
// 	< sub > crea subíndice o sea letras por debajo del nivel de otras letras
//     < sup > crae superíndices o sea que esta por encima del nivel de las otras letras.
// 	< mark > Subraya en amarillo el texto
//     < del > Raya como si fuera un error.
// 	< ins > Pone una línea por debajo del texto.
//     target = "_blank" Abre una nueva ventana al hacer click sobre un enlace.
// 	< figure >
//         <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
//             <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
//         </>
	

// 	De esa manera se debe inserter una imagen y el figcaption es la referencia de la imagen. 
	

// 	< video width = "320" height = "240" controls >
//     <source src="movie.mp4" type="video/mp4">
//         <source src="movie.ogg" type="video/ogg">
//             Your browser does not support the video tag.
//         </>   Etiqueta para video





//         Aquí se muestra como tomar un tiempo de reproducción de video con #t=10,40 desde el segundo 10 hasta el 40


//         <iframe src="../layouts/navegacion.html" frameborder="2" height="50px" width="90%"></iframe>


//         Con esta etiqueta insertamos ventanas de paginas propias o externas como google o youtube




//         RUTA PARA DESCARGAR LAS LIBRERIAS DE NPM:
//         $ npm i @babel/core babel-loader webpack@4 webpack-cli@4 webpack-dev-server html-webpack-plugin@4 copy-webpack-plugin@6 --save-dev
//         ver este video
//         https://www.youtube.com/watch?v=BzynYwGx-qg
//         Give feedback


// ******************** NUEVO RESUMEN:


### Administración de Archivos y Carpetas

1. **`git init`**: Inicializa un nuevo repositorio de Git en el directorio actual. Es el primer paso para empezar a usar Git en un proyecto.
2. **`git add <archivo>`**: Añade un archivo específico al área de preparación (staging area). Puedes usar `git add .` para añadir todos los archivos modificados.
3. **`git rm <archivo>`**: Elimina un archivo del repositorio y del sistema de archivos.
4. **`git mv <archivo_origen> <archivo_destino>`**: Mueve o renombra un archivo en el repositorio.
5. **`git status`**: Muestra el estado de los archivos en el directorio de trabajo y el área de preparación, indicando qué archivos han sido modificados, añadidos o eliminados.

### Trabajo Colaborativo

1. **`git clone <url>`**: Clona un repositorio remoto a tu máquina local. Esto crea una copia completa del repositorio en tu sistema.
2. **`git pull`**: Actualiza tu repositorio local con los cambios más recientes del repositorio remoto. Es útil para mantener tu trabajo sincronizado con el de otros colaboradores.
3. **`git push`**: Envía tus cambios locales al repositorio remoto. Esto es esencial para compartir tu trabajo con otros colaboradores.
4. **`git branch`**: Muestra una lista de todas las ramas en el repositorio. También puedes usar `git branch <nombre_rama>` para crear una nueva rama.
5. **`git checkout <nombre_rama>`**: Cambia a una rama específica. Esto te permite trabajar en diferentes versiones del proyecto simultáneamente.
6. **`git merge <nombre_rama>`**: Fusiona una rama específica con la rama actual. Es útil para integrar cambios de diferentes ramas.
7. **`git fetch`**: Descarga los cambios del repositorio remoto pero no los fusiona automáticamente con tu rama actual. Es útil para revisar los cambios antes de integrarlos.
8. **`git rebase <nombre_rama>`**: Reaplica tus cambios sobre la base de otra rama. Esto puede ayudar a mantener un historial de commits más limpio.





### Navegación de Archivos y Directorios

1. **`cd <directorio>`**: Cambia el directorio actual al especificado. Por ejemplo, `cd Documentos` te llevará al directorio "Documentos".
2. **`cd ..`**: Sube un nivel en la jerarquía de directorios. Si estás en `C:\Usuarios\TuUsuario\Documentos`, `cd ..` te llevará a `C:\Usuarios\TuUsuario`.
3. **`cd /`**: Te lleva al directorio raíz del sistema de archivos.
4. **`ls`** (o **`dir`** en Windows): Lista los archivos y directorios en el directorio actual. Puedes usar `ls -l` para obtener una lista detallada con permisos, tamaños y fechas de modificación.
5. **`pwd`**: Muestra la ruta completa del directorio actual en el que te encuentras.
6. **`mkdir <nombre_directorio>`**: Crea un nuevo directorio con el nombre especificado.
7. **`rmdir <nombre_directorio>`**: Elimina un directorio vacío. Si el directorio contiene archivos, usa `rm -r <nombre_directorio>` para eliminarlo junto con su contenido.
8. **`touch <nombre_archivo>`**: Crea un archivo vacío con el nombre especificado. Es útil para crear rápidamente archivos nuevos.
9. **`cp <archivo_origen> <archivo_destino>`**: Copia un archivo de una ubicación a otra. Puedes usar `cp -r <directorio_origen> <directorio_destino>` para copiar directorios recursivamente.
10. **`mv <archivo_origen> <archivo_destino>`**: Mueve o renombra un archivo o directorio.


Para mostrar todas las ramas del repositorio remoto en tu repositorio local, puedes usar los siguientes comandos de Git:

1. **Listar ramas remotas**: Este comando te mostrará todas las ramas que existen en el repositorio remoto.
   ```bash
   git branch -r
   ```

2. **Actualizar las referencias remotas**: Si no ves todas las ramas remotas, es posible que necesites actualizar las referencias remotas. Esto sincroniza tu repositorio local con el remoto.
   ```bash
   git fetch --all
   ```

3. **Listar todas las ramas (locales y remotas)**: Para ver tanto las ramas locales como las remotas, usa:
   ```bash
   git branch -a
   ```

4. **Mostrar detalles de las ramas remotas**: Este comando proporciona información detallada sobre las ramas remotas.
   ```bash
   git remote show origin
   ```

Estos comandos te ayudarán a visualizar todas las ramas disponibles en el repositorio remoto⁴⁵⁶.

¿Hay algo más en lo que pueda asistirte?

Source: Conversation with Copilot, 8/20/2024
(1) Listar ramas remotas en Git - freeCodeCamp.org. https://www.freecodecamp.org/espanol/news/listar-ramas-remotas-en-git/.
(2) Listar todas las ramas remotas en Git | Delft Stack. https://bing.com/search?q=mostrar+todas+las+ramas+del+repositorio+remoto+Git.
(3) Guía Completa para Listar Ramas en Git | Tutorial en Español. https://www.gyata.ai/es/git/git-branch-list.
(4) 💥 ¿Qué es GIT? ¿Qué son los REPOSITORIOS? 2021🗄️| EXPLICACIÓN FÁCIL 🚀 | Introducción a GIT #1. https://www.youtube.com/watch?v=mCVQgSyjCkI.
(5) Como conectarse a un repositorio remoto - GIT. https://www.youtube.com/watch?v=oI4uHhZERM4.
(6) Como clonar un repositorio remoto - GIT. https://www.youtube.com/watch?v=bz-Vr7g8Yao.
(7) Explicación de Git branch: Cómo eliminar, mover, crear y renombrar una .... https://www.freecodecamp.org/espanol/news/explicacion-de-la-rama-de-gi-como-eliminar/.



✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

//    ASPECTOS DE TYLORSOFT


General:
Please consider these to be the order of priorities:
1. Tickets works as expected
2. ⁠Code is clean and organised
3. UI is beautiful with a nice user experience
4. Much comments explicative.
5. Good practice are aplicated.


Specific:
-  No pasar paremetros en los metodos de no ser necesario usar get().
-  No usar variables globales de no ser necesario usar parametros.
-  Nombrar las variables y constantes con nombres intuitivos relacionados.
-  Tratar de usar recursividad para evitar bucles muy verbosos.
-  Cuidado con la indentacion y con el formato.
-  Usar mas filter, map, set, para reducir las lineas de codigo.
-  Dejar una linea final vacia al final de un archivo.

// 🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏
//                                                              HERE I EDIT.

// http://localhost:3000/#/project/100092/drawings2/CGZtoEKD/23

// current a la derecha.
// Drawings2 es el nuevo componente de dibujo.--> ir a third set.. hacerlo con botones para navegar todo igual.
// DrawingVersionsModal es el nuevo componente. DrawingCompareModal es el antiguo.
// Es muy importante usar la libreria panzoom para poder hacer zoom en las imagenes.

// for correct usage of Panzoom library, see my code here:
// app/src/components/concourse-drawings2/drawings-viewer.tsx

// and test using project 100092:
// http://localhost:3000/#/project/100092/drawings2/

//   Please consider these to be the order of priorities:
// 1. Modal works as expected
// 2. ⁠Code is clean and organised
// 3. ⁠Modal is beautiful with a nice user experience

// FUNCION DE PANZOOM RECOMENDADA:

// Actualizar el panzoom de la imagen seleccionada.Actualizar 2 con los zooms de 1, para que los dos queden sincronizados.
// ponerlo organizado.
// !sugerencia de Mr Daniel en el video:
// escuchar los cambios y actualizar 2 con los zooms de 1, para que los dos queden sincronizados.
// async componentDidLoad() {
//   this.panzoom1=Panzoom(this.panzoomElement, {maxScale: 100, minScale: 0.1});
//   this.panzoom2=Panzoom(this.panzoomElement, {maxScale: 100, minScale: 0.1});
// }
////Verificar cual de estas dos formas es la correcta.
// async componentDidLoad() {
//   this.panzoom1=Panzoom(this.panzoomElement1, {maxScale: 100, minScale: 0.1});
//   this.panzoom2=Panzoom(this.panzoomElement2, {maxScale: 100, minScale: 0.1});
// }
// 🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏🌏


//    Comandos de la terminal:

- `cd [directorio]`: Cambia el directorio actual al especificado.
- `ls`: Lista los archivos y directorios en el directorio actual.
- `pwd`: Muestra la ruta del directorio actual.
- `mkdir [nombre]`: Crea un nuevo directorio con el nombre especificado.
- `rmdir [nombre]`: Elimina un directorio vacío con el nombre especificado.
- `rm [archivo]`: Elimina el archivo especificado.
- `cp [origen] [destino]`: Copia un archivo o directorio desde el origen al destino.
- `mv [origen] [destino]`: Mueve o renombra un archivo o directorio desde el origen al destino.
- `touch [archivo]`: Crea un archivo vacío con el nombre especificado o actualiza la fecha de modificación si ya existe.
- `cat [archivo]`: Muestra el contenido de un archivo.
- `echo [texto]`: Muestra el texto especificado en la terminal.
- `grep [patrón] [archivo]`: Busca un patrón de texto dentro de un archivo.
- `find [directorio] -name [nombre]`: Busca archivos y directorios por nombre en el directorio especificado.
- `chmod [permisos] [archivo]`: Cambia los permisos de un archivo o directorio.
- `chown [usuario] [archivo]`: Cambia el propietario de un archivo o directorio.
- `df`: Muestra el uso del espacio en disco de todos los sistemas de archivos montados.
- `du`: Muestra el uso del espacio en disco de archivos y directorios.
- `ps`: Muestra una lista de los procesos en ejecución.
- `kill [PID]`: Termina un proceso especificado por su ID de proceso (PID).
- `top`: Muestra una lista en tiempo real de los procesos que consumen más recursos.
- `man [comando]`: Muestra el manual de usuario para el comando especificado.