const nav = document.querySelector('.nav')
const navBurger = document.querySelector('.nav__burger')

navBurger.addEventListener('click', () => {
  nav.classList.toggle('active')
  navBurger.classList.toggle('active')
})
