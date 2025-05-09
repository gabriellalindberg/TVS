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



const mönster = [
  "upp", "ner", "ner", "upp", "upp", "ner", "upp", "ner", "upp", "upp",
  "ner", "upp", "upp", "upp", "ner", "upp", "ner", "ner", "ner", "upp", "upp", "upp"
];

const långaIndex = [2, 4, 9, 12, 17, 20]; // OBS: index börjar på 0 (3:e pinne = index 2)

const container = document.querySelector(".punkter");

mönster.forEach((riktning, index) => {
  const punkt = document.createElement("span");
  punkt.classList.add(riktning);
  if (långaIndex.includes(index)) {
    punkt.classList.add("lång");
  }
  punkt.setAttribute("data-label", `Box ${index + 1}`);
  container.appendChild(punkt);
});

  