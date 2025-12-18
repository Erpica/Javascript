console.log("1. Crea una clase que reciba dos propiedades.")
console.log("2. Añade un método a la clase que utilice las propiedades.")
class ClassTwoProp {
    constructor (prop1, prop2) {
        this.prop1 = prop1
        this.prop2 = prop2
    }

    theMethod () {
        console.log(`I'm using ${this.prop1} and ${this.prop2}`)
    }
    static greet() {
        console.log(`Hello! I'm a static method!`)
    }

}

console.log()
console.log("3. Muestra los valores de las propiedades e invoca a la función.")

myTry = new ClassTwoProp ("theOne", "theTwo")
console.log(myTry.prop1)
console.log(myTry.prop2)

console.log()
console.log("4. Añade un método estático a la primera clase.")
console.log("5. Haz uso del método estático.")
ClassTwoProp.greet()

console.log()
console.log("6. Crea una clase que haga uso de herencia.")
class InheritanceTwoProp extends ClassTwoProp{
    constructor (prop1, prop2, thePropNumberThree){
        super(prop1, prop2)
        this.thePropNumberThree = thePropNumberThree
    }   
}

let myInheritance = new InheritanceTwoProp("propertyNumberOne", "propertyNumberTwo", "propertyNumberThree")
console.log(myInheritance)

console.log()
console.log("7. Crea una clase que haga uso de getters y setters.")
class CarClass {
    constructor (colour, mark, model){
        this.colour = colour
        this.mark = mark
        this.model = model
    }

    getColour (){
        return this.colour
    }

    setColour (colour){
        this.colour = colour
    }

}

let MyNewCar = new CarClass("Rojo", "Audi", "A3")
console.log(MyNewCar)
console.log(MyNewCar.getColour())
MyNewCar.setColour("Blue")
console.log(MyNewCar.getColour())

console.log()
console.log("8. Modifica la clase con getters y setters para que use propiedades privadas.")
console.log("9. Utiliza los get y set y muestra sus valores.")
class CarClassPrivacy {
    #colour
    #mark
    #model
    constructor (colour, mark, model){
        this.#colour = colour
        this.#mark = mark
        this.#model = model
    }

    getColour (){
        return this.#colour
    }

    setColour (colour){
        this.#colour = colour
    }

}

let MyNewCar2 = new CarClassPrivacy("Azul", "Audi", "A3")
console.log(MyNewCar2.getColour())
MyNewCar.setColour("Verde")
console.log(MyNewCar.getColour())

console.log()
console.log("10. Sobrescribe un método de una clase que utilice herencia.")
class InheritanceTwoPropAgain extends InheritanceTwoProp{
    theMethod (){
        console.log ("Esto es otra historia ya")
    }
    
}

let lastOne = new InheritanceTwoPropAgain (1, 2, 3)
lastOne.theMethod()