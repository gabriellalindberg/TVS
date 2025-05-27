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
  "upp", "ner", "ner", "upp", "upp", "ner", "upp", "upp", "ner", "upp", "upp",
  "ner", "upp", "upp", "upp", "upp", "ner", "upp", "upp", "ner", "ner", "ner", "ner", "upp", "upp", "upp",
];

const långaIndex = [2, 4, 7, 9, 12, 14, 17, 20, 22, 24];

const container = document.querySelector(".punkter");

// Array med texter för varje box
const texter = [
  "Första dagen", "Quickshot", "NASA", "Rundtur", "Melodifestivalen", "DUO", "Klara Gymnasium", "Intro till SVTi","BarnPlay", "Statister", "Meteorologerna",
  "LIVE", "OS uppgift", "Morgonstudion", "Magasin 4", "Svenska Nyheter", "PET", "Tekniksprångets instagram", "Malvina", "CD", "Corda", "CS", "Videocore", "Lilla Aktuellt", "Studiebesök", "Sista dagen"
];

mönster.forEach((riktning, index) => {
  const punkt = document.createElement("span");
  punkt.classList.add(riktning);
  if (långaIndex.includes(index)) {
    punkt.classList.add("lång");
  }
  // Använd text från texter-arrayen
  punkt.setAttribute("data-label", texter[index]);
  container.appendChild(punkt);
});
  