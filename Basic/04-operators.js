let a = 5
let b = 10

/*
console.log(a == b)
console.log(a == 5)
console.log(a == a) // igualdad por valor
console.log(a == "5")
console.log(a === a) // igualdad por identidad: por tipo y valor
console.log(a === "5")
console.log(a === 5)
console.log(a != 5)
console.log(a !== "5")
*/
/*
console.log(0==false) // cero es falso
console.log(1==false) // 1 y 2 son verdaderos
console.log(2==false)
console.log(0=="") // cero es igual a la cadena vacía
console.log(0==" ")
console.log(0==' ')
console.log(0==="") // si comparo el tipo ya da falso
console.log(undefined == null)
console.log(undefined === null)
//console.log(0==fals)
*/

// valores verdaderos en Javascript:
// Todos los nº positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true
// valores falsos en Javascript:
// 0, 0n, null, undefined, NaN, el boolean false, cadenas de texto vacías

// Operadores lógocos:
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5>10 && 15>20 || 30<40) //true porque se cumple lo de un lado del or
console.log(!(5>10 || 15>20))
console.log(!true)

//Operador ternario: Si se cumple hace lo de después de ? y, si no se cumple, se hace lo de después de :
const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No esta lloviendo")


