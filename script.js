// =====================================
// script.js (KEEP ANIMATIONS, EXCEPT EXPERIENCE PAGE)
// =====================================


// CHECK CURRENT PAGE
const isExperiencePage = window.location.pathname.includes("experience.html");


// =====================================
// PAGE LOAD FADE (KEEP THIS)
// =====================================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// =====================================
// PAGE TRANSITION (KEEP THIS)
// =====================================

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e){

    const href = this.getAttribute("href");

    if(href && href.includes(".html")){
      e.preventDefault();

      document.body.classList.remove("loaded");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }

  });
});


// =====================================
// SCROLL ANIMATION (FIXED)
// =====================================

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .about-paragraph, .contact-card"
);


// ❌ ONLY RUN ANIMATION IF NOT EXPERIENCE PAGE
if(!isExperiencePage){

  // INITIAL STATE
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
  });

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

} else {

  // EXPERIENCE PAGE → FORCE EVERYTHING VISIBLE
  cards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "none";
    card.style.transition = "none";
  });

}


// =====================================
// TYPING EFFECT (KEEP THIS)
// =====================================

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
