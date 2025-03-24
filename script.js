function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    
    // Posición aleatoria dentro de la ventana
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = Math.random() * window.innerHeight + "px";

    // Estructura SVG de la flor
    flower.innerHTML = `
        <svg viewBox="0 0 100 100" width="50" height="50">
            <circle cx="50" cy="50" r="10" fill="#ffcc00"/>
            <path d="M50 10 L65 35 L90 40 L70 60 L75 90 L50 75 L25 90 L30 60 L10 40 L35 35 Z" fill="#ffd700"/>
        </svg>
    `;

    document.body.appendChild(flower);
}

// Crear múltiples flores al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 10; i++) {
        createFlower();
    }
});
