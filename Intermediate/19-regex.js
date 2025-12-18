// Expresiones Regulares

// - Sintaxis

const regex = /abc/
const regex2 = RegExp("abc")
const text = "Hola abc Javascript"

//test: Verifica coincidencia con true o false

console.log(regex.test(text))
console.log(regex2.test(text))

const text2 = "Mi edad es 45"
const regex3 = /\d/g // al añadir la g al final lo hace de manera global, tantas veces como encuentre un dígito. Los flags van fuera de la regex
const regex4 = /[0-2]/

console.log(regex3.test(text2)) // true
console.log(regex4.test(text2)) // false

// replace: Reemplaza el texto que coincide con el patrón

const regex5 = /JavaScript/
//console.log("Hola JavaScript".replace("JavaScript", "JS"))
console.log("Hola JavaScript".replace(regex5, "JS"))
console.log("Estoy contando 1 2 3 4 5".replace(regex3, "*"))

const text3 = "Estoy contando 1 2 3 4 5"
console.log(text3.replace(regex3, "[número]"))

// exec: retorna detalles de la coincidencia
console.log(regex3.exec(text3))

while ((match = regex3.exec(text3)) !== null){
    console.log(match)
}


// MÁS TEORÍA IMPRESCINDIBLE PARA APRENDER

// Banderas:
/* 
g	Global	Busca todas las coincidencias en la cadena, no solo la primera.
i	Insensitive	La búsqueda no distingue entre mayúsculas y minúsculas.
m	Multilínea	Trata el inicio (^) y el final ($) de la cadena como el inicio y fin de cada línea dentro del texto. */

const regexGato = /gato/gi
const regexComputadora = /computadora/g
const elTexto = "Yo tengo un gato"
console.log(regexGato.test(elTexto))

// Test
const codigo = "El programa terminó sin errores críticos.";
const regexError = /error/
console.log(regexError.test(codigo))

// Exec
const patron = /script/;
const texto = "Este es un script de prueba.";
const detalles = patron.exec(texto);

console.log(detalles); 
/* El resultado es un array con detalles como:
[ 
  'script',  // Coincidencia
  index: 13, // Posición donde empieza
  input: 'Este es un script de prueba.',
  groups: undefined
]
*/

const regexBusqueda = /Método/;
const frase = "El Método exec es potente, pero el método test es simple.";
console.log(regexBusqueda.exec(frase))

// Match
// const regexBusqueda = /Método/g          => Si le pongo la g, solo me devuelve las cadenas que encuentra, sin detalles
console.log(frase.match(regexBusqueda))
const regexBusqueda2 = /Método/gi;
console.log(frase.match(regexBusqueda2))

//Replace
const frase2 = "El Método exec es potente, pero el método test es simple.";
const regexReemplazo = /método/gi; // Usamos 'gi' para global e insensible
const nuevoTexto = "Función";

console.log(frase2.replace(regexReemplazo, nuevoTexto))

//Metacaracteres:
// . -> "Coincide con cualquier carácter individual, excepto el salto de línea."
// (para buscar un punto: \.)
const regexMR = /m.r/ // -> mar, mir...
const regexConPunto = /\$15\.99/
const textoABuscar = "Precio: $15.99"
console.log(regexConPunto.test(textoABuscar))

//Clases de Caracteres (Shorthand)
/* \d	Coincide con cualquier dígito (0-9).	                                        [0-9]	        8, 2, 0
\D -> lo contrario (Cualquier carácter NO dígito)
\w	Coincide con cualquier carácter de palabra (letras, dígitos o guion bajo).	        [A-Za-z0-9_]	a, B, 7, _
\W -> lo contrario (Cualquier carácter NO de palabra (símbolos, puntuación))
\s	Coincide con cualquier espacio en blanco (espacio, tabulación, salto de línea).		                , \t, \n 
\S -> lo contrario (Cualquier carácter NO de espacio en blanco)
*/

const regexPin = /^\d{4}$/g
const findPin = "123 1234 12345 9999"
console.log(findPin.match(regexPin))

// Anclajes y anchors
/*  ^	Coincide con el inicio de la cadena.
    $	Coincide con el final de la cadena. 
*/

// [aeiou] - Coincide solo con una vocal minúscula.
// [^aeiou] - Lo contrario de arriba, es decir, coincide con cualquier cosa que no sea una vocal minúscula
// [A-Z] - Coincide con cualquier letra mayúscula (un rango).
// [a-zA-Z0-9] - Coincide con cualquier letra (mayúscula o minúscula) o dígito. (Esto es equivalente a \w, si ignoramos el guion bajo _).

const myNewRegex = /\W/
const theNewText = "dafn dfvm p234ìo oidfoi . jnern #"
console.log(theNewText.match(myNewRegex))

// Cuantificadores:
/*  +	Más	        Una o más veces (mínimo 1).
    *	Cero o más	Cero o más veces (es opcional).
    ?	Opcional	Cero o una vez (opcionalidad de un patrón). 
    {n}	Exacto	    Exactamente n veces.
    {n,}	Mínimo	    Al menos n veces.
    {n,m}	Rango	    Entre n y m veces. 
*/

// Lookahead: Mira todo el texto buscando algo concreto antes de seguir analizando la regex. Ejemplo en 20-regex-exercises

    


const textoConNumeros = "Hay 3 elefantes, 12 monos y 450 pájaros.";
const otherRegex = /\d+/g
console.log(textoConNumeros.match(otherRegex))

const url1 = "http://google.com";
const url2 = "https://google.com";
const regexUrl = /https?:\/\/google\.com/
console.log(url2.match(regexUrl))

const tel1 = "123-4567";
const tel2 = "123-456789";
const telRegex = /^\d{3}-\d{4,6}$/

// Operador OR: | -> por ejemplo: /perro|gato/
// Grupos de captura: () -> por ejemplo /(video)?juego/ -> contrará juego y videojuego