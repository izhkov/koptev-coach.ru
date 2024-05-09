// Burger Menu

const nav = document.querySelector('.nav')
const navBurger = document.querySelector('.nav__burger')

navBurger.addEventListener('click', () => {
  nav.classList.toggle('active')
  navBurger.classList.toggle('active')
})

// Concept Buttons and Text

const leftText = [
  '<span>Только с теми</span>, кто хочет развиваться',
  '<span>Моя цель</span> - помочь клиентам стать более осознанными',
  '<span>Использую адаптивный</span> подход к каждому клиенту',
  '<span>Помогаю клиентам</span> почувствовать себя понятыми',
]

const rightText = [
  '<span>С клиентами</span> младше 14 лет',
  '<span>С теми</span>, кто не знает для чего им развиваться',
  '<span>С теми</span>, кого заставили ко мне прийти',
  '<span>Не</span> работаю в долг',
]

const buttons = document.querySelector('.button__block')
const data1Button = document.querySelector('[data="1"]')
const data2Button = document.querySelector('[data="2"]')
const text = document.querySelectorAll('.concept__text p')

buttons.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.getAttribute('data') === '2') {
    e.target.classList.add('active')
    data1Button.classList.remove('active')
    text.forEach((item, index) => (item.innerHTML = rightText[index]))
  } else {
    data1Button.classList.add('active')
    data2Button.classList.remove('active')
    text.forEach((item, index) => (item.innerHTML = leftText[index]))
  }
})

// Reviews loading

const reviews = document.querySelectorAll('.reviews__item')
const reviewsButton = document.querySelector('.review__button')

let count = reviews.length
let start = 2
let show = 4

reviewsButton.addEventListener('click', (e) => {
  e.preventDefault()
  let hideReviews = document.querySelectorAll('[data="hiden"]')

  for (let i = 0; i < start; i++) {
    if (show < reviews.length) {
      let block = hideReviews[i]
      block.removeAttribute('data')
      show++
      block.classList.remove('d-none')
    }

    if (show === reviews.length) {
      reviewsButton.classList.add('d-none')
    }
  }
})
