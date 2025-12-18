// Objetos avanazados

// Prototipos y Herencia

// Prototipos
// solo existen en funciones o clases de manera direta. Con Objetos hay que usar getPrototypeOf

let person = {
    name: "Pica",
    age: 45,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function (){
    console.log(`Tengo ${this.age} años`)
}


person.sayAge()
console.log(person)

console.log("\n")
console.log("------")
// Herencia (basada en prototipos)
console.log("Herencia")
let programmer = Object.create(person)          // importante crear con Object.create(objetoDelQueHeredo)
programmer.languaje = "Javascript"

console.log(programmer)
programmer.greet()
programmer.sayAge()

// console.log(person.languaje) // Undefined porque no retorna nada a console.log()
// console.log(person.languaje) // Undefined: persona no tiene lenguaje
console.log(programmer.languaje)

// Métodos estáticos y de instancia

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){                    // Antes de las clases, especificación 6
    console.log(`Hola, soy ${this.name}`)
}

let new_person = new Person ("Anto", 45)
new_person.greet()


// Métodos avanzados
// assign: Unir dos objetos en uno

console.log()
console.log("Assign")
let person_core = {name: "Pica"}
let person_details = {age: 45, alias: "ErPica"}

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson)

console.log()
console.log("keys, values, entries")
console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))