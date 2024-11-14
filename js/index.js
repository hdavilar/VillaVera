function ini() {
    const cards = document.querySelectorAll('.card'); // Seleccionar todas las tarjetas
    cards.forEach((card, index) => {
        const ratingDisplay = document.getElementById(`rating${index + 1}`);
        ratingDisplay.style.height = "47%";
        const stars = card.querySelectorAll('.star');
        let currentRating = 4.0; // Valor inicial, puedes personalizarlo

        // Inicializar las estrellas con la calificación actual
        updateStars(stars, currentRating, ratingDisplay);

        stars.forEach(star => {
            star.addEventListener("mouseover", function() {
                const value = parseInt(star.getAttribute("data-value"));
                updateStars(stars, value, ratingDisplay);
            });

            star.addEventListener("mouseout", function() {
                updateStars(stars, currentRating, ratingDisplay);
            });

            star.addEventListener("click", function() {
                currentRating = parseInt(star.getAttribute("data-value"));
                updateStars(stars, currentRating, ratingDisplay);
            });
        });
    });
}

function updateStars(stars, rating, ratingDisplay) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute("data-value"));
        if (value <= rating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });

    // Actualizar la calificación numérica en el párrafo correspondiente
    ratingDisplay.textContent = rating.toFixed(1);
}
ini();

