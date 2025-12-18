
let myArray = [1, 2, 3, 4]

let person = {
    name: "Anto", 
    edad: 44,
    alias: "Er_Pica",
    mail: "erpica@erpica.pic"
}



myValue = myArray[1]
console.log(myArray)

// Desestructuración: Capacidad de extraer valores y asignarlos a variables de manera concisa
//Sintaxis en arrays:
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//Sintaxis arrays con valores predeterminados
let [myValue5, myValue6, myValue7, myValue8=0, myValue9=0] = myArray 
// hemos creado dos nuevas variables y le hemos dicho que tengan un valor por defecto, en caso de que no lo tenga ya
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log("----")
let [myValue10, , , myValue13] = myArray // solo quiero poner valor a alguna de las variables (en este caso primera y última)
console.log(myValue10)
console.log(myValue13)


//Sintaxis objetos
console.log("---- objetos ----")
let {name, edad, alias} = person // se ponen llaves porque es un objeto
console.log(name)
console.log(edad)
console.log(alias)

console.log("----")
//Sintaxis objetos con valores predeterminados (SE TIENE QUE PONER LA CLAVE LITERALMENTE, SI NO: UNDEFINED, POR EJ name2, edad2)
/*
let {name2, edad2, alias2, mail = "email@email.com"} = person
console.log(name2)
console.log(edad2)
console.log(alias2)
console.log(mail)
*/

// sintaxis objetos pero no con nuevos nombres de variable
let {name: name3, edad: edad3, alias: alias3} = person // se ponen llaves porque es un objeto
console.log(name3)
console.log(edad3)
console.log(alias3)

console.log("----")

// con objetos anidados:
let person3 = {
    name: "Anto", 
    edad: 44,
    alias: "Er_Pica",
    walking: function(){
        console.log("Andando")
    },
    job: {
        name: "programador",
        experiencia: "15",
        trabajo: function(){
            console.log(`El trabajo es: ${this.name}`)//para hacer referencia hay que llamar al obj con this
        }
    }
}

let {name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)

// sprearing o propagación (...)
//expande elementos de una array o de un ojeto a otros arrays o a otros objetos
// sintaxis array
console.log("--- sprearing ---")
let myArray2 = [...myArray]         // PARA COPIAR
let myArray3 = [...myArray, 5, 6]   // PARA COPIAR Y AÑADIR
console.log(myArray2)
console.log(myArray3)

let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// objetos
console.log("--- sprearing con objetos ---")    // ejemplo de añadir
let persona4 = {...person, tfno: 600000000}
console.log(persona4)