let myMap = new Map()

console.log(myMap)
myMap = new Map([
        ["name", "Brais"],
        ["email", "pica@pic.es"],
        ["age", 45]
    ]
)

console.log(myMap)

myMap.set("name", "Anto")
myMap.set("alias", "ErPica")
console.log(myMap)

console.log(myMap.get("name"))
console.log(myMap.get("namer"))

console.log(myMap.has("name"))
console.log(myMap.has("namer"))

myMap.delete("email")
console.log(myMap)

myMap.clear()
console.log(myMap)

myMap = new Map([
        ["name", "Brais"],
        ["email", "pica@pic.es"],
        ["age", 45]
    ]
)

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.size)
console.log(myMap.entries())