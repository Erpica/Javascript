// Datos primitivos:
// string ("'`)
// number
// Boolean
// Undefined => Declarada no inicializada
let undefinedValue
console.log("undefined: ", undefinedValue)
// Null => Declarada e inicializada con "nada"
let nullValue = null
console.log("nullValue: ", nullValue)
// Symbol => Para crear propiedades de objetos y evitar colisiones
let mySymbol = Symbol("mysimbol")
console.log(mySymbol)
// BigInt
let myBigInt = BigInt(9846846846868435163813846846843813843846846841381384684651684)
let myBigInt2 = 9846846846868435163813846846843813843846846841381384684651684n

// Mostrando tipos de datos:
console.log(typeof(myBigInt2))

console.log(typeof(nullValue)) // => Me dice tipo de dato objet. Ya lo veremos más adelante
console.log(typeof nullValue)

myBigInt = nullValue
console.log(typeof(myBigInt))
