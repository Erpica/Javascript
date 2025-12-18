// Depuración

// console.log()

function sum (a, b){
    console.log("a:", a)
    console.log("typeof a: ", typeof a)
    console.log("b:", b)
    console.log("typeof b: ", typeof b)
    return a + b
}

console.log(sum(3, "5"))

// Depurador (profesional)

function divide(a,b){
    if (b === 0){
        throw new Error("No entre cero")
    }
    return a / b
}

console.log(divide(6,0))
