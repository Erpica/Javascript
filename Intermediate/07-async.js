// Programación asíncrona
// Código síncrono
console.log("Inicio")

for (let i=0; i<=100000000; i++){}

console.log("Fin")

// Event Loop (bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Operaciones asíncronas: Web APIs (APIs del navegador) o Node.js: setTimeout()...
// 3. Task Queue (Cola de tareas) y MicrotaskQueue

// Flujo del Event Loop:
// 1. Call Stack
// 2. ¿Operaciones asíncronas? -> las delega a Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o MicrotaskQueue
// 4. Si Call Stack está vacío -> mueve las tareas de las Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// - Callbacks: Función que se pasa como argumento a otra función y se ejecuta cuando la operación ha finalizado
console.log("Inicio")

setTimeout(()=>{
    console.log("Esto se ejecuta después de dos segundos")
}, 2000)

console.log("Fin")

// - Problema Callback Hell
function step1(callback){
    setTimeout(() => {
    console.log("Paso 1 completado")
    callback()
    }, 1000)
} 

function step2(callback){
    setTimeout(() => {
    console.log("Paso 2 completado")
    callback()
    }, 1000)
} 

function step3(callback){
    setTimeout(() => {
    console.log("Paso 3 completado")
    callback()
    }, 1000)
} 

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
    
})

// - Promesas
// Estado inicial pendiente. Puede que acabe respondiendo, de un error o nunca responda

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if (ok){
            resolve("Operación exitosa")
        }else{
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result =>{
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
/*  .finally(() =>{

    }) */


    console.log("Fin del programa")     //Mucho antes que las asíncronas

    // Encadenar promesas

function step1Promise(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
} 

function step2Promise(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
} 

function step3Promise(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
} 

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })


// PROMESAS BY GPT:
const promiseGpt = new Promise((resolve, reject) => {
  // operación asíncrona
  let todoBien = true
  if (todoBien) {
    console.log("De momento todo ok...")
    resolve("Everything all rigth")   // cuando todo va bien
  } else {
    reject("Something wrong")    // cuando hay un fallo
  }
})

promiseGpt
    .then((resultado) => {console.log(resultado)})
    .catch((error) => {console.log(error)})


// - Async/Await

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process(){
    console.log("Inicio del proceso")
    await wait(5000)
    console.log("Proceso después de cinco segundos")
    await wait(1000)
    console.log("Proceso después de un segundo")
    await wait(2000)
    console.log("Proceso después de dos segundos")
    console.log("Fin del proceso")
}

process()

// ####################################

console.log(`Más pruebas y prácticas
    Tema que ha dado un poco la lata. Resumen y tips de callbacks:
callback: Función B se pasa como argumento a A. Cuando A termina de hacer cosas, ella misma llama a la B y termina las tareas

- Ejemplo: 
Función A que recibe un nombre y una función (puede imprimir: "Preparando el saludo"). Solo usa el nombre para pasarlo a B.
Función B que recibe un nombre e imprime el saludo
Llamo a la función A con el nombre y la función B   


    `)

function sum(a, b){
    console.log(a + b)
}

function dameResultado(a, b, calback){
    calback(a, b)
}

dameResultado(3, 4, sum)

console.log(`
 1. Crea una función para saludar que reciba un nombre y un callback.
El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".`)

function saludar (nombre, callback){
    console.log("Te voy a saludar")
    setTimeout(() => {callback(nombre)}, 2000)
}

function holaPic (nombre){
    console.log(`Hola ${nombre}`)
}

saludar("Pic", holaPic)

// Más prácticas callback
// Con =>
function elSaludo(callback){
    console.log("primero te veo")
    callback()
}

elSaludo(()=>{console.log("Después te digo: hola que tal")})

// Sin =>

function saludar (){
    console.log ("Después te digo: hola que tal")
}

elSaludo(saludar)