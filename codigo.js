const selectZone = document.querySelector('.select-zone');
const cardZone = document.querySelector('.card__content-zones');

selectZone.onclick = function(){
    cardZone.classList.toggle('active');
}

window.addEventListener("scroll", function(){
    var navContainer = document.querySelector(".nav-container");
    navContainer.classList.toggle("sticky", window.scrollY > 100);
})

const menu = document.querySelector('.nav-container__menu');
const menuList = document.querySelector('.nav-container__list');

menu.onclick = function(){
    menuList.classList.toggle('visible');
}