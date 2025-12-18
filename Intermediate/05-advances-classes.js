// Clases avanzadas

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Anto", 45)
console.log(person)
person.greet()

person.sayAge = function (){
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()

// Clases abstractas: no se puede instanciar directamente
class Animal {
    constructor(name){
        this.name = name    
        if(new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
    }
    makesound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

//Daría error:
//const animal = new Animal("Mou")
//console.log(animal)

// Polimorfismo: Métodos con el mismo nombre y dos comportamientos distintos.
class Cat extends Animal{
    makesound(){
        console.log("Miau")
    }
}

class Dog extends Animal{
        makesound(){
        console.log("Guau")
    }
}

const cat = new Cat("PiCat")
console.log(cat)
cat.makesound()

const dog = new Dog("DogPi")
console.log(dog)
dog.makesound()

// Mixins: Técnica para compartir funcionalidad entre distintas clases sin usar herencia
const FlyMixin = {
    fly(){
        console.log(`${this.name} Está volando`)
    }
}

class Bird extends Animal{ }
class Dragon extends Animal{ }

Object.assign(Bird.prototype, FlyMixin)     // 
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("PicaBird")
console.log(bird.name)
bird.fly()
const dragon = new Dragon("PicaDragon")
console.log(dragon.name)
dragon.fly()

console.log()
console.log("Patron Singleton")

class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance     // Con este if, una vez que se crea una instancia siempre la devuelve, nunca crea una nueva instancia
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Pica")
const session2 = new Session("hola") // No hace nada por el if de la clase
console.log(session1.name)
console.log(session2.name)


// LO SIGUIENTE NO SE USA, PARA PROPIEDADES PRIVADAS #
// Symbol - tipo de dato primitivo desde la especificación 6 
const ID = Symbol("id")

class User {
    constructor(name){
        this.name = name
        this[ID] = Math.random()
    }
    getId(){
        return this[ID]
    }
}

const user = new User("Anto")
console.log(user[ID])
// user[ID] = 12345 // si conozco el nombre del symbol sí lo puedo cambiar
user.getId()


// instanceof
class Car{}
const car = new Car()
console.log(car instanceof Car)

// Create: Otra forma de crear un coche en base al prototipo
const anotherCar =Object.create(Car.prototype)
console.log(anotherCar instanceof Car)

console.log()
console.log("-------")
console.log("Proxy:")
console.log()

const proxy = {                 // aquí dentro el target es el objeto real
    get(target, property){
        //console.log(target)   // BankAccount { balance: 100 }
        //console.log(property) // balance
        console.log(`Se accede a la propiedad ${property}`)
        return (target[property])
    }, 
    set(target, property, value){
        if (property === "balance" && value < 0){
            throw new Error ("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy (new BankAccount(100), proxy)     // target: new BankAccount(100), handler: proxy (la función que creé previamente)
console.log(account.balance)

// account.balance = -50 // El error que yo tenía preparado
account.balance = 50
console.log(account.balance)