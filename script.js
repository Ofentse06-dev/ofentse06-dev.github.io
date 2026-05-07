// =====================================
// script.js (FIXED - NO ANIMATIONS BUGS)
// =====================================


// OPTIONAL: PAGE LOAD CLASS (SAFE)
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// =====================================
// REMOVE PAGE FADE TRANSITION (BUG CAUSE)
// =====================================

// ❌ Removed link fade-out navigation
// This was causing delay + weird behavior


// =====================================
// REMOVE SCROLL ANIMATION (MAIN FIX)
// =====================================

// ❌ We REMOVE opacity + transform manipulation completely
// so elements stay visible always

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .about-paragraph, .contact-card"
);

// DO NOTHING ON SCROLL (FIX)
window.addEventListener("scroll", () => {
  // intentionally empty
});


// =====================================
// REMOVE INITIAL HIDING (CRITICAL FIX)
// =====================================

// ❌ REMOVED:
// cards.forEach(card => {
//   card.style.opacity = "0";
//   card.style.transform = "translateY(40px)";
//   card.style.transition = "all 0.6s ease";
// });


// =====================================
// TYPING EFFECT (SAFE - KEEP THIS)
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
