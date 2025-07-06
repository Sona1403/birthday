function startSurprise() {
  document.querySelector('.intro').style.display = 'none';

  const gallery = document.getElementById('gallery');
  const videoWrap = document.getElementById('videoWrap');
  const video = document.getElementById('surpriseVideo');
  const bgMusic = document.getElementById('bgMusic');

  gallery.style.display = 'block';
  videoWrap.style.animation = 'popIn 0.8s ease forwards';
  bgMusic.play();

  video.muted = false;
  video.play();

  video.addEventListener('ended', () => {
    videoWrap.style.display = 'none';
    gallery.classList.add('final-mode');

    const finalMsg = document.getElementById('finalMessage');
    const quote = document.getElementById('quote');
    finalMsg.classList.add('show');
    quote.classList.add('show');

    const message = `Dear Lipii❤️,\n
You’ve always been the one who brings us together, makes everything feel lighter, and reminds us what real friendship looks like. Life feels easier, crazier, and a whole lot better with you around.\n
You’ve stood by us through everything—with laughter, love, and that signature sass we adore. We honestly don’t know how we got so lucky to have you in our lives.\n
We love you deeply and endlessly—not just today, but every day.\n
Happy Birthday, Lipzz — you’ll always be our person.\n
With all our love,\n
Your Friends💕💕`;

    const words = message.split(" ");
    let i = 0;

    finalMsg.innerText = "";
    const typing = setInterval(() => {
      if (i < words.length) {
        finalMsg.innerText += words[i] + "\u00A0";
        i++;
      } else {
        clearInterval(typing);
      }
    }, 250);
  });
}

const button = document.getElementById("sneakyBtn");
const funnyText = document.getElementById("funnyText");
const boing = document.getElementById("boingSound");

const funnyMessages = [
  "You can’t catch me 😜",
  "Too slow, cutie!",
  "Almost had it! 🤪",
  "Try harder! 😆",
  "Nope, not yet!",
  "You’re adorable when you try."
];

let hoverCount = 0;

button.addEventListener("mouseover", () => {
  if (hoverCount < 6) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    boing.play();
    funnyText.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    hoverCount++;
  } else {
    funnyText.innerText = "Okay okay... you win 😅 Click me now!";
    button.style.position = "relative";
    button.style.left = "0px";
    button.style.top = "0px";
  }
});
