console.log()
console.log("1. Concatena dos cadenas de texto")
let myText1 = "Hola"
let myText2 = "Adios"

let myConcatText= myText1 + myText2
console.log(myConcatText)

console.log()
console.log("2. Muestra la longitud de una cadena de texto")
console.log(myConcatText.length)

console.log()
console.log("3. Muestra el primer y último carácter de un string")
console.log(myConcatText[myConcatText.length-1])
console.log(myConcatText[0])

console.log()
console.log("4. Convierte a mayúsculas y minúsculas un string")
console.log(myConcatText.toUpperCase())
console.log(myConcatText.toLowerCase())

console.log()
console.log("5. Crea una cadena de texto en varias líneas")
let myText3 = `
    Esto crea una cadena
    en varias líneas
    `
console.log(myText3)

console.log()
console.log("6. Interpola el valor de una variable en un string")
let myText4 = `Primero se dice ${myText1} y después se dice ${myText2}`

console.log()
console.log("7. Reemplaza todos los espacios en blanco de un string por guiones")
console.log(myText4.replace (/ /g, "-"))

console.log()
console.log("8. Comprueba si una cadena de texto contiene una palabra concreta")
if (myText4.includes("Hola")){
    console.log("Sí que está")
}

console.log()
console.log("9. Comprueba si dos strings son iguales")
if (myText1 == myText2){
    console.log("Igualitos")
} else {
    console.log("Diferentes")
}


console.log()
console.log("10. Comprueba si dos strings tienen la misma longitud")
if (myText1.length == myText2.length){
    console.log("Igualitos")
} else {
    console.log("Diferentes")
}