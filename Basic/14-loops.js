for (let i = 0; i < 5 ; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

i = 0
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

myArray = ["Anto", "ErPica", "picadev"]
mySet = new Set(["Anto", "ErPica", "DePica", 45])
myMap = new Map([
        ["name", "Brais"],
        ["email", "erpica@pic.es"],
        ["age", 45]
    ]
)
myString = "Me gusta javascript"

console.log()
console.log("AHORA EL forof:")

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas prácticas (saltarme una vez el bucle o salirme para siempre):
for (let i = 0; i < 10; i++){
    if (i == 5){
        continue
    } else if (i == 6) {
        break
    }
    //console.log(´Hola $[i]´)
    console.log(`Hola ${i}`)
}