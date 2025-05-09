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


// Mönstret: true = upp, false = ner
const riktningar = [
  true, false, false, true, true, false, true, false, true, true,
  false, true, true, true, false, true, false, false, false, true,
  true, true
];

const punkterContainer = document.querySelector('.punkter');

riktningar.forEach(isUp => {
  const punkt = document.createElement('span');
  punkt.classList.add(isUp ? 'upp' : 'ner');
  punkterContainer.appendChild(punkt);
});

  