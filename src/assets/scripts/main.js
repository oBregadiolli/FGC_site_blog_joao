import { testimonialsData } from './testimonialsData.js';
import { createTestimonialCard } from './testimonialsUtils.js';

// Renderiza os cards no container
const renderTestimonials = () => {
    const container = document.getElementById("testimonials-container");
    container.innerHTML = testimonialsData.map(createTestimonialCard).join("");
};

// Inicializa o render
renderTestimonials();