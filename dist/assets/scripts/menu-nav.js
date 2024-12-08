document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navList = document.querySelector('.nav__list');

    hamburgerBtn.addEventListener('click', () => {
        navList.classList.add('open'); // Exibe o menu
        hamburgerBtn.style.display = 'none'; // Esconde o ícone de hambúrguer
        closeBtn.style.display = 'block'; // Exibe o ícone de close
    });

    closeBtn.addEventListener('click', () => {
        navList.classList.remove('open'); // Oculta o menu
        hamburgerBtn.style.display = 'block'; // Exibe o ícone de hambúrguer
        closeBtn.style.display = 'none'; // Esconde o ícone de close
    });
});
