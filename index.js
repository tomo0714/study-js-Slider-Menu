// DOM
const btn = document.querySelector('button');
const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

// Variable
let dis = 250;

// Function
const siftElement = (el, dur = 300) => {
    if(el === nav) {
        dis -= 250;
    }
    el.style.marginLeft = dis + 'px';
    el.style.transitionProperty = 'margin-left';
    el.style.transitionDuration = dur + 'ms';
    setTimeout(() => {
        el.style.removeProperty('transition-property');
        el.style.removeProperty('transition-duration');
    }, dur);
};

const sliderMenu = () => {
    btn.classList.toggle('active');
    siftElement(main);
    siftElement(header);
    siftElement(nav);
    dis *= -1;
};

// Event
btn.addEventListener('click', sliderMenu);