// Todo lo que no son datos primitivos son objetos
// Coleccion de datos relacionados del tipo clave valor y también funcionalidades
/*
// Sintaxis:
let person = {
    name: "Anto", 
    edad: 44,
    alias: "Er_Pica"
}

// Acceso a las propiedades
// Notacion por punto
console.log(person.name)
//Notación de corchetes
console.log(person["name"])

//Modificación:
person.name = "Antonio"
console.log(person.name)
console.log(typeof person.edad)
person.edad = "37"
console.log(typeof person.edad)

//Eliminación / adición de propiedades
delete person.edad
console.log(person)
person.email = "pica@pica.pic"
console.log(person)

//Métodos (funciones)
let person2 = {
    name: "Anto", 
    edad: 44,
    alias: "Er_Pica",
    walking: function(){
        console.log("Andando")
    }
}

person2.walking()


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
            console.log("Trabajando")
        }
    }
}
console.log(person3)

console.log(person3.name)
console.log(person3.job.name)
*/
//Igualdad de objects

let person = {
    name: "Anto", 
    edad: 44,
    alias: "Er_Pica"
}

let person2 = {
    name: "Anto", 
    edad: 44,
    alias: "Er_Pica"
}

console.log(person)
console.log(person2)
//propiedades por valor o por referencia (referente al sitio en memoria no al valor que tiene dentro, por eso da falso)
// Para compararlos habría que comparar propiedad a propiedad
console.log(person === person2)
console.log(person.name === person2.name)
console.log("----")

// Iteración
for (let clave in person){
    console.log(clave + ": "+ person[clave])
}
console.log("----")

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
            console.log(`El trabajo es: ${this.name}`)
        }
    }
}

//Para acceder a los métodos se usa this(si no te va a poner undefined0)
person3.job.trabajo()

//funciones como objetos
function Person(name, age){ // deberia ser una clase, no se hace así (aunque funciona...)
    this.name = name
    this.age = age
}

let person5 = new Person("Anto", 37)
console.log(person5)
console.log(typeof person5)