// 1. Crea una RegEx que valide correos electrónicos
let myMail = "a.a2_@a.aa"

const regexEmail =  /^[a-zA-Z0-9][\w.-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

console.log(regexEmail.test(myMail))


// 2. Crea una RegEx obtenga Hashtags de un Texto
const hashtagsRegex = /(^|\s)#\w+/g;
// O más pro: (que sea el principio o que tenga un espacio y no captures el espacio)
const regexHashtag = /(?<=^|\s)#\w+/g;

const myText = "Este sería el #hastag y rr#este no lo captura"
console.log(myText.match(hashtagsRegex))
console.log(myText.match(regexHashtag))

// 3. Crea una RegEx que valide contraseñas seguras (mí­nimo 8 caracteres, al menos una letra y un número)
const passRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
/* Qué hace cada parte
^: Inicio de la cadena.
(?=.[a-zA-Z]):* Lookahead positivo. Exige que en algún lugar de la cadena haya al menos una letra (mayúscula o minúscula).
(?=.\d):* Lookahead positivo. Exige que en algún lugar de la cadena haya al menos un dígito (0–9).
.{8,}: Cualquier carácter (excepto salto de línea) con longitud mínima de 8.
$: Final de la cadena. */


// NOTA: Aplícalas utilizando diferentes operaciones

/* ALGUNAS PRUEBAS MÁS

let re = /ab+c/;
let re2 = new RegExp("ab+c");
console.log(re)
console.log(re2)

const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// Expected output: Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// Expected output: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// Expected output: Array ["quick"]

 */