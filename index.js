let menuIcon = document.getElementById("navMenuIcon");
let mobileNav = document.getElementById("mobileNav");
let navMenuClose = document.getElementById("navMenuClose");

menuIcon.addEventListener("click", (event) => {
  if (mobileNav.style.display === "" || mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
});

mobileNav.addEventListener("click", (event) => {
  mobileNav.style.display = "none";
});

navMenuClose.addEventListener("click", (event) => {
  mobileNav.style.display = "none";
});

console.log(menuIcon);
