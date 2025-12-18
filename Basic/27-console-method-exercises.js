// 1. Crea un función que utilice error correctamente.
function myErrorFunc (){
    console.error("Se ha producido un error:", Error)
}

myErrorFunc()

// 2. Crea una función que utilice warn correctamente.
function myWarnFunc (){
    console.error("Se ha producido una advertencia")
}

myWarnFunc()

// 3. Crea una función que utilice info correctamente.
function myInfoFunc (){
    console.info("Se ha producido una info.")
}

myInfoFunc()

// 4. Utiliza table.
myDataTable = [
    {name: "Anto", age: 45},
    {name: "Pic", age: 55},
    {location: "Pic", city: 55}
]
console.table(myDataTable)

// 5. Utiliza group.
console.group("firstGroup")
console.log("Hola")
console.log("Bienvenido a ")
console.log("mi grupo")

// 6. Utiliza time.
console.time("Aquí empezó todo")
for (let i = 0; i < 10000; i++){

}

console.timeEnd("Aquí empezó todo")
// 7. Valida con assert si un número es positivo.

let myNum = -3
console.assert(myNum>0, "El número no es positivo")

// 8. Utiliza count.
console.count("Flag")
console.count("Flag")
console.count("Flag")

console.countReset("Flag")

console.count("Flag")

// 9. Utiliza trace.
let a = 0

for (i = 0; i < 10; i++){
    a+=2
    console.trace("Seguimiento")
}



// 10. Utiliza clear.

//console.clear()