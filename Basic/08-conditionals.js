let age = 37

if (age == 37){
    console.log("La edad es 37")
} else if (age < 18){
    console.log("Menor de edad")
}else {
    console.log("Lo último")
}

// Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch
let day = 7
let dayName

switch (day){
    case 0: 
        dayName = "Lunes"
        break
    case 1: 
        dayName = "Martes"
        break
    case 2: 
        dayName = "Miércoles"
        break
    case 3: 
        dayName = "Jueves"
        break
    case 4: 
        dayName = "Viernes"
        break
    case 5: 
        dayName = "Sábado"
        break
    case 6: 
        dayName = "Domingo"
        break
    default:
        dayName = "No es un número de día correcto"
}

console.log(dayName)