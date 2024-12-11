const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;

function scrollCarousel(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 3) % totalItems;
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 3 + totalItems) % totalItems;
  }

  // Mover o carrossel com base no índice
  carousel.style.transform = `translateX(-${currentIndex * 200}px)`; // 200px é a largura das imagens
}

document.querySelector('.next').addEventListener('click', () => scrollCarousel('next'));
document.querySelector('.prev').addEventListener('click', () => scrollCarousel('prev'));
