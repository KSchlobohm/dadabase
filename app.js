const jokes = [
  { setup: "Why don't skeletons fight?", punchline: "They don't have the guts." },
  { setup: "I used to hate facial hair...", punchline: "but then it grew on me." }
];

let index = 0;
let showingPunchline = false;

function loadJoke(i) {
  document.getElementById('setup-text').textContent = jokes[i].setup;
  const punchlineEl = document.getElementById('punchline-text');
  punchlineEl.textContent = jokes[i].punchline;
  punchlineEl.classList.add('hidden');
  showingPunchline = false;
  updateHint();
}

function updateHint() {
  document.querySelector('.hint').textContent = showingPunchline
    ? 'tap to hide • use Next/Back to navigate'
    : 'tap to reveal';
}

function tap() {
  const punchlineEl = document.getElementById('punchline-text');
  showingPunchline = !showingPunchline;
  if (showingPunchline) {
    punchlineEl.classList.remove('hidden');
  } else {
    punchlineEl.classList.add('hidden');
  }
  updateHint();
}

function next() {
  index = (index + 1) % jokes.length;
  loadJoke(index);
}

function prev() {
  index = (index - 1 + jokes.length) % jokes.length;
  loadJoke(index);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

// Display the first joke on load
loadJoke(index);
