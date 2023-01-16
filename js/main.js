const images = document.querySelectorAll('.slides img')
const sliderLine = document.querySelector('.slides')
let count = 0
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    // sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    })
    nextSlide()
}

document.querySelector('.prev').addEventListener('click', () => {
    count--
    if (count < 0) {
        count = images.length - 1
    }
    nextSlide()
})

document.querySelector('.next').addEventListener('click', () => {
    count++
    if (count >= images.length) {
        count = 0
    }
    nextSlide()
})

function nextSlide() {
    sliderLine.style.transform = 'translate(-'+count * width + 'px)'
}

window.addEventListener('resize', init)
init()


const menuBtn = document.querySelector('.menu-btn')
const menuCloseBtn = document.querySelector('.mobile-menu__close-btn')
const menu = document.querySelector('.mobile-menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

menuCloseBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
    menuBtn.classList.toggle('menu-active')
})

document.querySelectorAll('.mobile-menu__item').forEach((elem) => {
    elem.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })
})

window.addEventListener('resize', () => {
    if(window.screen.width > 450 && !menu.classList.contains('hidden')) {
        menu.classList.toggle('hidden')
    }
})