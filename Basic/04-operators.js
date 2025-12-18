// Aritméticos: +, -, *, /, %, **, ++, --, 
// Operadores de asignación: =, +=, -=, *=, /=, **=
// Operadores de comparación: <, >, >=, <=, ==, ===, !=, !==

console.log(0 == false)         // true
console.log(0 == "")
console.log(0 == " ")
console.log(0 === "")           // false
console.log(undefined == null)  // true

// Truthy values (valores verdaderos)
// Todos los  números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)
// 0
// 0n
// null, undefined, NaN => además, por definición Nan !== Nan
// El boolean false
// Cadenas de texto vacías

// operadores lógicos (&&, ||, !)
console.log(!(0 === ""))           // true

// operadores ternarios => ? :
const isRaining = false

isRaining ? console.log("Está lloviendo") : console.log("No llueve")