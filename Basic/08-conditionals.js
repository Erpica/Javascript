let age = 37

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

let day = 4
let dayName

switch (day){
    case 0:
        dayName = "lunes"
        break
    case 1:
        dayName = "martes"
        break
    case 2:
        dayName = "miércoles"
        break
    case 3:
        dayName = "jueves"
        break
    case 4:
        dayName = "viernes"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)