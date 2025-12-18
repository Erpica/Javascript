/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
//const sumarDos = (n1=0, n2=0) => console.log(`Suma: ${n2+n1}`)
//sumarDos(7,8)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
/*
let miArray
let mayor = 0
function numeroMayor(miArray){
    miArray.forEach(element => {
        //console.log(element)
        if(element > mayor){
            mayor = element
        }
    });
    console.log(mayor)
}
numeroMayor([6, 3, 9, 2])
*/

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
//let cadenaAnto = "antonio"

/*let vocales = 0
function numerVocales(cadenaAnto){
    for(let i = 0 ; i < cadenaAnto.length ; i++){
        //console.log(cadenaAnto[i])
        if(cadenaAnto[i] == "a" || cadenaAnto[i] == "A"){vocales++}
        else if(cadenaAnto[i] == "e" || cadenaAnto[i] == "E"){vocales++}
            else if(cadenaAnto[i] == "i" || cadenaAnto[i] == "i"){vocales++}
                else if(cadenaAnto[i] == "o" || cadenaAnto[i] == "O"){vocales++}
                    else if(cadenaAnto[i] == "u" || cadenaAnto[i] == "U"){vocales++}
    }
    console.log(`Vocales: ${vocales}`)
}
let cadenaAnto = "Antonio"
numerVocales(cadenaAnto)
*/



//let cadenaAnto = "Antonio"
//numerVocales("Antonio")


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
/*
let cadena = {}
//console.log(typeof cadena)
function aMay (cadena){
    //cadena.foreach(Element) => console.log(Element)
    //console.log(cadena[0].length)
    //console.log(cadena.length)
    for (let i=0; i<cadena.length; i++)
        //console.log(cadena[i])
        console.log(cadena[i].toUpperCase())
}
cadena = [`hola`, 'adios', "aro aro"]
//console.log(typeof cadena)
aMay(cadena)
*/

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
/*let num, i=2
let numPrimo = `Sí es primo`
function esPrimo (num){
    for ( i; i<num; i++)
        if ( num%i == 0 ) {numPrimo = `No es primo`}
    }
esPrimo(8)
console.log(numPrimo)*/


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
/*let array1 = [], array2 = [], arrayComun = []
let x, y
function comparar (array1, array2){
    for (x=0; x<array1.length; x++){
        for (y=0; y<array2.length; y++){
            if(array1[x]==array2[y]){
                arrayComun.push(array1[x])
            }
        }
    }
}

comparar(`hola`, `adios`)
console.log(`En común: ${arrayComun}`)*/

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
/*let arrayNum = []
let suma = 0

function sumaPares (arrayNum){
    for(let i=0; i<arrayNum.length; i++){
        if(arrayNum[i] % 2 == 0){
            suma = suma + arrayNum[i]
        //console.log(element)
        }
    }
}
sumaPares([1, 2, 3, 4, 12, 13, 14])
console.log(suma)*/

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
/*let vectorCuadrados = [], vectorOriginal = []
let i, cuadradoNum = 0

function pasarACuadrado (vectorOriginal){
for (i = 0; i < vectorOriginal.length; i++){
        vectorCuadrados.push(vectorOriginal[i]**2)
    }
}

pasarACuadrado([4, 3, 2])
console.log(vectorCuadrados)*/

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
/*let cadenaTexto = [], cadenaAlReves = []
function invertirCadena (cadenaTexto){
    for (let i=0; i<cadenaTexto.length; i++){
        cadenaAlReves.push(cadenaTexto[(cadenaTexto.length)-(i+1)])
        //console.log(cadenaTexto[(cadenaTexto.length)-(i+1)])
    }
}

invertirCadena("hola")
console.log(cadenaAlReves)*/

// 10. Crea una función que calcule el factorial de un número dado
/*let n, f = 1, i
function calculaFactorial (n){
    for (i=1; i<=n; i++){
        f = f*i
        //console.log(f)
    }
}

calculaFactorial(5)
console.log(f)*/
