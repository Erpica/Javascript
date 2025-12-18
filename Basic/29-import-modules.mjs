import {add, PI, name, Circle} from "./28-export-modules.mjs" // propiedades y funciones una a una (con la por defecto no hace falta)

import resta from "./28-export-modules.mjs" // le llamo como quiera, en este caso rest. 
                                            // No hace falta llamarle como la función que exportaba (substract)
                                            // Solo se puede exportar en ese fichero una función.

console.log(add(5,10))


console.log(PI, ", ", name)

// importación por defecto
console.log(resta(5,10))

// clases
let circle = new Circle(5)
console.log(circle.radio)
console.log(circle.area().toFixed(2))
console.log(circle.perimetro().toFixed(2))

// Importación de clases por defecto
/*      Habría que comentar la línea 3: import resta from "./28-export-modules.mjs"
let MyClass = new resta()
MyClass.func()
*/

// Proyecto modular
//import { MyClass} from "./clases/nombrefichero.js"

// Módulos externos

const os = require("os")
console.log(os.platform)