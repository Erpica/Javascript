/* Datos primitivos: básicos e inmutables, representan un solo valor
son 7:
Cadena de texto: String.
Números (normalmente 64 bits)
Booleanos
Undefined: Variable declarada no incializada (Tendrá valor pero ahora no)
Null: Intencionadamente estoy indicando que no tiene valor (sí está definido y es nulo)
Symbol: Valores únicos que pueden ser utilizados como identificadores de propiedades para los objetos. Para evitar colisiones
BigInt: número entero extremadamente grande. Coge toda la memoria que necesite
*/

let name = "ErPica" 
let alias = 'Pikaxo'
let email = `ErPica@Pikaxo`

let age = 44
let height = 1.77

let isStudent = true

let undefinedValue
//console.log(undefinedValue)

let nullValue = null

let mySymbol = Symbol("mysymbol")

let myBigInt = BigInt(8465681651681351343131313165165)
let myBigInt2 = 8465681651681351343131313165165n // Otra forma de representar el bigint
// console.log(typeof myBigInt)

