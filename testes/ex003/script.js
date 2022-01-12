const slide = document.querySelector('.slide');
const slideImages = document.querySelectorAll('.slide img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let counter = 1;
const size = slideImages[0].clientWidth;

slide.style.transform = `translateX(-${size * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= slideImages.length - 1) return;
    slide.style.transition = 'transform 500ms ease-in-out';
    counter++;
    slide.style.transform = `translateX(-${size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = 'transform 500ms ease-in-out';
    counter--;
    slide.style.transform = `translateX(-${size * counter}px)`;
});

slide.addEventListener('transitionend', () => {
    if (slideImages[counter].id === 'last-clone') {
        slide.style.transition = 'none';
        counter = slideImages.length - 2;
        slide.style.transform = `translateX(-${size * counter}px)`;
    }
    if (slideImages[counter].id === 'first-clone') {
        slide.style.transition = 'none';
        counter = slideImages.length - counter;
        slide.style.transform = `translateX(-${size * counter}px)`;
    }
});
