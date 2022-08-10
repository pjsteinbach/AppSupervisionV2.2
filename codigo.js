const updateButom = document.querySelector('.update-butom');
const zoneUpdate = document.querySelector('.zone__update');
const weeklyPartButom = document.querySelector('.weekly-part-butom');
const weeklyPart = document.querySelector('.zone__weekly-part');

updateButom.onclick = function(){
    zoneUpdate.classList.toggle('active');
}

weeklyPartButom.onclick = function(){
    weeklyPart.classList.toggle('active');
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
