const burgerBtn = document.querySelector('.nav__btn');
const navItems = document.querySelector('.nav__items');
const nav = document.querySelector('.nav');

const addShadow = () => {
	if (window.innerWidth > 0) {
		changeNavStyles(538);
	}
	if (window.innerWidth > 767) {
		changeNavStyles(600);
	}
	if (window.innerWidth > 991) {
		changeNavStyles(700);
	}
	if (window.innerWidth > 1440) {
		changeNavStyles(800);
	}
};

const changeNavStyles = h => {
	if (window.scrollY >= h) {
		nav.style.position = 'fixed';
		nav.style.backgroundColor = 'rgba(0,0,0,0.25)';
	} else {
		nav.style.position = 'absolute';
		nav.style.backgroundColor = 'transparent';
	}
};

window.addEventListener('scroll', addShadow);

burgerBtn.addEventListener('click', () => {
	navItems.classList.toggle('nav__items--active');
});
