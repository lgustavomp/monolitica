const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const item = document.querySelectorAll('.menu_item')
const body = document.querySelector('body')

hamburger.addEventListener("click", () => {
    body.classList.toggle('active_body')
    menu.classList.toggle('active')
    hamburger.classList.toggle('active_ham')
})

item.forEach(e => {
    e.addEventListener("click", () => {
        body.classList.remove('active_body')
        menu.classList.remove('active')
        hamburger.classList.remove('active_ham')
    })
}) 
