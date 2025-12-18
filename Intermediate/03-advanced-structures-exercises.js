console.log("")
console.log("1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección")
myArray = [1, 3, 5, 7, 11, 13]
myMap = myArray.map(element => element * element)
console.log(myMap)

myFilter = myArray.filter(element => element % 3 === 0)
console.log(myFilter)

myArray = [1, 3, 5, 7, 11, 13]
const myReduce = myArray.reduce((acumulador, currentValue) => acumulador + " " + currentValue.toString(), "");

console.log(myReduce)

console.log("")
console.log("2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números \"pares\"")
myArrayPow3 = myArray.map(element => element ** 3)
console.log(myArrayPow3)


console.log("")
console.log("3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección")
let myDimensionsArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//console.log(myDimensionsArray)
console.log(myDimensionsArray.flat(1))
//console.log(myDimensionsArray)

myNewFlatMaperArray = myDimensionsArray.flatMap(subArray => subArray.map(element => element - 1))
console.log(myNewFlatMaperArray)

console.log("")
console.log("4. Ordena un array de números de mayor a menor")
let myNumbersArray = [5, 3, 2, 9, 56, 3, 1, 7]
let mySortedArray = myNumbersArray.sort((a, b) => a - b) // Para invertir el órden b - a
console.log(mySortedArray)

console.log("")
console.log("5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos")
let mySetOne = new Set ([2, 3, 3, 4])
let mySetTwo = new Set ([1, 3, 5, 7])

let unionSets = new Set ([...mySetOne, ...mySetTwo])
console.log("Unión: ",  unionSets)

let intersectionSet = new Set ([...mySetOne].filter(element => mySetTwo.has(element)))
console.log("Intersección: ",  intersectionSet)


console.log("Diferencia entre A y B: ", differenceArray = ([...mySetOne].filter(element=> !mySetTwo.has(element))))


console.log("")
console.log("Practicamos filter")

let myNumberArray = [2, 4, 6, 78, 8]
console.log(myNumberArray.filter(element => element>5))


let fruitsArray = ["melocotón", "manzana", "pera"]
// console.log(fruitsArray.filter(element => element.slice(0,1) == "m")) //así lo hago yo sin función
console.log(fruitsArray.filter(element => element.startsWith("m"))) //así lo hago yo con la función startsWith


console.log("")
console.log("6. Itera los resultados del ejercicio anterior")
differenceArray.forEach(element => console.log("Elemento 1: ", element))


console.log("")
console.log("7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos")
let usersMap = new Map([
  [1, new Map([
    ["name", "Anto"],
    ["age", 45],
    ["mail", "AntoPic@gmail.com"]
  ])],
  [2, new Map([
    ["name", "Pic"],
    ["age", 50],
    ["mail", "PicAnto@gmail.com"]
  ])]
])

// 🔹 Recorremos el mapa de usuarios
usersMap.forEach((userDataKey, userIdValue) => {
  console.log(`ID: ${userIdValue}`)
  console.log("Nombre:", userDataKey.get("name"))
  console.log("Edad:", userDataKey.get("age"))
  console.log("Correo:", userDataKey.get("mail"))
  console.log("-------------")
})

console.log("")
console.log("8. Dado el mapa anterior, crea un array con los nombres")
let  arrayNames = []
usersMap.forEach((userIdValue, userDataKey) => arrayNames.push(userIdValue.get("name")))
console.log(arrayNames)



console.log("")
console.log("9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set")
let  arrayMails = []
usersMap.forEach((userIdValue, userDataKey) => {
    if (userIdValue.get("age") > 18) {
        arrayMails.push(userIdValue.get("mail"))
    }
})
console.log(new Set(arrayMails))



console.log("")
console.log("10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario")
/* let usersObjFunctional = Object.fromEntries(
  Array.from(usersMap.entries(), ([key, innerMap]) => {
    // Para cada entrada [key, innerMap]...
    // Devuelve un nuevo par [key, innerObject]
    return [key, Object.fromEntries(innerMap)];
  })
);

console.log(usersObjFunctional); */
let usersObj = {};

// Itera sobre el Map exterior (clave=userId, valor=innerMap)
usersMap.forEach((innerMap, userId) => {
  // Convierte el Map INTERIOR en un objeto
  let innerObj = Object.fromEntries(innerMap);
  
  // Asigna el objeto interior al objeto principal
  usersObj[userId] = innerObj;
});

console.log(usersObj);