console.log("")
console.log("1. Crea un array que almacene cinco animales.")
let myArray = ["perro", "gato", "pez"]
console.log(myArray)

console.log("")
console.log("2. Añade dos más. Uno al principio y otro al final.")
myArray.unshift("serpiente")
myArray.push("loro")
console.log(myArray)

console.log("")
console.log("3. Elimina el que se encuentra en tercera posición.")
myArray.splice(2,1)
console.log(myArray)

console.log("")
console.log("4. Crea un set que almacene cinco libros.")
let mySet = new Set (["El quijote", "El método", "Fray Perico y su borrico"])
console.log(mySet)

console.log("")
console.log("5. Añade dos más. Uno de ellos repetido.")
mySet.add("no repe").add("El método")
console.log(mySet)

console.log("")
console.log("6. Elimina uno concreto a tu elección.")
mySet.delete("no repe")
console.log(mySet)

console.log("")
console.log("7. Crea un mapa que asocie el número del mes a su nombre.")
let myMap = new Map ([
    ["1", "enero"],
    ["2", "febrero"],
    ["3", "marzo"],
    ["4", "abril"],
    ["5", "mayo"],
    ["6", "junio"],
    ["7", "julio"],
    ["8", "agosto"],
    ["9", "septiembre"],
    ["10", "octubre"],
    ["11", "noviembre"],
    ["12", "diciembre"]
])
console.log(myMap.get("2"))

console.log("")
console.log("8. Comprueba si el mes número 5 existe en el map e imprime su valor.")
if (console.log(myMap.has("5"))){
    console.log(myMap.get("5"))
} // no funciona porque console.log(true) imprime true en consola, pero devuelve undefined.

if (myMap.has("5")){
    console.log(myMap.get("5"))
}

console.log("")
console.log("9. Añade al mapa una clave con un array que almacene los meses de verano.")
myMap.set("sumerMonths", "junio, julio, agosto, septiembre")
console.log(myMap)

console.log("")
console.log("10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.")
myArray = [1, 2, 3]
console.log(myArray)
console.log(Array.isArray(myArray))

mySet = new Set(myArray)
console.log(mySet)
myMap = new Map()
myMap.set("números", mySet)
console.log(myMap)
console.log(myMap.get("números"))


