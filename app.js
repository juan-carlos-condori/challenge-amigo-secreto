// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos el array amigos
let amigos = [];

let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

// Agrega nombre de amigos al array amigos[] 
function agregarAmigo(){

    let inputAmigo = document.getElementById('amigo').value;    
    if( !(inputAmigo == null || inputAmigo.length == 0 || /^\s+$/.test(inputAmigo)) ) { 
        amigos.push(inputAmigo);
        mostrarListaAmigo();
    } else {
        alert("Por favor, inserte un nombre.")
    }
    limpiarCampo();
    return;

}

// Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
function mostrarListaAmigo() {

    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const elemento = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = elemento;
      listaAmigos.appendChild(listaHTML);
    }

}

// Limpiar el campo donde se ingresa el nombre de un amigo
function limpiarCampo() {

    document.querySelector('#amigo').value = '';
    return;

}

// Sortea al amigo secreto de forma randomica.
function sortearAmigo() {
    
    let random = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    return;

}
