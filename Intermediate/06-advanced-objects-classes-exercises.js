console.log()
console.log("1. Agregega una función al prototipo de un objeto")
let myObject =  {
  name: "Objeto de Pic",
  size: 32
};


Object.getPrototypeOf(myObject).sayHello = function() {
  console.log(`Hola, soy ${this.name}`);
};

myObject.sayHello(); // "Hola, soy Objeto"

console.log()
console.log("2. Crea un objeto que herede de otro")
coche = {
    marca: "Peugeot",
    color: "rojo",
    tamaño: 2000
}

//console.log(typeof coche)
let camion = Object.create(coche)
console.log(camion.color)

console.log()
console.log("3. Define un método de instancia en un objeto")
coche.arrancar = function(){
    console.log(`El coche ${this.marca} ha sido arrancado.`)
}

coche.arrancar()

console.log()
console.log("4. Haz uso de get y set en un objeto")
//moto = Object.create(coche)
moto = {
  color: "Verde",
  ruedas: 2, 
  get info (){
    console.log(`Mi moto es de color ${this.color} y tiene ${this.ruedas} ruedas.`)
  },
  set aniadir (color){  // 
    this.color = color
  }
}

moto.info
moto.color = "Rojo"
moto.info


console.log()
console.log("5. Utiliza la operación assign en un objeto")
chasis = {
  longitud: 2,
  ancho: 1
}

miCoche = {
  ruedas: 4
}

miVehiculo = Object.assign(chasis, miCoche)
console.log(miVehiculo)



console.log()
console.log("6. Crea una clase abstracta")
class Figura {
  constructor(name){
    this.name = name
    if (new.target === Figura){
      throw new Error ("No se puede instanciar directamente la clase.")
    }
  }
}

// cuadrado = new Figura // Error: No se puede instanciar directamente la clase.
class Cuadrado{
  calcularArea(lado){
    return lado **2
  }
}

cuadrado =  new Cuadrado
console.log(cuadrado.calcularArea(3))

console.log()
console.log("7. Utiliza polimorfismo en dos clases diferentes")
class Employee {
  constructor(name) {
    this.name = name
  }
  whatAreUDoing (){
    console.log("Im working")
  }
}

class Informatic extends Employee{
  whatAreUDoing (){
    console.log("Im working in a PC")
  }  
}

class accountingAssistan extends Employee{
  whatAreUDoing (){
    console.log("Im counting")
  }  
}

employeeOfTheMonth = new Employee ("Anto")
employeeOfTheMonth.whatAreUDoing()
employeeOfTheDay = new Informatic ("Pic")
employeeOfTheDay.whatAreUDoing()
employeeOfTheWeek = new accountingAssistan ("Pikaxo")
employeeOfTheWeek.whatAreUDoing()

console.log()
console.log("8. Implementa un Mixin")

const mixingProg = {
  program() {
    console.log(`Yo programo ${this.name}`)
  }
}

class JSProgrammer {
  constructor(name){
    this.name = name
  }
}

class PyProgrammer {
  constructor(name){
    this.name = name
  }
}

Object.assign(JSProgrammer.prototype, mixingProg)
let jsprogrammer = new JSProgrammer("Javascript")
Object.assign(PyProgrammer.prototype, mixingProg)
let pyprogrammer = new PyProgrammer("Python")
jsprogrammer.program()
pyprogrammer.program()

console.log("")
console.log("9. Crea un Singleton")
class Married {
  constructor (yesOrNot) {
    if (Married.instanced){
      return Married.instanced
    }
    this.yesOrNot = yesOrNot
    Married.instanced = this
  }
}

married = new Married("yes")
console.log(married)
married2 = new Married("no")
console.log(married)

console.log("")
console.log("10. Desarrolla un Proxy")

