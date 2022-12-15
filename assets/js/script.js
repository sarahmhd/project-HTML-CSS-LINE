// global variables
let nav = document.querySelector(".header .nav");
let btnCollabse = document.querySelector(".header .collapse");

// show navbar when click on bar icon
btnCollabse.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// how we work section button
let btns = document.querySelectorAll(".btn-group button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((el) => {
      el.classList.remove("active");
    });
    btn.classList.add("active");
    btn.nextElementSibling.classList.add("active");
  });
});
