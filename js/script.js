// const navbar = document.querySelector('.header .navbar');
let navbar = document.querySelector('.header .navbar');
let closeNavbar = document.querySelector('#close-navbar');
let menuBtn = document.querySelector('#menu-btn');
let copyrightYear = document.querySelector('.footer .copyright span');

menuBtn.onclick = () => {
	navbar.classList.toggle('active');
};

closeNavbar.onclick = () => {
	navbar.classList.remove('active');
};

let countDate = new Date('feb 15, 2022 00:00:00').getTime();

function countDown() {
	let now = new Date().getTime();

	let gap = countDate - now;

	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	let d = Math.floor(gap / day);
	let h = Math.floor((gap % day) / hour);
	let m = Math.floor((gap % hour) / minute);
	let s = Math.floor((gap % minute) / second);

	document.getElementById('day').innerText = d;
	document.getElementById('hour').innerText = h;
	document.getElementById('minute').innerText = m;
	document.getElementById('second').innerText = s;

	console.log(48);
}

setInterval(function () {
	countDown();
}, 1000);

//copyright year
let date = new Date();
let year = date.getFullYear();

copyrightYear.innerText = year;

var swiper = new Swiper('.openion-slider', {
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},
});
