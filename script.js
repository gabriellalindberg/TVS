// script.js
// Hämta element
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const programGrid = document.querySelector('.program-grid');

// Scrolla till vänster
scrollLeftBtn.addEventListener('click', () => {
    programGrid.scrollBy({
        left: -300,  // Justera avståndet för scrollning
        behavior: 'smooth'  // Mjuk scroll
    });
});

// Scrolla till höger
scrollRightBtn.addEventListener('click', () => {
    programGrid.scrollBy({
        left: 300,  // Justera avståndet för scrollning
        behavior: 'smooth'  // Mjuk scroll
    });
});
