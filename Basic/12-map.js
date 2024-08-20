//let myMap = new Map() // no funciona


myMap = new Map([
    ["Nombre", "Anto"],
    ["email", "Anto@pic.es"],
    ["Age", "44"]
])


console.log(myMap)
// no puede haber repetidos en la clave. Sí en los valores
// Operaciones: 
// set para editar o añadir
// get: obtener valor dandole la clave
//has para ver si tiene la clave
//delete y clear para borrarlo entero
// keys: nos devuelve el listado de las claves
// values: nos devuelve el listado de los valores

myMap.set("Alias","Pic")
myMap.set("Alias","Er_pica")
console.log(myMap)

console.log()
console.log("Para imprimir las entradas:")
console.log()

console.log(myMap.entries())

console.log(myMap.get("Alias"))

//has para ver si tiene la clave
console.log(myMap.has("alias"))
console.log(myMap.has("Alias"))

myMap.delete("email")
console.log(myMap)

myMap.clear("email")
console.log(myMap)

console.log(myMap.size)