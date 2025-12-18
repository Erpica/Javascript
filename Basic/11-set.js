let mySet = new Set()

mySet = new Set()

console.log(mySet)

mySet = new Set(["Anto", "ErPica", "DePica", 45])

console.log(mySet)

mySet.add("https:/Erpica.es")
mySet.add("https:/Erpica.es")       // No hace caso porque ya existe
console.log(mySet)
console.log(mySet.delete("DePica")) // devuelve true si lo encuentra y lo borra
console.log(mySet)

console.log(mySet.has("ErPica"))
console.log(mySet.size)

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

