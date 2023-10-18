document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario
    var form = document.querySelector("form");

    // Agregar un evento de escucha al envío del formulario
    form.addEventListener("submit", function (event) {
        // Obtener los valores de los campos
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var cedula = document.getElementById("cedula").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;
        var facultad = document.getElementById("facultad").value;
        var contrasena = document.getElementById("contrasena").value;
        var confirmarContrasena = document.getElementById("confirmar-contrasena").value;

        // Validación simple (puedes agregar reglas más específicas)
        if (nombre === "" || apellidos === "" || cedula === "" || telefono === "" || correo === "" || facultad === "" || contrasena === "" || confirmarContrasena === "") {
            alert("Por favor, complete todos los campos.");
            event.preventDefault(); // Evitar el envío del formulario
        } else if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden.");
            event.preventDefault(); // Evitar el envío del formulario
        }
    });
});