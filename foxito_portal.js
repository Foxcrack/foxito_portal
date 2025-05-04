function toggleBackgroundClaro() {

    // Cambiar el color de fondo a claro
    document.body.style.backgroundColor = "#ffffff";
    // Ocultar este botón
    document.getElementById("cambiarClaro").style.display = "none";
    // Mostrar el otro
    document.getElementById("cambiarOscuro").style.display = "inline-block";
    // Centrar boton
    document.getElementById("cambiarOscuro").style.margin = "0 auto";
    // Hacer visible el botón
    document.getElementById("cambiarOscuro").style.display = "block";
    // Cambiar el color del texto
    document.getElementById("titulo").style.color = "#000000";
    document.getElementById("titulo1").style.color = "#000000";
    document.getElementById("titulo2").style.color = "#000000";
    document.getElementById("titulo_registro").style.color = "#000000";
    // Cambiar el color del texto de los botones

}
    

function toggleBackgroundOscuro() {
        
    document.body.style.backgroundColor = "#ffffff";
    // Cambiar el color de fondo a oscuro
    document.body.style.backgroundColor = "#242424";
    // Ocultar este botón
    document.getElementById("cambiarOscuro").style.display = "none";
    // Mostrar el otro
    document.getElementById("cambiarClaro").style.display = "inline-block";
    // Centrar boton
    document.getElementById("cambiarClaro").style.margin = "0 auto";
    // Hacer visible el botón
    document.getElementById("cambiarClaro").style.display = "block";
    // Cambiar el color del texto
    document.getElementById("titulo").style.color = "#ffffff";
    document.getElementById("titulo1").style.color = "#ffffff";
    document.getElementById("titulo2").style.color = "#ffffff";
    document.getElementById("titulo_registro").style.color = "#ffffff";

}

//parte del formulario de registro
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edad = parseInt(document.getElementById("edad").value);

    let sonidoAceptado = new Audio("aceptado.mp3");
    let sonidoDenegado = new Audio("denegado.mp3");
    let mensajePantalla = document.getElementById("mensajePantalla");

    if (nombre === "" || isNaN(edad)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    let mensaje = "";
    let resultado = "";

    if (edad < 13) {
        mensaje = "Lo siento, " + nombre + ". Debes tener al menos 13 años para participar.";
        resultado = "¡ACCESO DENEGADO!";
        sonidoDenegado.play();
        document.getElementById("accesoDenegado").style.display = "block";
        document.getElementById("accesoJunior").style.display = "none";
        document.getElementById("accesoGeneral").style.display = "none";
    } else if (edad < 18) {
        mensaje = "¡Hola " + nombre + "! Puedes entrar al torneo junior 🐾";
        resultado = "¡REGISTRADO CON ÉXITO!";
        sonidoAceptado.play();
        document.getElementById("accesoDenegado").style.display = "none";
        document.getElementById("accesoJunior").style.display = "block";
        document.getElementById("accesoGeneral").style.display = "none";
    } else {
        mensaje = "¡Hola " + nombre + "! Bienvenido al torneo general 🦊🔥";
        resultado = "¡REGISTRADO CON ÉXITO!";
        sonidoAceptado.play();
        document.getElementById("accesoDenegado").style.display = "none";
        document.getElementById("accesoJunior").style.display = "none";
        document.getElementById("accesoGeneral").style.display = "block";
    }

    // Mostrar mensaje gigante
    mensajePantalla.textContent = resultado;
    mensajePantalla.style.display = "block";

    // Ocultarlo después de 3 segundos
    setTimeout(() => {
        mensajePantalla.style.display = "none";
    }, 3000);

    document.getElementById("respuesta").textContent = mensaje;
}

);
