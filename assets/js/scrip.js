let slides = document.getElementsByClassName('slide-contenter')
let index = 0

function next() {
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
}

function prev() {
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add('active')
}

let imgs1 = document.querySelectorAll('.smart-img-1')
imgs1.forEach(img => {
    img.addEventListener('click', () => {
        let src = img.getAttribute('src')
        document.querySelector('.big-img-1').src = src
    })
})
