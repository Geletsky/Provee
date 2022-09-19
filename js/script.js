const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',

	simulateTouch: false,

	navigation: {
		nextEl: '.slider-examples__arrow_next',
		prevEl: '.slider-examples__arrow_prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	
	},

 });

 document.querySelectorAll('.accordion-question__trigger').forEach((item) =>
 	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('accordion-question__item--active')) {
			parent.classList.remove('accordion-question__item--active');
		} else {
			document
				.querySelectorAll('.accordion-question__item')
				.forEach((child) => child.classList.remove('accordion-question__item--active'))

				parent.classList.add('accordion-question__item--active')
		}
	})
 )