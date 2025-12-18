// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
let edad = 18;

// Error Lógico: Siempre devuelve TRUE porque 18 es un valor "truthy"
if (edad = 10) { 
    console.log("Eres un niño"); // Esto se ejecuta, aunque edad sea 18
}

let person = {
    "Nombre": "Anto",
    "Edad": 45

}

console.log(person)

person.edad = 46 

console.log(person)

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución