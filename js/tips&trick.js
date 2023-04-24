const slides = document.querySelectorAll('.card__artycles-body');
let stepSlide = 0;

document.querySelector('.prev').addEventListener('click', function slideLeft() {
    let slot = document.querySelector('.wrapper__articles');
    stepSlide = stepSlide - 32;
    if (stepSlide < 0) {
        stepSlide = 100;
    }
    slot.style.left = -stepSlide + '%';
});

document.querySelector('.next').addEventListener('click', function slideLeft() {
    let slot = document.querySelector('.wrapper__articles');
    stepSlide = stepSlide + 34;
    if (stepSlide > 100) {
        stepSlide = 0;
    }
    slot.style.left = stepSlide + '%';
});