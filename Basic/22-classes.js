// las clases son objetos complejos. Para crear plantillas de objetos. Creamos la estructura pero sin valores.
// Los valores los introducimos al crear la instancia



class Person {
    constructor(name, age, alias){
        this.name = name  // como buena práctica, al nombre del parámetro (name) se asigna a una propiedad con el mismo nombre
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Anto", 44, "Er_Pica") // IMPORTANTE EL NEW
let person2 = new Person("Anto", 44, "Er_Pica")

console.log(person)
console.log(person2)
console.log(typeof person)  // todo lo que no es un tipo de dato primitivo es un OBJETO

// valores por defecto

class DefaultPerson {
    constructor(name = "Nombre por defecto", age, alias = "Sin alias"){
        this.name = name  // como buena práctica, al nombre del parámetro (name) se asigna a una propiedad con el mismo nombre
        this.age = age
        this.alias = alias
    }    
}

let person3 = new DefaultPerson("Anto", 44)
console.log(person3)
console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Er_Pica"
console.log(person3.alias)

// funciones en clases
class PersonaConMetodo {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
        andar(){
            console.log("Ya anda")
        }
}

let person4 = new PersonaConMetodo("Antonio", 44, "Pikaxo")
person4.andar()


// propiedades privadas

class PrivatePerson {
    #bank               // será una propiedad privada
    constructor (name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Brais", 37, "Mouredev", "IBAN123456")

console.log(person5.bank)       // No se puede acceder porque es privada: ni para verla ni para editarla


// getters y setters
console.log("--- getters y setters---")

class GetSetPerson{
    #name
    #age
    #alias
    #bank
    constructor (name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){                 // hay que crear un get para obetener una propiedad privada
        return this.#name
    }
    set bank(newBank){          // hay que crear un set para cambiar una propiedad privada
        this.#bank = newBank
    }
}

person6 = new GetSetPerson("Anto", 44, "Pica", "IBAN123456")
console.log(person6.name)

person6.bank = "new IBAN123456"

console.log("--- herencia---")

class Animal{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Emite sonido")
    }
}

class Dog extends Animal{
    sound(){
        console.log("Guau!")
    }
    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El animal nada")
    }
}

let myDog = new Dog("PicaDog")
myDog.run()
myDog.sound()

let myFish = new Fish("PicaFish", 10)
myFish.swim()
myFish.sound()


//Métodos estáticos
console.log("--- Métodos estáticos ---")
class MathOperations{
    static sum(a,b){
        return a + b
    }
}

//let myClass = new MathOperations()
//console.log(myClass.sum(5, 10)) // da error porque al ser estático el método (o la función) no es necesario instanciarla
console.log(MathOperations.sum(5,10))