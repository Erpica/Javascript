export function add(a, b){
return a + b
}

console.log(add(5,10))

export const PI = 3.1416
export let name = "Pica"

// Exportación por defecto
export default function substract(a,b){
    return a-b
}

// Exportación de clases
export class Circle{
    constructor (radio){
        this.radio = radio
    }
    area(){
        return Math.PI * Math.pow(this.radio, 2)
    }
    perimetro(){
        return 2 * Math.PI * this.radio
    }
}

// Exportación de clases por defecto
/*
export default class MyClass{
    func(){
        console.log("")
    }
}
    */