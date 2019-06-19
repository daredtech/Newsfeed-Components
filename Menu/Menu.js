
// Toggle the "menu--open" class on your menu refence. 
//let toggleMenu = (element) => {console.log(' registered')}; //works
let toggleMenu = (element) => {element.classList.toggle('.menu--open')}; //doesn't


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('menu');

// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);





