console.log()
console.log("1. Usa desestructuración para extraer los dos primeros elementos de un array.")
let myArray = [1, 2, 3]
let [elem1, elem2, elem3] = myArray

console.log(elem1)
console.log(elem2)
console.log(elem3)

console.log()
console.log("2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.")
let [elem4, elem5, elem6, elem7 = "ya"] = myArray
console.log(elem7)

console.log()
console.log("3. Usa desestructuración para extraer dos propiedades de un objeto.")
let myObject = {
    name: "nameObject",
    type: "typeObject"
}
let {name, type} = myObject
console.log(name)
console.log(type)

console.log()
console.log("4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes.")
let {name: myName, type: myType} = myObject
console.log(myName)
console.log(myType)

console.log()
console.log("5. Usa desestructuración para extraer dos propiedades de un objeto anidado.")
let myNestObject = {
    name: "myPerfectObject",
    type: "anOtherObject",
    theFunction (){
        console.log("I´m the function")
    },
    myIntoObject: {
        intoName: "Erpica",
        intoMail: "erpica@gmail.com",
        intoFunction (){
            console.log("Erpica function")
        }
    }
}

let {myVar1 = name, myVar2 = myNestObject.myIntoObject.intoName} = myNestObject
console.log(myVar1)
console.log(myVar2)



console.log()
console.log("6. Usa propagación para combinar dos arrays en uno nuevo.")
myArray = [1, 3, 5]
myArray2 = [2, 4, 6]

myArray3 = [...myArray, ...myArray2]
console.log(myArray3)

console.log()
console.log("7. Usa propagación para crear una copia de un array.")
let myArray4 = [...myArray2]
console.log(myArray4)

console.log()
console.log("8. Usa propagación para combinar dos objetos en uno nuevo.")
console.log()
console.log("myObject:")
console.log(myObject)
console.log()
console.log("myNestObject:")
console.log(myNestObject)
mySuperObject = {...myNestObject, ...myObject}
console.log()
console.log("mySuperObject:")
console.log(mySuperObject)

console.log()
console.log("9. Usa propagación para crear una copia de un objeto.")
let myLastObject = {...myObject}
console.log(myLastObject)

console.log()
console.log("10. Combina desestructuración y propagación.")
let numbers = [100, 200, 300, 400, 500]
let [num1, num2, ...rest] = numbers
console.log(num1)
console.log(num2)
console.log(rest)