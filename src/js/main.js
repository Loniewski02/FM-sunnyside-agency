const burgerBtn = document.querySelector('.nav__btn');
const navItems = document.querySelector('.nav__items');

burgerBtn.addEventListener('click', () => {
	navItems.classList.toggle('nav__items--active');
});
