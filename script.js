const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image2')
const textBox = document.getElementById('text-box')

//Dark mode function

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode !'
    // toggleIcon.chidlren[1].classList.remove('fa-sun')
    // toggleIcon.chidlren[1].classList.add("fa-sharp fa-solid fa-moon")
    image1.src = 'img/undraw_pancakes_238t_dark.svg'
    image2.src = 'img/undraw_cat_re_gkh9_DARK.svg'
    image3.src = 'img/undraw_bitcoin_re_urgq_DARK.svg'

}

//Light mode function

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 266 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light mode ! '
    //toggleIcon.chidlren[1].classList.remove('fa-sharp fa-solid fa-moon')
    //toggleIcon.chidlren[1].classList.add('fa-sun')
    image1.src = 'img/undraw_pancakes_238t_LIGHT.svg'
    image2.src = 'img/undraw_cat_re_gkh9_LIGHT.svg'
    image3.src = 'img/undraw_bitcoin_re_urgq_LIGHT.svg'

}


//Switch theme dynamically
function switchTheme(event) {
    // console.log(event.target.checked)  //tracing  boolean value
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        lightMode()
    }
}

//Event listener
toggleSwitch.addEventListener('change', switchTheme)

//Check local storage for theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        darkMode()
    }
}