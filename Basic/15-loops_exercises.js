/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

console.log("1. Crea un bucle que imprima los números del 1 al 20")

for (let i = 1; i <= 20; i++){
    console.log(i)
}

console.log ()
console.log ("2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado")
let mySum =0
i = 1
while (i <= 100){
    mySum = mySum + i
    i++
}

console.log (mySum)

console.log ()
console.log ("3. Crea un bucle que imprima todos los números pares entre 1 y 50")
i = 1
do{
    if (i % 2 == 0){
        console.log(i)
    }
    i++
} while(i <= 50)

console.log ()
console.log ("4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola")
let myArray = ["Pica", "Irene", "Anto", "Alba", "Sara"]
for (nombre of myArray){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
myString = "Anto"
let numberOfWords = 0

for (aWord of myString){
    numberOfWords++
}

console.log(numberOfWords)

console.log ()
console.log ("6. Dado un array de números, usa un bucle para multiplicar "+
    "todos los números y mostrar el producto")

myArray = [2, 3, 4, 10]
myProduct = 1

for (myNumber of myArray){
    myProduct *= myNumber
}
console.log(myProduct)

myArray.reduce((myProduct, myNumber) => myProduct * myNumber, 1)
console.log(myProduct)

console.log ()
console.log ("7. Escribe un bucle que imprima la tabla de multiplicar del 5")
for (i = 1; i < 11; i++){
    console.log(`5 x ${i} = ${5*i}`)
}

console.log ()
console.log ("8. Usa un bucle para invertir una cadena de texto")
let myReverseString = ""
//console.log(myReverseString)

for (aWord of myString){
    myReverseString = (aWord+myReverseString)

}

console.log(myReverseString)

console.log ()
console.log ("9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci")
let x = 0
let y = 1
myCount = 2
let myFibonacci = `${x}, ${y}`

do {
    x = x + y
    y = x + y
    myCount +=2
    myFibonacci = myFibonacci + `, ${x}, ${y}`
} while (myCount <= 8)

console.log(myFibonacci)

console.log ()
console.log ("10. Dado un array de números, usa un bucle para crear un nuevo array que contenga "
    + "solo los números mayores a 10")

let myNumbersArray = [2, 5, 12, 34, 54, 5]
let myArrayBiggerThan10 = []
let j = 0

for (i = 0; i < myNumbersArray.length; i++){
    if (myNumbersArray[i] > 10) {
        myArrayBiggerThan10[j] = myNumbersArray[i]
        j++
    }
}

console.log("Mayores de 10: " + myArrayBiggerThan10.join(", "))

console.log ()
console.log ("Extre: Jugando con map y join")
console.log(`Mayores de 10: ${myArrayBiggerThan10}`)
console.log(myArrayBiggerThan10.map(i => `, ${i}`))
console.log("Mayores de 10: " + myArrayBiggerThan10.map(i => `${i}`).join(", "))
console.log(myArrayBiggerThan10.map(i => `${i}`).join(", "))

