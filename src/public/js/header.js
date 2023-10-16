const expanseBtn = document.getElementById("expanseBtn");
const navContainer = document.getElementById("navLinks");

expanseBtn.addEventListener("click", function () {
  navContainer.classList.toggle("max-h-72");
});
