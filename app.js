// array para almacenar los nombres de los amigos
let amigos = [] ;

// funcion para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    // validar la entrada
    if (nombreAmigo === "") {
        alert ("Por favor, inserte un nombre.");
        return;
    }

    // agregar el nombre al array
    amigos.push(nombreAmigo);

    // limpiar el campo de entrada
    input.value = "";

    // actualizar la lista de amigos
    actualizarListaAmigos();
}

//funcion para actualizar la lista de amigos en el HTML.
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista existente.

    // iterar sobre el array y agregar cada amigo como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
} 

//funcion para sortear un amigo secreto
function sortearAmigo() {
    //validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    //generar un indice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener el nombre sorteado.
    const amigoSorteado = amigos[indiceAleatorio];

    // mostrar el resultado.
    const resultado = document.getElementById(`resultado`);
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
