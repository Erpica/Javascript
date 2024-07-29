let myName = "Antonio"
let greeting = "Hola, " + myName + "!"

console.log(greeting.length)
console.log(greeting[3])

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Antonio"))
console.log(greeting.indexOf("Pere")) // -1 porque no lo encuentra
console.log(greeting.includes("Antonio"))
console.log(greeting.includes("Pere")) // falso porque no lo encuentra
console.log(greeting.slice(0,10)) //me muestra los elementos entre el 0 y el 10
console.log(greeting.replace("Antonio", "Er Pica")) // cambia antonio por erpica

let message =   `Hola, este es mi
curso de 
JavaScript`                 // con la tecla acento pordemos poner la cadena en varias líneas
console.log(message)

let email = "erpica@anto.pic"

console.log(`Hola, ${myName}! tu email es ${email}`) // con el simbolo del acento, el dolar y las llaves puedo meter una variable sin el signo +
