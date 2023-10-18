document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario
    var form = document.querySelector(".login-box form");

    // Agregar un evento de escucha al envío del formulario
    form.addEventListener("submit", function (event) {
        // Obtener los valores de los campos
        var correo = document.getElementById("correo").value;
        var contrasena = document.getElementById("contrasena").value;

        // Validación simple (puedes agregar reglas más específicas)
        if (correo === "" || contrasena === "") {
            alert("Por favor, complete todos los campos.");
            event.preventDefault(); // Evitar el envío del formulario
        }
    });
});