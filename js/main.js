import * as createProduct from "./createProduct.js";
import * as manageCategoryBox from "./manageCategoryBox.js";
import * as filterJobs from "./filterJobs.js";
import { createOffer } from "./createProduct.js";

const DATA_JSON = "./data.json";

async function fetchJSON() {
	try {
		const productsAll = await fetch(DATA_JSON);
		const data = await productsAll.json();

		createOffer(data);
	} catch {
		console.error("We cannot find a response from a server. Please try later");
	}
}

fetchJSON();
