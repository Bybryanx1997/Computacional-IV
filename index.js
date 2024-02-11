// Eventos para el ejemplo de mouseover
document.getElementById('elemento1').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'Yellow';
});

document.getElementById('enlace1').addEventListener('mouseover', function() {
    alert('¡Hola Como estas!');
});

// Eventos para el ejemplo de click

function mostrarOcultarElemento() {
    var elemento = document.getElementById('elemento1');
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}

function cambiarTextoParrafo() {
    document.getElementById('parrafo1').innerText = 'Nunca te rindas si puedes imaginarlo puedes programarlo :3!.';
}

function agregarElementoLista() {
    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Nuevo Elemento';
    document.getElementById('lista1').appendChild(nuevoElemento);
}


// Eventos para el ejemplo de focus
document.getElementById("campoEntrada").addEventListener("focus", function() {
    document.getElementById("mensajeAyuda").style.display = "block";
  });

document.getElementById("clave").addEventListener("focus", function() {
    var clave = document.getElementById("clave").value;
    if (clave.length < 8) {
      document.getElementById("mensajeError").style.display = "block";
    }
  });
  