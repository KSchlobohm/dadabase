const jokes = [
  { setup: "Why don't skeletons fight?", punchline: "They don't have the guts." },
  { setup: "I used to hate facial hair...", punchline: "but then it grew on me." }
];

let index = 0;
let showingPunchline = false;

function show(text) {
  document.getElementById('joke-text').textContent = text;
}

function tap() {
  if (!showingPunchline) {
    show(jokes[index].punchline);
    showingPunchline = true;
  } else {
    next();
  }
}

function next() {
  index = (index + 1) % jokes.length;
  show(jokes[index].setup);
  showingPunchline = false;
}

function prev() {
  index = (index - 1 + jokes.length) % jokes.length;
  show(jokes[index].setup);
  showingPunchline = false;
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

// Display the first joke's setup on load
show(jokes[index].setup);
