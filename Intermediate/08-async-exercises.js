//SACAMOS LAS TASK PARA QUE LAS TENGA DIPONIBLE EL EJERCICIO 4 Y EL 5

function firstTask (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Primera tarea completada")
        }, 1000)
    })
}

function secondTask (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Segunda tarea completada")
        }, 1000)
    })
}

function thirdTask (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Tercera tarea completada")
        }, 1000)
    })
}

//SACAMOS LAS TASK PARA QUE LAS TENGA DIPONIBLE EL EJERCICIO 4 Y EL 5

function exerciseOne(){
    return new Promise(resolve => {
        console.log()
        console.log(` * 1. Crea una función para saludar que reciba un nombre y un callback.
   El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".`)

        function miSaludito(callback, nombre) {
            setTimeout(() => {
                callback(nombre)
                resolve()
        }, 2000);
                
            //console.log(`Hola ${nombre}`);
        }

        function ahoraSiSaludo (nombre){
            console.log(`Hola ${nombre}`)
        }

        miSaludito(ahoraSiSaludo, "Pica")
    })
}



function exerciseTwo(){
    return new Promise(resolve =>{
        console.log()
        console.log(` * 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
   Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.`)

        function task1(callback){
            setTimeout(()=>{
                console.log("Tarea1")
                callback()
            }, 1000)
        }

        function task2(callback){
            setTimeout(()=>{
                console.log("Tarea2")
                callback()
            }, 1000)
        }

        function task3(callback){
            setTimeout(()=>{
                console.log("Tarea3")
                callback()
            }, 1000)
        }

        task1(() => {
            task2(() => {
                task3 (() => {
                    console.log("Todas las tareas completadas")
                    resolve()
                })
            })
        })
    }
)}



function exerciseThree(){
    return new Promise((resolve) => {
        console.log()
        console.log(` * 3. Crea una función para verificar un número que retorne una Promesa. 
   Si el número es par, la promesa se resuelve con el mensaje "Número par". 
   Si el número es impar, la promesa se rechaza con el mensaje "Número impar".`)

        function isEven (numero){
            return new Promise((resolve, reject) => {
                let result = numero % 2
                if (result == 0){
                    resolve ("es par")
                } else {
                    reject ("es impar")
                }
            })
        }

        isEven(5)
            .then(siEsOK => console.log("El número ", siEsOK))
            .catch(siEsKO => console.log("El número ", siEsKO))
            .finally(() => resolve())
    })
}




function exerciseFour(){
    return new Promise((resolve) => {
        console.log(`
 * 4. Crea tres funciones que devuelvan promesas:
   firstTask(): tarda 1s y muestra "Primera tarea completada".
   secondTask(): tarda 2s y muestra "Segunda tarea completada".
   thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
            `)

        firstTask()
            .then(mensaje => {
                console.log(mensaje)
                return secondTask()
            })
            .then(mensaje => {
                console.log(mensaje)
                return thirdTask()
            })
            .then(mensaje => {
                console.log(mensaje)
                resolve()
            })
        })
}



function exerciseFive(){
    return new Promise ((resolve) => {
        console.log()
        console.log(` * 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().`)

        async function executeTasks (){
            console.log(await firstTask())
            console.log(await secondTask())
            console.log(await thirdTask())
            resolve()
        }

        executeTasks()
        
    })
}




function exerciseSix(){
    return new Promise((resolve) => {
    console.log()
    console.log(`
 * 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
   Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
   Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
   Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
`)

    function getUser (id){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log(`La API ha respondido`)
                if (id < 5){
                    resolve({
                        id: id,
                        nombre: "Usuario" + id
                    })
                } else {
                    reject("id  no encontrado: " + id)
                    }
                }, 2000)
            })
    }

    async function checkUser(id) {
        console.log(`Buscando usuario ${id}...`);
        try {
            // 'await' espera a que la promesa se resuelva
            const usuario = await getUser(id);
            
            // Esto solo se ejecuta si la promesa tuvo ÉXITO (resolve)
            console.log("Usuario encontrado:");
            console.log(usuario);

        } catch (error) {
            // Esto solo se ejecuta si la promesa fue RECHAZADA (reject)
            console.log("Error al buscar usuario:");
            console.error(error);
        }
    }

    return checkUser(7).then(() => resolve())
    })
}



function exerciseSeven(){
    return new Promise((resolve) =>{
console.log()
console.log(`
 * 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
   console.log("Inicio")
   setTimeout(() => console.log("setTimeout ejecutado"), 0)
   Promise.resolve().then(() => console.log("Promesa resuelta"))
   console.log("Fin")
`)
        

        console.log("Inicio")
        setTimeout(() => {
            console.log("setTimeout ejecutado")
            resolve()
        },0)
            Promise.resolve().then(() => console.log("Promesa resuelta"))
            console.log("Fin")
        })
}





/*
Inicio
Fin
Promesa resuelta
setTimeout ejecutado
-


*/

// PARA QUE TODO SEA MAS LEGIBLE:
async function executeExercises(){
    await exerciseOne()
    console.log(" - Ejercicio 1 completado - ")
    await exerciseTwo()
    console.log(" - Ejercicio 2 completado - ")
    await exerciseThree()
    console.log(" - Ejercicio 3 completado - ")
    await exerciseFour()
    console.log(" - Ejercicio 4 completado - ")
    await exerciseFive()
    console.log(" - Ejercicio 5 completado - ")
    await exerciseSix()
    console.log(" - Ejercicio 6 completado - ")
    await exerciseSeven()
    console.log(" - Ejercicio 7 completado - ")
}

executeExercises()
// PARA QUE TODO SEA MAS LEGIBLE 👆



console.log()
console.log(`
 * 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
   A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar 
   "Todas las promesas resueltas" cuando terminen.
`)
function firstPromise (){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tiempo de espera 3")
            resolve("Terminada la primera promesa")        
        }, 3000)
        
    })
}

function secondPromise (){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tiempo de espera 2")
            resolve("Terminada la segunda promesa")
        }, 2000)
        
    })
}

function thirdPromise (){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tiempo de espera 1")
            resolve("Terminada la tercera promesa")
        }, 1000)
        
    })
}

// Array que contiene los objetos Promesa (sin resolver)
const misTareas = [
    firstPromise(), 
    secondPromise(), 
    thirdPromise() 
]

Promise.all(misTareas)
    .then((resultados) => { // 'resultados' es un array
        console.log("--- ¡Todas las tareas completadas! ---");
        console.log(resultados);
    });






console.log()
console.log(` * 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa 
   para esperar la cantidad de segundos indicada. A continuación, usa async/await para que se 
   espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.`)

function waitSeconds(segs){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Ya he esperado suficiente")
        }, segs)
    })
}

async function daleCania (){
    setTimeout(()=>{console.log("Tiempo finalizado")},3000)
    await waitSeconds(2000).then((msg) => console.log(msg))
}

daleCania()


















console.log()
console.log(` * 10. Crea una simulación de un cajero automático usando asincroní­a.
   - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
   - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, 
     o devuelve un error si no hay fondos.
   - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
    
   Posible salida esperada:
   Saldo disponible: 500$
   Retirando 300$...
    Operación exitosa, saldo restante: 200$
    Retirando 300$...
    Error: Fondos insuficientes`)

