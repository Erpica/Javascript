let mySet = new Set()

console.log(mySet)
mySet = new Set(["Anto", "Pic", "Best", 44,true])
console.log(mySet)

mySet.add("Ato@pica.pic")
console.log(mySet)

mySet.delete("Best")    //le tengo que meter el valor del elemento que quiere borrar. no funciona con índices
console.log(mySet)

console.log(mySet.has("Anto"))
console.log(mySet.has("Pica"))

console.log(mySet.size)

let myArray = Array.from(mySet) // Convertir set en un array
console.log(myArray)

mySet = new Set(myArray) // Convertir array en un set
console.log(mySet)

mySet.add("Anto")   // no me lo añade porque no admite duplicados
console.log(mySet)


// https://www.twitch.tv/videos/2200149072?filter=archives&sort=time
// voy por la clase 4