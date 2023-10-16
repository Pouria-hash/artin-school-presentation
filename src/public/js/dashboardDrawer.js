const showSidenavBtn = document.getElementById("showSidenavBtn");
const sidenav = document.getElementById("sidenav");
const body = document.querySelector("body");
const sideNavLinks = document.getElementById("sideNavLinks");

showSidenavBtn.addEventListener("click", function () {
  sidenav.classList.remove("w-0");
  sidenav.classList.add("w-full");
  if (sidenav.classList.contains("w-full")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
});

// sideNavLinks.addEventListener("click", function () {
//   sidenav.classList.remove("w-full");
//   sidenav.classList.add("w-0");

//   if (sidenav.classList.contains("w-0")) {
//     // Disable scroll
//     body.style.overflow = "hidden";
//   } else {
//     // Enable scroll
//     body.style.overflow = "auto";
//   }
// });
