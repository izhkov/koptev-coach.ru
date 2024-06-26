// Burger Menu
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const navBurger = document.querySelector('.nav__burger')

navBurger.addEventListener('click', () => {
  nav.classList.toggle('active')
  navBurger.classList.toggle('active')

  navLinks.forEach((item) => {
    if (navBurger.classList.contains('active')) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
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

// Lazy Loading Reviews
const reviews = document.querySelectorAll('.reviews__item')
const loadingButton = document.querySelector('.loading__button')

let count = reviews.length
let start = 2
let show = 2

loadingButton.addEventListener('click', (e) => {
  e.preventDefault()
  let hideReviews = document.querySelectorAll('[data="hiden"]')

  for (let i = 0; i < start; i++) {
    if (show < count) {
      let block = hideReviews[i]
      block.removeAttribute('data')
      show++
      block.classList.remove('d-none')
    }

    if (show === count) {
      loadingButton.classList.add('d-none')
    }
  }
})

// Lazy Loading Images
const allImages = document.querySelectorAll('.gallery__item')
const loadImgButton = document.querySelector('#img__button')

let countImages = allImages.length
let startImages = 4
let showImages = 4

loadImgButton.addEventListener('click', (e) => {
  e.preventDefault()
  let hideImg = document.querySelectorAll('.gallery__item.d-none')

  for (let i = 0; i < startImages; i++) {
    if (showImages < countImages) {
      let images = hideImg[i]
      images.id = ''
      images.classList.remove('d-none')
      showImages++
    }

    if (showImages === countImages) {
      loadImgButton.classList.add('d-none')
    }
  }
})

const galleryItems = document.querySelectorAll('.gallery__item')

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      clearAllClasses()
      item.classList.add('active')
    } else {
      clearAllClasses()
    }
  })
})

const clearAllClasses = () => {
  galleryItems.forEach((item) => {
    item.classList.remove('active')
  })
}

// Form
const formChoice = document.querySelector('.form_choice')
const choiceItems = document.querySelectorAll('.form_choice ul li')
const choiceArea = document.querySelector('.choice__area')
const phoneInput = document.querySelector('[type="tel"]')
const emailInput = document.querySelector('[type="email"]')

formChoice.addEventListener('click', (e) => {
  e.preventDefault()
  choiceItems.forEach((item) => {
    item.classList.remove('selected')
  })
  e.target.classList.add('selected')
})

// Input Phone Mask
const formBtn = document.querySelector('.form_btn--send')

const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
})
phoneInput.addEventListener('input', () => {
  if (phoneMask.masked.isComplete) {
    formBtn.classList.add('active')
  } else {
    formBtn.classList.remove('active')
  }
})

// Smooth Scroll with JQuery :-/
$(function () {
  $('[data-goto]').on('click', function (event) {
    event.preventDefault()
    navBurger.classList.remove('active')
    nav.classList.remove('active')

    navLinks.forEach((item) => {
      item.style.display = 'none'
    })

    let elementId = $(this).data('goto')
    let elementOffset = $(elementId).offset().top

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    )
  })
})

// Footer Date
const footerCopyright = document.querySelector('.footer__copyright')
const fullYear = new Date().getFullYear()
footerCopyright.textContent = `© ${fullYear}`

// Animation

const animItems = document.querySelectorAll('.animItems')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]

      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - innerHeight / animStart
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('active')
      } else {
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop }
  }
  setTimeout(() => {
    animOnScroll()
  }, 300)
}
