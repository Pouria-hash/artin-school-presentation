const swiper = new Swiper('.swiper', {
	spaceBetween: 0,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 2.2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		1024: {
			slidesPerView: 3,
			spaceBetween: 0
		}
	}
});
