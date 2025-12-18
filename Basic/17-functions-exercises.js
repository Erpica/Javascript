// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

console.log("1. Crea una función que reciba dos números y devuelva su suma")
function sumFunction(a, b){
    return a + b
}
console.log(sumFunction(2, 3))

console.log()
console.log("2. Crea una función que reciba un array de "
    +"números y devuelva el mayor de ellos")

myArray = [1, 9, 3, 15, 2, 5]
maxNumber = myArray[0]
//console.log(maxNumber)
function maxArray (myArray, maxNumber){
    for (i = 1; i <= myArray.length; i++){
        if (myArray[i] > maxNumber){
            maxNumber = myArray[i]
        }
    }return maxNumber
}
console.log(maxArray(myArray, maxNumber))

console.log()
console.log("3. Crea una función que reciba un string y devuelva el número de vocales que contiene")
myString = "Er Pica de Cadi."

function vocalCount (myString){
    let myCount = 0
    let allVocals = "aeiouAEIOU"
    for (value1 of myString){
        for(value2 of allVocals){
            if(value1 == value2){
                myCount ++
            }
        }
    }return myCount
}

console.log(vocalCount(myString))


console.log()
console.log("4. Crea una función que reciba un array de strings y "
    +"devuelva un nuevo array con las strings en mayúsculas")

myStringsArray = ["Hola", "Adios", "Original", "Yo"]
i = 0
let myUpperArray = []

//console.log(myStringsArray)


function myFunctionStringsArray (myStringsArray){
    for (value of myStringsArray){
        //myUpperArray [i] = myStringsArray.shift()
        myUpperArray[i] = value.toUpperCase()
        //console.log(myStringsArray)
        i++
    }return myUpperArray
}
console.log(myFunctionStringsArray(myStringsArray))

console.log()
console.log("5. Crea una función que reciba un número y devuelva "+
   "true si es primo, y false en caso contrario")
let myNum = 0
i = 0
cousin = false
function myCousin (myNum){
    for (i = 2; i < myNum; i++){
        if (myNum % i == 0){
            cousin = true
        }
    }return cousin
}

myCousin(20)
if (cousin == true){
    console.log("El número es primo")
}else{
    console.log("El número no es primo")
}



console.log()
console.log("6. Crea una función que reciba dos arrays y devuelva "
    +"un nuevo array que contenga los elementos comunes entre ambos")

myArray1 = [2, 5, true, false, "Anto", NaN, "Papi"]
myArray2 = ["Anto", NaN, true, 34, 53, "Bye"]
let mycommonArray =[]


/*// MUY PROFESIONAL:
mycommonArray = myArray1.filter(item => myArray2.includes(item));
console.log(mycommonArray); // [ 'Anto', true ]
*/

function myCommonArrayFunction(myArray1, myArray2){
    let i = 0
    for (value1 of myArray1){
        for(value2 of myArray2){
            if (value1 === value2 || (Number.isNaN(value1) && Number.isNaN(value2))){       // recuerda NaN !== NaN
                mycommonArray.push(value1)
            }
        }
    }return(mycommonArray)
}

console.log(myCommonArrayFunction(myArray1, myArray2))


console.log()
console.log("7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares")
MyNumbersArray = [2, 3, 4, 5, 6, 7, 8]
function pairsSum (MyNumbersArray){
    let pairsArray = MyNumbersArray.filter(oneValue => oneValue % 2 == 0)
    let mySum = 0
    for (oneValue of pairsArray){
        mySum += oneValue
    }return mySum
}

console.log(pairsSum (MyNumbersArray))


console.log()
console.log("8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado")
MyNumbersArray = [2, 3, 4, 5, 6, 7, 8]
function mySquare (MyNumbersArray){
    MySquareNumbersArray = MyNumbersArray.map(oneNum => oneNum**2)
    return MySquareNumbersArray
}

console.log(mySquare (MyNumbersArray))
//console.log(mySquare(MyNumbersArray).join(", ")) // => así fuerzo que salga en una sola línea


console.log()
console.log("9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso")
myStringsArray = "Hola, eL original soy yo. Adios.".split(" ")
let myStringBackwards = []
i = 1
for (let word of myStringsArray){
    //console.log(`la palabra número ${i} es ${word}`)
    i++
    myStringBackwards.unshift(word)
}
console.log(myStringBackwards)


console.log()
console.log("10. Crea una función que calcule el factorial de un número dado")

myNum = 3
let myProduct = 1

for (i = 1; i <= myNum; i++){
    myProduct = myProduct * myNum
    myNum--
}

console.log(myProduct)