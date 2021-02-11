// Variable declarations
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

// Open button event listener
open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

// Close button event listener
close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})