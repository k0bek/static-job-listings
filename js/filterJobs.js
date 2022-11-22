export function filterJobs(clickedBtnArr) {
	const offerCategories = Array.from(
		document.querySelectorAll(".offer-categories")
	);

	let categoryJobs = [];

	offerCategories.forEach((offer) => {
		const offerParentElement = offer.parentElement;
		const offerChildren = [...offer.children];

		offerChildren.forEach((el) => categoryJobs.push(el.textContent));

		offerParentElement.style.display = "none";

		if (clickedBtnArr.every((btn) => categoryJobs.includes(btn))) {
			offerParentElement.style.display = "flex";
		}

		categoryJobs = [];
	});
}
