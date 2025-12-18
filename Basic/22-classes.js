class Person {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person ("Anto", 45, "Erpica")
let person2 = new Person ("Anto", 45, "Erpica")

console.log(person)
console.log(person2)

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson ()
console.log(person3)

//Acceso a propiedades
console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Erpica"
console.log(person3.alias)


// Funciones de clases:
class PersonWithMethod {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina")
    }
}

let person4 = new PersonWithMethod("Anto", 45, "Erpica")
person4.walk()


// Propiedades privadas
class PrivatePerson {
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Anto", 45, "Erpica", "IBAN123456789")

console.log(person5.bank) // no podemos acceder


// Getters t Setters
class GetSetPerson {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name() {
        return this.#name
    }

    set bank(newBank) {
        this.#bank = newBank
    }
}

person6 = new GetSetPerson("Anto", 45, "Erpica", "IBAN123456789")
console.log(person6)
console.log(person6.name)

// Herencia
class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Emite un sonido genérico")
    }
}

class Dog extends Animal {

    sound () {                  // SOBREESCRIBO EL SOUND DE LA CLASE PADRE
        // super.sound()         // si lo dejo así, hace lo que hacía el padre, es como si no hiciera nada
        console.log("Guau")
    }

    run() {
        console.log("El perro corre")
    }
}

let myDog = new Dog("PicaDog")
myDog.run()
myDog.sound()

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }
}

let myFish = new Fish("PicaFish", 10)
myFish.swim()
myFish.sound()


// Métodos estáticos:
class MathOperations {
    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))