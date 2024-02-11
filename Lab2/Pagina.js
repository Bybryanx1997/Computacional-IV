function cambiarColor(elemento) {
    elemento.style.backgroundColor = 'Yellow';
}

function restaurarColor(elemento) {
    elemento.style.backgroundColor = 'Green';
}

function cambiarImagen(nuevaImagen) {
    document.getElementById('miImagen').src = nuevaImagen;
}

function restaurarImagen(imagenOriginal) {
    document.getElementById('miImagen').src = imagenOriginal;
}

function resaltarElemento(elemento) {
    elemento.style.color = 'green';
}

function restaurarElemento(elemento) {
    elemento.style.color = 'Yellow';
}

function cambiarColorClick(elemento) {
    if (elemento.style.backgroundColor === 'Orange') {
        elemento.style.backgroundColor = 'Green';
    } else {
        elemento.style.backgroundColor = 'Yellow';
    }
}

function mostrarMensaje() {
    alert("¡Verdad que es facil darle clikc!");
}

let textoCambiado = false;

function cambiarTexto() {
    const botonEjemplo3 = document.getElementById("botonEjemplo3");
    if (textoCambiado) {
        botonEjemplo3.textContent = "Clikc Here";
        textoCambiado = false;
    } else {
        botonEjemplo3.textContent = "Cambio El Texto";
        textoCambiado = true;
    }
}

const focus1 = document.getElementById("input1");
const focus2 = document.getElementById("input2");
const focus3 = document.getElementById("input3");

const label1 = document.getElementById("FocusText1"); 
const label2 = document.getElementById("FocusText2")

const focusDiv = document.getElementById("FocusDiv");
const focusColor = focusDiv.style.backgroundColor;

focus1.addEventListener("focus", ()=> {
   label1.textContent = "Dentro"

  });
  
focus1.addEventListener("blur", ()=> {
    label1.textContent = "Fuera"

  });

focus2.addEventListener("focus", ()=> {
    var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    focusDiv.style.backgroundColor = colorAleatorio;
   });
   
focus2.addEventListener("blur", ()=> {
    focusDiv.style.backgroundColor = focusColor;
   });

focus3.addEventListener("focus", ()=> {
    label2.textContent = "Borre el contenido del InPut";
   });
   
focus3.addEventListener("blur", ()=> {
    if(focus3.value === ""){
        label2.textContent = "";
    }
    else{
    focus3.focus();
    }
   });
