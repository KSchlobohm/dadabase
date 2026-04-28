const jokes = [
  { setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory.", link: "https://store.steampowered.com/app/526870/Satisfactory/" },
  { setup: "Why don't skeletons fight?", punchline: "They don't have the guts." },
  { setup: "I used to hate facial hair...", punchline: "but then it grew on me." },
  { setup: "I'm reading a book about anti-gravity...", punchline: "It's impossible to put down." },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { setup: "I used to be a banker...", punchline: "but I lost interest." },
  { setup: "Why can't you give Elsa a balloon?", punchline: "Because she'll let it go." },
  { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese." },
  { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired." },
  { setup: "How do you organize a space party?", punchline: "You planet." },
  { setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore." },
  { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up." },
  { setup: "What do you call a fake noodle?", punchline: "An impasta." },
  { setup: "Why did the math book look so sad?", punchline: "Because it had too many problems." },
  { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear." },
  { setup: "Why can't a nose be 12 inches long?", punchline: "Because then it would be a foot." },
  { setup: "What did the ocean say to the beach?", punchline: "Nothing, it just waved." },
  { setup: "Why did the golfer bring an extra pair of pants?", punchline: "In case he got a hole in one." },
  { setup: "Did you hear about the claustrophobic astronaut?", punchline: "He just needed a little space." },
  { setup: "Why do bees have sticky hair?", punchline: "Because they use a honeycomb." }
];

let index = 0;
let showingPunchline = false;

function loadJoke(i) {
  document.getElementById('setup-text').textContent = jokes[i].setup;
  const punchlineEl = document.getElementById('punchline-text');
  punchlineEl.textContent = jokes[i].punchline;
  punchlineEl.classList.add('hidden');
  showingPunchline = false;

  const linkContainer = document.getElementById('joke-link-container');
  linkContainer.innerHTML = '';
  if (jokes[i].link) {
    const a = document.createElement('a');
    a.href = jokes[i].link;
    a.textContent = '🎮 Play on Steam';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'joke-link';
    linkContainer.appendChild(a);
  }

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
