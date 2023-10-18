document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".gallery-container img");
    var prevButton = document.querySelector(".prev-button");
    var nextButton = document.querySelector(".next-button");
    var currentIndex = 0;

    // Función para mostrar la imagen actual
    function showImage(index) {
        images.forEach(function (img) {
            img.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    // Función para ir a la imagen anterior
    function goToPrevious() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Función para ir a la imagen siguiente
    function goToNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Agregar eventos a los botones
    prevButton.addEventListener("click", goToPrevious);
    nextButton.addEventListener("click", goToNext);

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);
});