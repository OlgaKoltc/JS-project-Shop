const navbar = document.querySelector(".navbar");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "20px 10px";
    navbar.classList.add("navbar__colored");
  } else {
    navbar.style.padding = "42px 10px";
    navbar.classList.remove("navbar__colored");
  }
}

const arrow = document.querySelectorAll(".arrow__link");
for (i = 0; i < arrow.length; i++) {
  let thisArrow = arrow[i];
  arrow[i].addEventListener("click", function () {
    thisArrow.parentElement.classList.toggle("_active-menu");
  });
}

const iconMenu = document.querySelector(".navbar__burgermenu");
if (iconMenu) {
  const bodyMenu = document.querySelector(".navbar__list-body");
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("_active-list");
    bodyMenu.classList.toggle("_active-list");
  });
}

let errors = [];
function checkValidity(input) {
  let validity = input.validity;
  const showErrorMessage = (el, message) => {
    let div = document.createElement("div");
    div.innerHTML = message;
    el.after(div);
    div.style.cssText = "color: red; padding: 5px 0 10px;";
  };
  if (validity.valueMissing) {
    showErrorMessage(input, "Поле не заполнено");
  }
  if (!validity.patternMismatch) {
    showErrorMessage(input, "Неверный формат заполнения");
  }
}
function checkAll() {
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    checkValidity(input);
  }
}
