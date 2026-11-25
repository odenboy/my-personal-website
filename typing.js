const phrases = [
  "a Student at L.G. Pinkston High School",
  "an Aspiring mechanical Engineer",
  "an Aspiring army officer",
  "an Aspiring mentor and leader"
];

const target = document.getElementById("typed-role");

const typeSpeed = 75;     // ms per character when typing
const deleteSpeed = 40;   // ms per character when deleting
const holdAfterType = 1600; // pause after finishing a phrase
const holdAfterDelete = 350; // short pause before typing the next phrase

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function tick() {
  if (!target) return;

  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    charIndex++;
    target.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(tick, holdAfterType);
      return;
    }
    setTimeout(tick, typeSpeed);
  } else {
    charIndex--;
    target.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(tick, holdAfterDelete);
      return;
    }
    setTimeout(tick, deleteSpeed);
  }
}

tick();