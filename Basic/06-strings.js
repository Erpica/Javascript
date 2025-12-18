let myName = "Anto"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

console.log(greeting.length)
console.log(greeting[3])
console.log(greeting.toLocaleUpperCase())
console.log(greeting.indexOf("Anto"))
console.log(greeting.includes("Anto"))  // =>true, si pongo antonio me da false
console.log(greeting.slice(2,6))        // desde el 2 incluido hasta el 6 excluido
console.log(greeting.replace("Anto", "Erpica")) // Lo reemplaza y lo imprime

// Template literals
let message = `Hola este es mi
cadena de texto en dos línas
y hasta 3 o más` // acento invertido

console.log(message)
console.log(`Hola, ${myName}`)