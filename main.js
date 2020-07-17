// Variable Declarations
const menuIcon = document.querySelector('#menu-icon');
const slideoutMenu = document.querySelector('#slideout-menu');
const searchIcon = document.querySelector('#search-icon');
const searchBar = document.querySelector('#searchbar');

// Event listener for Search Icon - when the icon is clicked, toggle the display status and pointer events of the searchbar
searchIcon.addEventListener('click', function () {
  if (searchBar.style.top == '74px') {
    searchBar.style.top = '24px';
    searchBar.style.pointerEvents = 'none';
  } else {
    searchBar.style.top = '74px';
    searchBar.style.pointerEvents = 'auto';
  }
})

// Event listener for Hamburger Menu Icon - when clicked on a mobile device, toggle the visibility of the main navigation menu
menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == '1') {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})