// const navbar = document.querySelector('.header .navbar');
let navbar = document.querySelector('.header .navbar');
let closeNavbar = document.querySelector('#close-navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
	navbar.classList.toggle('active');
};

closeNavbar.onclick = () => {
	navbar.classList.remove('active');
};
