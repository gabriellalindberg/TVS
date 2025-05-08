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

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".punkter");
  
    const riktningar = [
      'upp', 'ner', 'ner', 'upp', 'upp',
      'ner', 'upp', 'ner', 'upp', 'upp',
      'ner', 'upp', 'upp', 'upp', 'ner',
      'upp', 'ner', 'ner', 'ner', 'upp'
    ];
  
    for (let i = 0; i < 22; i++) {
      const punkt = document.createElement("span");
      punkt.classList.add(riktningar[i]); // lägg till klassen 'upp' eller 'ner'
      container.appendChild(punkt);
    }
  });

  