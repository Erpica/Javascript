// Manejo del DOM

console.log(document)

// Métodos básicos (selector HTML)

const myElementById = document.getElementById("id")
const myElementByClass = document.getElementsByClassName("class")
const myElementByTag = document.getElementsByTag("tag")

// Métodos más modernos (selector CSS)

document.querySelector(".paragraph")
document.querySelectorAll(".paragraph")

// Manipulación de elementos

const title = document.getElementById("title")
title.textContent = "Hola Javascript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"

// Modificación de atributos

// Obtención del atributo

const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación del atributo
const hasTarget = link.hasAttribute("target")

// Eliminación de atributos
link.removeAttribute("target")

// Intereacción con clases
const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const buttton = document.querySelector("button")
buttton.style.backgroundColor = "blue" // en css con guión, en javascritps con lowerCamelCase - buttton.style.background-Color
buttton.style.color = "white"
buttton.style.padding = "10px"

// Creación y eliminación de elementos
// Creación

const newParagraph = document.createElement("p")
newParagraph.textContent = "Párrafo creado con desde JS"
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Inserción en un lugar concreto
const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem)

intemsList.append(newItem)
intemsList.prepend(newItem)
secondItem.before(newItem)
secondItem.after(newItem)

// Eliminación
newParagraph.remove()

// Eliminación tradicional
const parent = newParagraph.parentElement
parent.removeChild()

// Elementos del DOM

function showMsg(){
    alert("Click!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)
// De otra forma:
sendButton.addEventListener("click", () => {
    alert("Click con arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM cargado")
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener ("submit", (event) => {
    // Código
})