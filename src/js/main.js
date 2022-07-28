const prevBtn = document.querySelector('.slider__btn-prev');
const nextBtn = document.querySelector('.slider__btn-next');

$(document).ready(function () {
	$('.slider__images').slick({
		arrows: false,
		variableWidth: true,
		centerMode: true,
		initialSlide: 2,
	});
});

prevBtn.addEventListener('click', () => {
	$('.slider__images').slick('slickPrev');
});

nextBtn.addEventListener('click', () => {
	$('.slider__images').slick('slickNext');
});
