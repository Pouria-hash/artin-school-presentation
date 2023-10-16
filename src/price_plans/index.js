const contentPlanOne = document.getElementById('contentPlanOne');
const contentPlanTwo = document.getElementById('contentPlanTwo');
const contentPlanThree = document.getElementById('contentPlanThree');

const closeExpansPlanOneButton = document.getElementById('closeExpansPlanOneButton');
const closeExpansPlanTwoButton = document.getElementById('closeExpansPlanTwoButton');
const closeExpansPlanThreeButton = document.getElementById('closeExpansPlanThreeButton');

const openExpansPlanOneButton = document.getElementById('openExpansPlanOneButton');
const openExpansPlanTwoButton = document.getElementById('openExpansPlanTwoButton');
const openExpansPlanThreeButton = document.getElementById('openExpansPlanThreeButton');

// Button one functionality
openExpansPlanOneButton.addEventListener('click', () => {
	openExpansPlanOneButton.classList.remove('flex');
	openExpansPlanOneButton.classList.add('hidden');
	closeExpansPlanOneButton.classList.remove('hidden');
	closeExpansPlanOneButton.classList.add('flex');

	contentPlanOne.style.maxHeight = '600px';
});
closeExpansPlanOneButton.addEventListener('click', () => {
	closeExpansPlanOneButton.classList.remove('flex');
	closeExpansPlanOneButton.classList.add('hidden');
	openExpansPlanOneButton.classList.remove('hidden');
	openExpansPlanOneButton.classList.add('flex');

	contentPlanOne.style.maxHeight = '100px';
});

// Button Two functionality
openExpansPlanTwoButton.addEventListener('click', () => {
	openExpansPlanTwoButton.classList.remove('flex');
	openExpansPlanTwoButton.classList.add('hidden');
	closeExpansPlanTwoButton.classList.remove('hidden');
	closeExpansPlanTwoButton.classList.add('flex');

	contentPlanTwo.style.maxHeight = '600px';
});
closeExpansPlanTwoButton.addEventListener('click', () => {
	closeExpansPlanTwoButton.classList.remove('flex');
	closeExpansPlanTwoButton.classList.add('hidden');
	openExpansPlanTwoButton.classList.remove('hidden');
	openExpansPlanTwoButton.classList.add('flex');

	contentPlanTwo.style.maxHeight = '100px';
});

// Button Three functionality
openExpansPlanThreeButton.addEventListener('click', () => {
	openExpansPlanThreeButton.classList.remove('flex');
	openExpansPlanThreeButton.classList.add('hidden');
	closeExpansPlanThreeButton.classList.remove('hidden');
	closeExpansPlanThreeButton.classList.add('flex');

	contentPlanThree.style.maxHeight = '600px';
});
closeExpansPlanThreeButton.addEventListener('click', () => {
	closeExpansPlanThreeButton.classList.remove('flex');
	closeExpansPlanThreeButton.classList.add('hidden');
	openExpansPlanThreeButton.classList.remove('hidden');
	openExpansPlanThreeButton.classList.add('flex');

	contentPlanThree.style.maxHeight = '100px';
});

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
