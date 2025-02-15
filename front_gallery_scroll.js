document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.gallery-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    const SCROLL_AMOUNT = 200; // Adjust scroll amount as needed

    if (container && prevButton && nextButton) {
        nextButton.addEventListener('click', () => scrollGallery(SCROLL_AMOUNT));
        prevButton.addEventListener('click', () => scrollGallery(-SCROLL_AMOUNT));
    }

    function scrollGallery(amount) {
        container.scrollBy({ left: amount, behavior: 'smooth' });
    }
});
