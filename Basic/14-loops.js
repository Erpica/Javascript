// Al utilizar el signo de acento en lugar de la doble comilla puedo meter una variable con ${variable}

// for (let i = 0; i < 5; i++){
//     console.log(`Hola ${i}`)
// }

// const numeros = [1, 2, 3, 4, 5]

// for (let i = 0; i < numeros.length; i++){
//     console.log(`Elemento: ${numeros[i]}`)
// }


// while(i < 5){ }
// do{} while()

// for of

// BUENAS PRÁCTICAS: break y continue

 for (let i = 0; i < 7; i++){ // si no quiero que haga el bucle en el 5:
    if (i==2){
        continue
    } else if (i==5){       // si quiero que pare llegado un valor concreto
        break
    }
     console.log(`Hola ${i}`)
 }




myArray = [1, 2, 3, 4]
mySet = new Set(["Anto", "Pic", "Best", 44,true])
myMap = new Map([
    ["Nombre", "Anto"],
    ["email", "Anto@pic.es"],
    ["Age", "44"]
])
let myString = "Hola Javascript!"

// for of
for (let valor of myArray){
    console.log(valor)
}

for (let valor of mySet){
    console.log(valor)
}

for (let valor of myMap){
    console.log(valor)
}

for (let valor of myString){
    console.log(valor)
}