let myArray = []
let myArray2 = new Array() // no se aconseja

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3) // no se aconseja

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4) // no se aconseja

console.log(myArray)
console.log(myArray2)

// Métodos comunes: push (agrega al final) y pop (quita el último y lo devuelve)
// también shift (elimina el primer elemento del array y lo devuelve) y unshift
// legnth
myArray = []
myArray.push("Anto")
myArray.push("Pic")
myArray.push("Best")
myArray.push(44)

console.log(myArray)

myArray.pop()

console.log(myArray)
//
console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Anto", "anto")
console.log(myArray)

myArray.length = 0  // así se puede inicializar un array pero no se aconseja
console.log(myArray)

//myArray.push()
//myArray.slice

myArray = []
myArray.push("Anto")
myArray.push("Pic")
myArray.push("Best")
myArray.push(44)
console.log(myArray)

let myNewArray = myArray.slice(1,3) // cógeme los elementos entre el 1 (incluido) y el 3 (excluido)
console.log(myArray)
console.log(myNewArray)

myArray.splice(1,3) 
console.log(myArray)

myArray = ["Anto", "Pic", "Best", 44]
console.log(myArray)
myArray.splice(1,2,"Nueva entrada") // me cargo, desde el sitio 1, dos cosas. Añado un elemento que se llama "nueva entrada"
console.log(myArray)