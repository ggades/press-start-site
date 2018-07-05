class PressStart {
	constructor() {
		this.highlightArrow();
		this.scaleTitle();
	}
	
	scaleTitle() {
		const title = document.querySelector("h1");
		setTimeout(() => {
			title.classList += 'ready';
		}, 1000);
	}
	
	highlightArrow() {
		const arrow = document.querySelector(".title-arrow");
		let show = true;
		
		setInterval(() => {
			if (show) {
				arrow.style.display = "none";
				show = false;
			} else {
				arrow.style.display = "inline";
				show = true;
			}
				
		}, 500);
	}
}

new PressStart();
