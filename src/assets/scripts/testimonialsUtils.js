// Função para gerar estrelas
export const createStars = (rating) => {
    return Array.from({ length: rating }, () => `
        <span class="material-symbols-rounded fill">star</span>
    `).join("");
};

// Função para gerar o HTML dos cards
export const createTestimonialCard = (data) => `
    <article class="testimonials">
        <header class="testimonials__header">
            <div class="testimonials__header__initials"><span>${data.name[0]}${data.name.split(" ")[1]?.[0] || ""}<span></div>
            <div class="testimonials__header-wrapper">
                <div class="testimonials__header__name-rate">
                    <h2>${data.name}</h2>
                    <div class="testimonials__header--rating">${createStars(data.rating)}</div>
                </div>
                <div class="testimonials__header__description">
                    <span>${data.date}</span>
                    <span>${data.platform}</span>
                </div>
            </div>
        </header>
        <p>${data.comment}</p>
        ${
            data.pictures?.length
                ? `<div class="testimonials__pictures">
                        ${data.pictures.map(pic => `<div class="testimonials__pictures__item"><img src="${pic}" alt="Testimonial picture"></div>`).join("")}
                   </div>`
                : ""
        }
        <div class="testimonials__reply">
            <div class="testimonials__reply__logo">
                <img src="${data.reply.logo}" alt="Logo" width="32px">
                <div>
                    <span class="material-symbols-rounded">reply</span>
                    <span>Answered</span>
                </div>
            </div>
            <p>${data.reply.message}</p>
            <button>${data.reply.buttonText}</button>
        </div>
    </article>
`;
