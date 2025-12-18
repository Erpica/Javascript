// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP
// - GET: Leer
// - POST: Crear
// - PUT: Actualizar
// - DELETE

// Códigos de respuesta HTTP:
// - 200 OK
// - 201 TODO OK pero, a parte, he creado algo
// - 400 - Error. Algo he hecho mal
// - 404 - Se ha solicitado algo que no aparece
// - 500 - Error del lado servidor

// Consumir una API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Transforma la respuesta a JSON y return
        return response.json()
    })
    .then(data => {
        // Pasa los datos
        console.log(data)
    })
    .catch(error => {
        // Captura errores
        console.log("Error", error)
    })

    // Uso de Async/Await
    async function getPost(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            console.log(data)
        } catch (error){
            console.log("Error", error)
        }
    }

    getPost()

    // Solicitud POST

    async function createPost(){
        try {

            const newPost = {
                userId: 1,
                title: "Este es el título de mi post",
                body: "Este es el cuerpo de mi post"
            }

            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(newPost)
            })
            const data = await response.json()
            console.log(data)
        } catch (error){
            console.log("Error", error)
        }
    }

    createPost()

    // Manejor de errores:
    fetch("https://jsonplaceholder.typicode.com/Erpica")
    .then(response => {
        // response.ok es true si la respuesta empieza por 200 (200, 201...)
        if(!response.ok) {
            throw Error(`Status HTTP: ${response.status}`)
        }

        return response.json()
    })
    .catch(error => {
        console.log("Error", error)
    })

// Métodos HTTP adicionales:
// - PATCH
// - OPTIONS

    async function partialPostUpdate(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({title: "Este es el nuevo título de mi post"})
            })
            const data = await response.json()
            console.log(data)
        } catch (error){
            console.log("Error", error)
        }
    }

    partialPostUpdate()

    // Autenticación mediante API Key
async function getWeather(city) {
    const apiKey = "f51ef488b1d9986383fc0581d16e7f68"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        } catch (error){
            console.log("Error", error)
        }
}

getWeather("Madrid")

// Otros métodos de autenticación
// - Bearer Tokens
// - JWT

// Verionado de APIs
// - https://api.example.com/v1/resourdes
// - https://api.example.com/v2/resourdes

// Otras APIs
async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(`Habilidades de ${data.name}`)
            data.abilities.forEach(ability => {
                console.log(ability.ability.name)
            });
        } catch (error){
            console.log("Error", error)
        }
}

getPokemon("Pikachu")