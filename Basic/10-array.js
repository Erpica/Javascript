let myArray = [] // Recomendado
let myArray2 = new Array()

// Métodos comunes
myArray.push("Anto")        // Va añadiendo elementos
myArray.push("ErPica")
myArray.push("picadev")

console.log(myArray)

myArray.pop()               // Elimina el último elemento Y LO DEVUELVE
console.log(myArray.pop())  // por eso puedo imprimirlo

console.log(myArray)
myArray = ["Anto", "ErPica", "picadev"]
// shift y unshift

console.log(myArray.shift())
console.log(myArray.shift())
console.log(myArray)
myArray.unshift("Anto", "ErPica")
console.log(myArray)

console.log(myArray.length)

// PAra borrarlo lo vuelvo a inicializar
//myArray = []

myArray.push(37) 
console.log(myArray)

// slice
let myNewArray = myArray.slice(1,2)
console.log(myArray)
console.log(myNewArray)


//splice
myArray.splice(1,2)     // Le quito desde el 1, dos elementos
console.log(myArray)

myArray.splice(1, 2, "Nuevo elemento") // desde el 1 quito dos y, en su lugar meto un elemento nuevo.
console.log(myArray)