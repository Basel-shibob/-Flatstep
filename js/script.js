const toggle = document.querySelector('.toggle')
const MobileNavigation = document.querySelector('.MobileNavigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('MobileNavigation-module-open')
    MobileNavigation.classList.toggle('MobileNavigation-module-open')
})