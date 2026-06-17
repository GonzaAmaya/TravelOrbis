const slides = document.querySelectorAll(".carousel__slide");
const dotsContainer = document.getElementById("dots");
let actual = 0;

// Crear puntitos
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("activo");
    dot.addEventListener("click", () => irA(i));
    dotsContainer.appendChild(dot);
});

function irA(index) {
    slides[actual].classList.remove("activo");
    document.querySelectorAll(".dot")[actual].classList.remove("activo");
    actual = index;
    slides[actual].classList.add("activo");
    document.querySelectorAll(".dot")[actual].classList.add("activo");
}

// Auto avance cada 4 segundos
setInterval(() => {
    irA((actual + 1) % slides.length);
}, 4000);
