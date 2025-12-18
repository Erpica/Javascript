console.log()
console.log("1. Crea un objeto con 3 propiedades")
let myObject = {
    colur: "Blue",
    name: "Ball", 
    size: 12
}

console.log()
console.log("2. Accede y muestra su valor")
console.log(myObject)
for (let key in myObject){
    console.log(`La clave ${key} es: ${myObject[key]}`)
}

console.log()
console.log("3. Agrega una nueva propiedad")
myObject.date = "22/09/2025"
console.log(myObject.date)

console.log()
console.log("4. Elimina una de las 3 primeras propiedades")
delete (myObject.size)
console.log(myObject)
for (let key in myObject){
    console.log(`La clave ${key} es: ${myObject[key]}`)
}

console.log()
console.log("5. Agrega una función e invócala")
myObject = {
    colur: "Blue",
    name: "Ball", 
    size: 12,
    jump (){
        console.log(`My ojbect ${this.name} jump`)
    }
}

myObject.jump()

console.log()
console.log("6. Itera las propiedades del objeto")
for (let properties in myObject){
    console.log(properties + ": " + myObject[properties])
}

console.log()
console.log("7. Crea un objeto anidado")

let myNestedObject = {
    objectName: "car",
    ObjectColour: "Blue",
    myObjectWeel : {
        objectWeelName: "Weel",
        objectWeelSize: 56
    }
}

console.log()
console.log("8. Accede y muestra el valor de las propiedades anidadas")
console.log(myNestedObject.myObjectWeel.objectWeelName + " " + myNestedObject.myObjectWeel.objectWeelSize)



console.log()
console.log("9. Comprueba si los dos objetos creados son iguales")

console.log(JSON.stringify(myObject) === JSON.stringify(myNestedObject)); // true



console.log()
console.log("10. Comprueba si dos propiedades diferentes son iguales")
let arrayProperties = []
let i = 0
let arrayProperties2 = []

for (valueMyObject in myObject){
    arrayProperties.push (myObject[valueMyObject])
}

console.log(arrayProperties)

for (valueMyNesObject in myObject){
    arrayProperties.push (myObject[valueMyObject])
}