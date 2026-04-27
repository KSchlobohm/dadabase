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
    index = (index + 1) % jokes.length;
    show(jokes[index].setup);
    showingPunchline = false;
  }
}

// Display the first joke's setup on load
show(jokes[index].setup);
