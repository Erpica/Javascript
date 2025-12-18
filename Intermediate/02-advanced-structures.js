// Estructuras avanzadas
// Arrays avanzados
// Métodos

// forEach: ejecutar un código para cada uno de los elementos
myArray = [1, 2, 3, 4, 5, 6]
myArray.forEach (element => console.log(element))

// map: aplica una función a cada elemento del array. Así creamos un nuevo array
let myDoubleArray = myArray.map(element => element * 2)
console.log(myDoubleArray)

// filter: También crea un nuevo array con la condición que apliquemos
let evens = myArray.filter (element => element % 2 === 0)
console.log(evens)

// reduce: 
let sum = myArray.reduce((previus, current) => previus + current)
console.log(sum)

sum = myArray.reduce((result, current) => result + current, 0)  // otra forma de decir lo de arriba
console.log(sum)

sum = myArray.reduce((previus, current) => previus + 5) // empieza ya por 5
console.log(sum)

// MANIPULACIÓN
// flat 

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap
let phrases = ["Hola mundo", "Adios mundo"]
let words = phrases.flatMap(phrases => phrases.split(" "))
console.log(words)


// Ordenación
let unsorted = [3, 4, 1, 6, 10]
//let unsorted = ["a", "d", "c", "b"] // lo haría bien
let sorted = unsorted.sort((a, b) => a - b) // como que le doy una pista para que ordene
console.log(sorted)

sorted.reverse()    // cambia el array
console.log(sorted)

// Búsqueda
console.log(sorted.includes(4))
console.log(sorted.includes(5))

let firtsEven = sorted.find(element => element % 2 === 0)
console.log(firtsEven) // si no lo encuentra devuelve undefined

// find index
firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex) // devuelve -1 si no lo encuentra

// Sets avanzados
// Eliminar duplicados 
let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
//const numbersSet = new Set(numbersArray)      // ...y hecho mejor:
numbersArray = new Set([...numbersArray])
console.log(numbersArray)

// Unión de dos conjuntos:
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección de dos conjuntos:
const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion)

// Diferencia: los que están en el A pero no están en el B
const difference = new Set ([...setA].filter(element => !setB.has(element)))
console.log("Diferencia: " , difference)

// Conversión:
console.log([...setA])

// ITERACIÓN
setA.forEach(element => console.log(element))

// Maps avanzados
let myMap = new Map([
    ["name", "Pica"],
    ["edad", 45]
])

console.log(myMap)

myMap.forEach((value, key) => console.log(`${key}: ${value}`))
// Mapa a array
const arrayFromMap = Array.from(myMap)

// Mapa a objeto (diccionario)
const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a mapa
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)