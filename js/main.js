let currentIndex = 0;
    const intervalTime = 3000; // Cambia esto para ajustar el tiempo entre transiciones en milisegundos
    let autoPlayInterval;
    let isAutoPlayOn = true;

    function showSlide(index) {
        const carousel = document.getElementById('image-carousel');
        const slideWidth = document.querySelector('.carousel-image').offsetWidth;
        const newPosition = -index * slideWidth;
        carousel.style.transform = 'translateX(' + newPosition + 'px)';
        currentIndex = index;
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + getTotalSlides()) % getTotalSlides();
        showSlide(currentIndex);
        resetAutoPlay();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % getTotalSlides();
        showSlide(currentIndex);
        resetAutoPlay();
    }

    function autoPlay() {
        autoPlayInterval = setInterval(() => {
            if (isAutoPlayOn) {
                nextSlide();
            }
        }, intervalTime);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlay();
    }

    function toggleAutoPlay() {
        isAutoPlayOn = !isAutoPlayOn;
        const toggleButton = document.getElementById('toggle-button');
        toggleButton.textContent = isAutoPlayOn ? '▶' : '⏸';
        if (isAutoPlayOn) {
            resetAutoPlay();
        } else {
            clearInterval(autoPlayInterval);
        }
    }

    function getTotalSlides() {
        return document.querySelectorAll('.carousel-image').length;
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentIndex);
        autoPlay();
    });

// Acordeon
function toggleAccordion(index) {
    const accordionItem = document.querySelectorAll('.accordion-item')[index - 1];
    accordionItem.classList.toggle('active');

    const accordionContent = accordionItem.querySelector('.accordion-content');
    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  }

