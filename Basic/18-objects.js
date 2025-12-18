let person = {
    name: "Anto",
    age: 45,
    alias: "Er Pica"
}

//PROPIEDADES
console.log(person.name)
console.log(person["name"]) // no recomendado

person.name = "Antonio"
console.log(person.name)

console.log(person.age)
console.log(typeof person.age)
person.age = "45"
console.log(person.age)
console.log(typeof person.age)

console.log(person)

person.email = "erpica@gmail.com"
console.log(person)

//MÉTODOS
let person2 = {
    name: "Anto",
    age: 45,
    alias: "Er Pica",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

// Anidación de Objects
let person3 = {
    name: "Anto",
    age: 45,
    alias: "Er Pica",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 10,
        work: function(){
        console.log("La persona trabaja")
        },
    }
}

console.log(person3)
console.log(person3.job)
console.log(person3.job.name)


// Igualdad de objects
let person1 = {
    name: "Anto",
    age: 45,
    alias: "Er Pica"
}

let person10 = {
    name: "Anto",
    age: 45,
    alias: "Er Pica"
}

console.log(person1)
console.log(person10)
console.log(person1 == person10)  // Esto compara la referencia, por eso es false
console.log(person1 === person10) //
console.log(person1.name == person10.name) // Esto si compara el valor


// Iteracción
for (let value in person1){
    console.log(value)
}           // Así recorrería las claves

for (let key in person1) {
    console.log(key + ": " + person1[key])
}

let person5 = {
    name: "Anto",
    age: 45,
    alias: "Er Pica",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 10,
        work: function(){
        console.log(`La persona de ${this.exp} de experiencia trabaja`)
        },
    }
}

person5.job.work()