// =====================================
// script.js
// =====================================

// PAGE LOAD FADE EFFECT

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// SMOOTH PAGE TRANSITIONS

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function(e){

    const href = this.getAttribute("href");

    // ONLY RUN FOR HTML PAGES

    if(href && href.includes(".html")){

      e.preventDefault();

      // FADE OUT

      document.body.classList.remove("loaded");

      // WAIT BEFORE CHANGING PAGE

      setTimeout(() => {
        window.location.href = href;
      }, 500);

    }

  });

});

// SCROLL ANIMATION FOR CARDS

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .about-paragraph, .contact-card"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.2;

    if(cardTop < screenPosition){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

});

// INITIAL CARD STYLES

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";

});

// TYPING EFFECT FOR ROLE TEXT

const roleText = document.querySelector(".role");

if(roleText){

  const text = roleText.innerText;

  roleText.innerText = "";

  let index = 0;

  function typeEffect(){

    if(index < text.length){

      roleText.innerText += text.charAt(index);

      index++;

      setTimeout(typeEffect, 80);

    }

  }

  typeEffect();

}
