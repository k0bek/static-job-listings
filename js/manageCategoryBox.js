import { filterJobs } from "./filterJobs.js";

let clickedBtnArr = [];

function addCategoryToBox(e) {
	const currentCategory = e.target;

	if (clickedBtnArr.includes(currentCategory.textContent)) return;

	if (currentCategory.classList.contains("offer-categories__category")) {
		const categoriesBox = document.querySelector(".categories-box");
		categoriesBox.classList.add("categories-box-active");

		const categories = document.querySelector(".categories");
		clickedBtnArr.push(currentCategory.textContent);

		const lastCategoryInBox = clickedBtnArr.slice(-1)[0];

		const category = document.createElement("div");
		category.classList.add("category");

		const categoryName = document.createElement("span");
		categoryName.classList.add("category__name");
		categoryName.textContent = lastCategoryInBox;

		const categoryBtn = document.createElement("button");
		categoryBtn.classList.add("category__btn");

		const categoryBtnCross = document.createElement("i");
		categoryBtnCross.className = "fa-solid fa-xmark";

		category.append(categoryName, categoryBtn);
		categoryBtn.append(categoryBtnCross);
		categories.append(category);
	}

	deleteCategoryBox(e);
	filterJobs(clickedBtnArr);
}

function deleteCategoryBox(e) {
	const categoryToDelete = e.target;

	if (categoryToDelete.className === "categories-box__clear-btn") {
		document
			.querySelector(".categories-box")
			.classList.remove("categories-box-active");
		document.querySelector(".categories").textContent = "";
		clickedBtnArr = [];
	}

	if (categoryToDelete.className === "category__btn") {
		const clickedCategory = categoryToDelete.parentElement;
		const categoryName = categoryToDelete.previousElementSibling.textContent;

		const clickedBoxIndex = clickedBtnArr.indexOf(categoryName);

		clickedBtnArr.splice(clickedBoxIndex, 1);
		clickedCategory.style.display = "none";
	}

	clickedBtnArr.length === 0
		? document
				.querySelector(".categories-box")
				.classList.remove("categories-box-active")
		: null;
}

document.addEventListener("click", (e) => addCategoryToBox(e));
