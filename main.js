const left = document.querySelector('.left')
const right = document.querySelector('.right')
const img = document.querySelector(".slider");
const h1 = document.querySelector("h1");
const dots = [...document.querySelectorAll(".dots span")];
let number = 0;
let interval;
const items = [{
        src: "img1.jpg",
        tekst: "Pierwszy tekst"
    },
    {
        src: "img2.jpg",
        tekst: "Drugi tekst"
    },
    {
        src: "img3.jpg",
        tekst: "Trzeci tekst"
    }
];
const changeDots = () => {
    dots.forEach(dot => dot.classList.remove('active'))
    dots[number].classList.add('active')
}

const change = () => {
    number++
    if (number == items.length) {
        number = 0
        img.src = items[number].src
        h1.textContent = items[number].tekst
        changeDots()
    }
    img.src = items[number].src
    h1.textContent = items[number].tekst
    changeDots()


}
interval = setInterval(change, 1000);
const keyChange = (e) => {
    if (e.keyCode == 39 || e.keyCode == 37) {
        clearInterval(interval)
        e.keyCode == 39 ? ++number : --number
        if (number == items.length) {
            number = 0
            img.src = items[number].src
            h1.textContent = items[number].tekst
            changeDots()
        } else if (number < 0) {
            number = items.length - 1
            console.log(number)
            img.src = items[number].src
            h1.textContent = items[number].tekst
            changeDots()
        }
        img.src = items[number].src
        h1.textContent = items[number].tekst
        changeDots()
        interval = setInterval(change, 1000)
    }
}
const clickDot = (e) => {
    clearInterval(interval)
    dots.forEach(dot => dot.classList.remove('active'))
    e.target.classList.add('active')
    number = dots.findIndex(dot => dot.classList.contains('active'))
    img.src = items[number].src
    h1.textContent = items[number].tekst
    interval = setInterval(change, 1000)
}
const leftArrow = () => {
    clearInterval(interval)
    img.src = items[number].src
    h1.textContent = items[number].tekst
    changeDots()
    number--
    if (number < 0) {
        number = items.length - 1
    }

    img.src = items[number].src
    h1.textContent = items[number].tekst
    changeDots()
    interval = setInterval(change, 1000)
}
const rightArrow = () => {
    clearInterval(interval)
    img.src = items[number].src
    h1.textContent = items[number].tekst
    changeDots()
    number++
    if (number == items.length) {
        number = 0
    }

    img.src = items[number].src
    h1.textContent = items[number].tekst
    changeDots()
    interval = setInterval(change, 1000)
}
window.addEventListener('keydown', keyChange)
dots.forEach(dot => dot.addEventListener('click', clickDot))
left.addEventListener('click', leftArrow)
right.addEventListener('click', rightArrow)