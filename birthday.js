const sneakyBtn = document.getElementById("sneakyBtn");
    const funnyText = document.getElementById("funnyText");
    const boing = document.getElementById("boingSound");
    const pop = document.getElementById("popSound");
    const bgMusic = document.getElementById("bgMusic");
    const birthdayMelody = document.getElementById("birthdayMelody");
    const typeSound = document.getElementById("typeSound");

    const funnyMessages = [
      "You can’t catch me 😜",
      "Too slow, cutie!",
      "Almost had it! 🤪",
      "Try harder! 😆",
      "Nope, not yet!",
      "You’re adorable when you try."
    ];

    let hoverCount = 0;
    sneakyBtn.addEventListener("mouseover", () => {
      if (hoverCount < 6) {
        const x = Math.random() * (window.innerWidth - sneakyBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - sneakyBtn.offsetHeight);
        sneakyBtn.style.position = "absolute";
        sneakyBtn.style.left = `${x}px`;
        sneakyBtn.style.top = `${y}px`;
        boing.play();
        funnyText.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        hoverCount++;
      } else {
        funnyText.innerText = "Okay okay... you win 😅 Click me now!";
        sneakyBtn.style.position = "relative";
        sneakyBtn.style.left = "0px";
        sneakyBtn.style.top = "0px";
      }
    });

    sneakyBtn.addEventListener("click", () => {
      pop.play();
      launchPopperAnimation();
      bgMusic.play();
      document.querySelector(".intro").style.display = "none";
      const gallery = document.getElementById("gallery");
      gallery.style.display = "block";
      const video1 = document.getElementById("video1");
      const wrap1 = document.getElementById("videoWrap1");
      wrap1.style.display = "flex";
      video1.play();
      video1.onended = () => {
        wrap1.style.display = "none";
        bgMusic.pause();
        const midMsg = document.getElementById("midMessage");
        midMsg.style.display = "block";
        setTimeout(() => {
          midMsg.style.display = "none";
          const video2 = document.getElementById("video2");
          const wrap2 = document.getElementById("videoWrap2");
          wrap2.style.display = "flex";
          video2.play();
          video2.onended = showFinalMessage;
        }, 3000);
      };
    });

    function showFinalMessage() {
      const wrap2 = document.getElementById("videoWrap2");
      wrap2.style.display = "none";
      const finalScreen = document.getElementById("finalScreen");
      finalScreen.style.display = "flex";
      const finalMsg = document.getElementById("finalMessage");
      const quote = document.getElementById("quote");
      birthdayMelody.play();
      finalMsg.classList.add("show");
      quote.classList.add("show");
      const message = `Dear Lipii❤️,\n
You’ve always been the one who brings us together, makes everything feel lighter, and reminds us what real friendship looks like. Life feels easier, crazier, and a whole lot better with you around.\n
You’ve stood by us through everything—with laughter, love, and that signature sass we adore. We honestly don’t know how we got so lucky to have you in our lives.\n
We love you deeply and endlessly—not just today, but every day.\n
Happy Birthday, Lipzz — you’ll always be our person.\n
With all our love,\nYour Friends💕💕`;
      const words = message.split(" ");
      let i = 0;
      finalMsg.innerText = "";
      const typing = setInterval(() => {
        if (i < words.length) {
          finalMsg.innerText += words[i] + "\u00A0";
          if (typeSound) {
            typeSound.currentTime = 0;
            typeSound.play();
          }
          i++;
        } else {
          clearInterval(typing);
        }
      }, 250);
      const quotes = [
        "“You’re the sparkle in our sky.”",
        "“Some hearts just shine brighter.”",
        "“You're not just loved — you're adored.”",
        "“You make even ordinary days feel magical.”"
      ];
      let q = 0;
      setInterval(() => {
        quote.innerText = quotes[q];
        q = (q + 1) % quotes.length;
      }, 5000);
    }

    function launchPopperAnimation() {
      const container = document.getElementById("popperContainer");
      for (let i = 0; i < 50; i++) {
        const popper = document.createElement("div");
        popper.classList.add("popper");
        popper.style.left = `${Math.random() * 100}%`;
        popper.style.top = `-10px`;
        popper.style.animationDuration = `${0.8 + Math.random()}s`;
        container.appendChild(popper);
        setTimeout(() => popper.remove(), 1200);
      }
    }
