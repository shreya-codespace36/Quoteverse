const quotes = [
  {
    text: "The future belongs to those who prepare for it today.",
    author: "Malcolm X",
    bgColor: "#FFD6A5",
    font: "'Georgia', serif",
    image: "images/malcom-x.jpg"
  },
  {
    text: "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "Henry David Thoreau",
    bgColor: "#FBE7C6",
    font: "'Georgia', serif",
    image: "images/thoreau.jpg"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    bgColor: "#B4F8C8",
    font: "'Georgia', serif",
    image: "images/mother-teresa.jpg"
  },
  {
    text: "All that we are is the result of what we have thought.",
    author: "Buddha",
    bgColor: "#A0E7E5",
    font: "'Georgia', serif",
    image: "images/buddha.jpg"
  },
  {
    text: "The most courageous act is still to think for yourself. Aloud.",
    author: "Coco Chanel",
    bgColor: "#FFAEBC",
    font: "'Courier New', monospace",
    image: "images/coco.jpg"
  },
  {
    text: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
    bgColor: "#CDB4DB",
    font: "'Courier New', monospace",
    image: "images/jfk.jpg"
  },
  {
    text: "The fears are paper tigers. You can do anything you decide to do.",
    author: "Maya Angelou",
    bgColor: "#FFC8DD",
    font: "'Courier New', monospace",
    image: "images/maya.jpg"
  },
  {
    text: "What we achieve inwardly will change outer reality.",
    author: "Plutarch",
    bgColor: "#E0BBE4",
    font: "'Courier New', monospace",
    image: "images/Plutarch.jpg"
  },
  {
    text: "There is nothing permanent except change.",
    author: "Heraclitus",
    bgColor: "#A0E7E5",
    font: "'Verdana', sans-serif",
    image: "images/heraclitus.jpg"
  },
  {
    text: "Life without love is like a tree without blossoms or fruit.",
    author: "Khalil Gibran",
    bgColor: "#B4F8C8",
    font: "'Verdana', sans-serif",
    image: "images/khalil.jpg"
  }
];

function getQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = '"' + q.text + '"';
  document.getElementById("author").innerText = "— " + q.author;
  document.getElementById("quote").style.fontFamily = q.font;
  document.getElementById("author").style.fontFamily = q.font;
  document.getElementById("quote-box").style.backgroundImage = 'url(' + q.image + ')';
  document.getElementById("bg").classList.remove("show");
  document.body.style.backgroundColor = q.bgColor;
  document.getElementById("bg").classList.add("show");
}

function enterApp() {
  document.getElementById("landing").classList.add("hidden");
  getQuote();
}

