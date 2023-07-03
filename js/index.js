
// const menuScript = document.createElement('script');
// menuScript.src = 'menu.js';
// menuScript.crossOrigin = 'anonymous';
// document.body.appendChild(menuScript);


const toggleBtn = document.querySelector('.toggleBtn'),
    toggleBtnIcon = document.querySelector('.toggleBtn i'),
    menu = document.querySelector('.menu')
toggleBtn.onclick = () => {
    menu.classList.toggle('open')
    toggleBtnIcon.classList =
        menu.classList.contains('open') ? 'fa fa-xmark' : 'fa fa-bars'
}