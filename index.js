document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");

    if (menu.classList.contains("-translate-y-full")) {
      menu.classList.remove("-translate-y-full", "opacity-0");
      menu.classList.add("translate-y-0", "opacity-100", "flex");
    } else {
      menu.classList.add("-translate-y-full", "opacity-0");
      menu.classList.remove("translate-y-0", "opacity-100", "flex");
    }
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("-translate-y-full", "opacity-0");
      menu.classList.remove("translate-y-0", "opacity-100", "flex");
      menuBtn.classList.remove("open");
    });
  });
});


function newTabRes() {
  window.open(
    "https://docs.google.com/document/d/1PZ965xA8bNEQguxY3xk85X_gQKZZ3v5JxX1Zq72HRCA/edit?usp=sharing",
    "_blank"
  );
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
