/* Antes que nada, te pongo los eventos más comunes:
🖱️ Eventos de Ratón (Mouse Events)
click	    El usuario hace clic con el botón principal.
dblclick	El usuario hace doble clic.
mousedown	El usuario presiona el botón del ratón.
mouseup	    El usuario suelta el botón del ratón.
mouseover	El cursor se mueve sobre un elemento.
mouseout	El cursor sale de un elemento.
mousemove	El cursor se mueve dentro de un elemento.
⌨️ Eventos de Teclado 
keydownUna  tecla es presionada (se activa repetidamente si se mantiene).
keyupUna    tecla es liberada.
📝 Eventos de Formulario (Form Events)
submit	Un formulario es enviado (usado para validación).
change	    El valor de un elemento (<input>, <select>, <textarea>) cambia y el elemento pierde el foco.
input	    El valor de un elemento de entrada cambia (se dispara inmediatamente).
focus	    Un elemento recibe el foco (el usuario hace clic en él o usa Tab).
blur	    Un elemento pierde el foco.
🌐 Eventos de Ventana y Medios (Window & Media Events)
load	    La página entera ha terminado de cargar (incluyendo imágenes y scripts).
DOMContentLoaded	El HTML inicial ha sido completamente cargado y parseado (se dispara antes de load).
scroll	    El usuario desplaza (scroll) la página o un elemento.
resize	    El tamaño de la ventana del navegador cambia.*/










/*      NO OLVIDES ESTUDIAR ESTO:
Método	Propósito	Ejemplo	Resultado
getAttribute('attr')	Leer: Obtiene el valor del atributo especificado exactamente como está escrito en el HTML.	elemento.getAttribute('class')	'resaltado grande'
setAttribute('attr', value)	Escribir/Modificar: Establece o cambia el valor de un atributo.	elemento.setAttribute('title', 'nuevo título')	<p title="nuevo título">...</p>
removeAttribute('attr')	Eliminar: Quita el atributo y su valor del elemento.	elemento.removeAttribute('disabled')	El elemento deja de estar deshabilitado.
hasAttribute('attr')	Verificar: Devuelve true si el elemento tiene el atributo especificado, false si no.	elemento.hasAttribute('id')

id	.id	Acceder o modificar el ID.
class	.className	Acceder a la clase(s) como un string.
href	.href	Acceder a la URL de un enlace.
value	.value	Acceder al contenido de un campo de formulario.
src	.src	Acceder a la fuente de la imagen.

classList	Propósito	Ejemplo
add('clase')	Añade una clase al elemento.	elemento.classList.add('activo')
remove('clase')	Elimina una clase específica.	elemento.classList.remove('oculto')
toggle('clase')	Si la tiene, la quita; si no la tiene, la añade.	elemento.classList.toggle('modo-oscuro')
contains('clase')	Verifica si el elemento contiene la clase.	elemento.classList.contains('resaltado')

Lectura	Accede al valor usando notación de puntos (Camel Case).	elemento.dataset.idUsuario	'123'
Escritura	Modifica el valor en el HTML.	elemento.dataset.colorFavorito = 'rojo'	<div data-color-favorito="rojo">...</div>
*/









// VAMOS A PROVOCAR QUE SE CARGUE EL DOM ANTES DE DEFINIR VARIABLES NI HACER NADA:
document.addEventListener('DOMContentLoaded', () => {




// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a ""¡Hola Mundo!"" al cargar la página
const pageTitle = document.getElementById("title");

document.addEventListener("DOMContentLoaded", () => pageTitle.textContent = "¡Hola Mundo!")





// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const imageGitHub = document.getElementById("img-github")
//let srcImageGitHub = imageGitHub.src
//console.log(srcImageGitHub)
imageGitHub.addEventListener("click", ()=>imageGitHub.src = "http://127.0.0.1:5500/Intermediate/git-hub-party-trasnparente.png")

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const boxElement = document.getElementById("box")
document.addEventListener("DOMContentLoaded", ()=> boxElement.classList.add("resalted-text"))




// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const paragraph = document.getElementById("paragraph")
paragraph.style.color = 'blue'

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const liButton = document.getElementById("liButton")
liButton.addEventListener("click", ()=> {
    const editableList = document.getElementById("editableList")
    // 1. Crear el nuevo elemento <li> (Objeto DOM):
    const newLiElement = document.createElement("li")
    // 2. Asignar el texto usando la propiedad .textContent (No reasignar la variable):
    newLiElement.textContent = "Nuevo elemento creado con JS"
    console.log("Hasta aquí si llego")
    editableList.appendChild(newLiElement)
})


// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const buttonToDeleteParagraph = document.getElementById("buttonToDeleteParagraph")

buttonToDeleteParagraph.addEventListener("click", ()=>{
    const currentParagraph = document.getElementById("paragraphToDelete")
    if (currentParagraph){
        currentParagraph.remove()
    }
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
function pToTransform(){
    const targetDivToReplace = document.getElementById("content")
    if (targetDivToReplace){
        const newTag = document.createElement('h2')
        newTag.textContent = "Ahora soy un título"
        const myParentElement = targetDivToReplace.parentElement
        myParentElement.replaceChild(newTag, targetDivToReplace)
    }
}
pToTransform()


// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje ""¡Hola!" al hacer clic
function greetFunction (){
    greetBtn = document.getElementById("greetBtn")
    addEventListener("click", () => {
        const newTagToGreet = document.createElement("h2")
        newTagToGreet.textContent = "Hola!"
        const myParentElement = greetBtn.parentElement
        myParentElement.replaceChild(newTagToGreet, greetBtn)
        //greetBtn.parentElement.replaceChild(newTagToGreet, greetBtn) // las dos últimas líneas en una
    })
}

greetFunction ()



















// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
function inputYResult (){
    textInput = document.getElementById("textInput")
    resultElement = document.getElementById("result")
    textInput.addEventListener("input", () =>{
        resultElement.textContent = textInput.value
    })
}

inputYResult()

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
backgroundBtn = document.getElementById("backgroundBtn")
backgroundBtn.addEventListener("click", () => document.body.style.backgroundColor="blue")










})  // YA CON TODO EL DOM CARGADITO MIRAMOS QUE HAY EN MI ARCHIVO JS