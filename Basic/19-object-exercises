/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
let moto = {
    color: "azul",
    cilindrada: 500,
    anoFabricacion: 1980
}

// 2. Accede y muestra su valor
console.log(moto.color)

// 3. Agrega una nueva propiedad
moto.altura = 50
console.log(moto.altura)

// 4. Elimina una de las 3 primeras propiedades
delete moto.altura
console.log(moto.altura)


// 5. Agrega una función e invócala
moto.correr = function(){
    console.log("estoy corriendo")
}
moto.correr()

// 6. Itera las propiedades del objeto
console.log()
console.log("ejercicio 6")
for (let clave in moto){
    console.log(clave + ": " + moto[clave])
}

// 7. Crea un objeto anidado
let persona = {
    nombre: "Anto",
    Edad: 44,
    trabajo: {
        nombre: "Informático"
    }
}


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona.trabajo.nombre)

// 9. Comprueba si los dos objetos creados son iguales
let a = 0
for (let clave in moto){
    a++
}
console.log(a)

// 10. Comprueba si dos propiedades diferentes son iguales
let iguales = false
for (let clave in moto){
    for (let clave2 in persona){
        if (moto[clave] == persona[clave2]){
            iguales = true
        }

    }
}
console.log(iguales)