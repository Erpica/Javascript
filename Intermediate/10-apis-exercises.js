// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch ("https://jsonplaceholder.typicode.com/posts")
    .then (response => {
        if (response.ok){
            return response.json()
        }else{
            throw new Error( `Error en la solicitud: ${response.status} - ${response.statusText}` )
        }
    })
    .then (data =>{
        console.log(data)})
    .catch (error => {
        console.log("Error: ", error)
    })

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPublications(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    try {
        const response = await fetch (url)
        const data = await response.json()      // Como no le pongas el await no devuelve nada
        if(response.ok) {
            //return console.log(response) // Para ver "el sobre sin abrir"
            return console.log(data)
        } else {
            console.log("La respuesta no ha devuelto datos")
        }
    } catch (error){
        console.log("Error: ", error)
    }
}

getPublications()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Enví­a un objeto con propiedades como title o body
async function postPlaceholder (){
    try {
        const titleAndBody = {
            userId: 1,
            title: "Nuevo Título",
            body: "Nuevo body"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify(titleAndBody)
        })

        if (response.ok){
            const data = await response.json()
            console.log(data)
        } else {
            console.log("Algo no fue bien")
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.log("Error", error)
    }

}

postPlaceholder()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function myPutMethod (){
    const myPublication = {
        id: 10,
        body: "El nuevo cuerpo de mi publicación"
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        
        body: JSON.stringify(myPublication)
    })
    const data = await response.json()
    console.log(data)
    if (response.ok){
        return response.status
    } else {
        return (`Error ${response.status}: ${response.statusText}`)
    }
}

myPutMethod ()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function patchFunction () {
    const url = "https://jsonplaceholder.typicode.com/posts/10"
    const changeTitle = {
        id: 10,
        title: "El nuevo título"
    }
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(changeTitle)
    })
    
    const theResponse = await response.json()
    console.log(theResponse)
    if (response.ok){
        return response.status
    } else {
        return (`Error ${response.status}: ${response.statusText}`)
    }

}

patchFunction ()







// 7. Enví­a una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deleteItem (){

    try {
        const url = "https://jsonplaceholder.typicode.com/posts/10"
        const response = await fetch (url, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
         })
        if (response.ok){
            const data = response.statusText
            console.log(data)
        } else {
        console.log("Se ha producido un error al responder")
    }
    } catch (error){
        console.log("Se ha producido un error al conectar")
    }

}

deleteItem()


// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getToOpenWeather(){
    try {
        const apiKey = "f51ef488b1d9986383fc0581d16e7f68"
        const city = "Cádiz"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response = await fetch (url)
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log("Se ha producido un error")
    }
}

getToOpenWeather()

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles 
// de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getFullPokemonData(name){
    try{
        async function pokeApi(name) {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${name}`
                const response = await fetch (url, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                if (response.ok){
                    const data = await response.json()
                    return data
                    // O mejor: return await response.json()
                } else {
                    throw new Error (`Error ${response.status}: ${response.statusText}`)
                }
            } catch (error) {
                console.log(`Se ha producido un error: ${error.message}`)
            }
        }

        const pokemonData = await pokeApi(name)
        //console.log(pokemonData)                                      //* DESCOMENTA PARA VER *
        const speciesUrl = pokemonData.species.url

        async function specieDetails (speciesUrl){
            try {
                const response = await fetch (speciesUrl, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                if (response.ok){
                    const data = await response.json()
                    return data
                } else {
                    throw new Error (`Error ${response.status}: ${response.statusText}`)
                }
            } catch (error) {
                console.log(`Se ha producido un error: ${error.message}`)
            }
        }

        const specieData = await specieDetails(speciesUrl)
        //console.log(specieData)                                       * DESCOMENTA PARA VER *

        const evolutionChain = specieData.evolution_chain
        async function extractEvolutionChain (evolutionChain){
            let dataEvolutionChain
            try {
                const response = await fetch (evolutionChain.url)
                if (response.ok){
                    dataEvolutionChain = await response.json()
                    //return dataEvolutionChain
                } else {
                    throw new Error (`Error ${response.status}: ${response.statusText}`)
                }
                return dataEvolutionChain
            } catch (error){
                throw new Error (`Error en cadena evolutiva: ${error.message}`)
            }

        }
        const dataEvolution = await extractEvolutionChain(evolutionChain)
        return {
            pokemonData,
            specieData,
            dataEvolution
        }
    } catch (error){
        console.log(console.log(`Se ha producido un error: ${error.message}`))
    }



}

(async () => {
    const dataCompleta = await getFullPokemonData("pikachu");
    console.log("-----------------------------------------");
    console.log("RESULTADO FINAL DE getFullPokemonData:");
    console.log(dataCompleta);
})();




// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API