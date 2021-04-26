let currentTitle = document.querySelectorAll(".accordion-title");
let currentUl = document.querySelectorAll(".accordion-title + .accordion-list");
let currentIcon = document.querySelectorAll(".accordion-icon");

for (let i = 0; i < currentTitle.length; i++) {
  currentTitle[i].addEventListener("click", function () {
    currentTitle[i].classList.toggle("accordion-title-open");
    currentUl[i].classList.toggle("active");
    currentIcon[i].classList.toggle("accordion-icon-open");
  });
}

// js animation should be added.
