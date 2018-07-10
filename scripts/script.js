class PressStart {
	constructor() {
		this.highlightArrow();
		this.scaleTitle();
		this.bindEvents();
	}

	scaleTitle() {
		const title = document.querySelector('h1');
		setTimeout(() => {
			title.classList += 'ready';
		}, 1000);
	}

	highlightArrow() {
		const arrow = document.querySelector('.title-arrow');
		let show = true;

		setInterval(() => {
			if (show) {
				arrow.style.display = 'none';
				show = false;
			} else {
				arrow.style.display = 'inline';
				show = true;
			}

		}, 500);
	}

	bindEvents() {
		const links = document.querySelectorAll('.scroll-to');
		const self = this;
		for (let i=0; i < links.length; i++) {
			links[i].addEventListener('click', this.scrollTo, false);
		}
	}

	scrollTo(e) {
		e.preventDefault();
		const target = e.target;
		const id = target.getAttribute('href');
		const section = document.querySelector(id);
		const top = section.offsetTop;
		console.log(top);
		window.scroll({ top: top - 60, left: 0, behavior: 'smooth' });
	}
}

new PressStart();
