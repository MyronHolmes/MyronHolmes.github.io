document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    console.log("hamburger clicked");
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuBtn.classList.remove("open");
    });
  });
});


function newTabRes() {
  window.open(
    "https://docs.google.com/document/d/1kUGYwqcFJn1T5OuyaQwlaQiuRbspJMGAdPF12TkjOFg/edit?usp=sharing",
    "_blank"
  );
}
function newTabLI() {
  window.open("https://www.linkedin.com/in/myron-holmes/", "_blank");
}
function newTabLI() {
  window.open("https://www.linkedin.com/in/myron-holmes/", "_blank");
}
function newTabGH() {
  window.open("https://github.com/MyronHolmes", "_blank");
}
function githubCBM() {
  window.open("https://github.com/MyronHolmes/Foundations-Capston", "_blank");
}
function demoCBM() {
  window.open("https://www.youtube.com/watch?v=qUBWoKF-Kds", "_blank");
}
function githubPP() {
  window.open("https://github.com/MyronHolmes/Java-Capstone-Project", "_blank");
}
function demoPP() {
  window.open("https://www.youtube.com/watch?v=VdTFwFF-Mds", "_blank");
}
function githubDW() {
  window.open("https://github.com/MyronHolmes/dental-website", "_blank");
}
function demoDW() {
  window.open("https://www.youtube.com/watch?v=lJkTsjZb12w", "_blank");
}
function githubIM() {
  window.open("https://github.com/MyronHolmes/inventory-manager", "_blank");
}
function demoIM() {
  window.open("https://surplus-depot.vercel.app/login", "_blank");
}
function githubRLP() {
  window.open("https://github.com/MyronHolmes/restaurant-landing", "_blank");
}
function demoRLP() {
  window.open("https://github.com/MyronHolmes/restaurant-landing/blob/main/README.md#-live-demo", "_blank");
}

