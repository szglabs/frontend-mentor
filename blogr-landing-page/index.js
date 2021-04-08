// mobile nav logic

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    document.querySelector('.navbar').classList.add('responsive')
    hamburger.style.display = 'none';
    iconClose.style.display = 'block';
})

const iconClose = document.querySelector('.icon-close');
iconClose.addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('responsive');
    iconClose.style.display = 'none';
    hamburger.style.display = 'block';
})