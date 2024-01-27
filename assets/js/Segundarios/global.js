/* para pagina inicial pelo logo */
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    location.reload()
})
/* para pagina inicial pelo logo */

/* Dark ande Light */
const darkLight = document.querySelector('.content-dark-and-light');
const menuSettings = document.querySelector('.menu_settings');

menuSettings.addEventListener('click', function(){
    if(darkLight.style.display === 'none'){
        darkLight.style.display = 'block';
    } else{
        darkLight.style.display = 'none';
    }

});

let trail = document.getElementById('trail')
let boby = document.querySelector('body')

trail.addEventListener('click', ()=>{
    trail.classList.toggle('dark')
    boby.classList.toggle('dark')
})
/* Dark ande Light */

/* Menu */
const menu = document.querySelector('.show-menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function(){
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none';
    }

});
/* Menu */

/* Filters */
let btn = document.querySelector('.show-or-hide');
var filters = document.querySelector('.menu-filters')

btn.addEventListener('click', function(){
    if(filters.style.display === 'none'){
        filters.style.display = 'block';
    } else{
        filters.style.display = 'none';
    }

});
/* Filters */