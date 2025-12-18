
let myArray = [1, 2, 3, 4]

let person = {
    name: "Anto",
    age: 45,
    alias: "Er Pica"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// desestructuración

// sitaxis arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)


// sitaxis arrays con valores predeterminados
let[myValue5, myValue6, myValue7, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// ignorar elementos del array
let[myValue10, , , myValue14] = myArray
console.log(myValue10)
console.log(myValue14)

// sitaxis objects
let {name, age, alias} = person
console.log(name)
console.log(alias)
console.log(age)

// sitaxis objects con valores predeterminados
let {name2, age2, alias2, email = "erpica@gmail.com"} = person
console.log(name2) // no existe
console.log(age2) // no existe
console.log(alias2) // no existe
console.log(email) 

// sitaxis objects con nuevos nombres de variables
let {name: name3, age: age3, alias: alias3} = person
console.log(name3) // no existe
console.log(age3) // no existe
console.log(alias3) // no existe

// desusturacion con objetos anidados

let person3 = {
    name: "Anto",
    age: 45,
    alias: "Er Pica",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 10,
        work: function(){
        console.log("La persona trabaja")
        },
    }
}

let {name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)

// Propagación (spreading) Algo como "lo contratrio"
let myArray2 = [...myArray]
let myArray3 = [...myArray, 5, 6]

console.log(myArray2)
console.log(myArray3)

myArray2 = myArray3 // no copia el array

//combinaciíon de arrays
let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// sintaxis objects



console.log()
console.log("-------------> person: ")
console.log(person)
console.log()
console.log("-------------> person3: ")
console.log(person3)

console.log()
console.log("-------------> añado mail: ")
let person4 = {...person, email: "erpica@gmail.com"}
console.log(person4)