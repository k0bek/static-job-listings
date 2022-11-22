export function createOffer(offers) {
	const offersSection = document.querySelector(".offers");

	for (const offer of offers) {
		const {
			id,
			company,
			logo,
			newW,
			featured,
			position,
			role,
			level,
			postedAt,
			contract,
			location,
			languages,
			tools,
		} = offer;

		const newOffer = document.createElement("div");
		newOffer.className = "offer";
		newOffer.id = id;

		const offerButtons = [role, level, ...languages, ...tools];

		newOffer.innerHTML = `
		<div class="offer-desktop-view">
		  <div class="offer__img">
			<img src="${logo}" alt="">
		  </div>

		  <div class="offer-desc">

			<div class="offer-desc-top">
			  <p class="offer-desc-top__company-name">${company}</p>
			  <div class="offer-desc-top-features">
			    ${checkNew(offer)}
				${checkFeatures(offer)}
			  </div>
			</div>

			<p class="offer-desc__position">${position}</p>

			<ul class="offer-desc-details">
			  <li class="offer-desc-details__time offers-desc-details-text">${postedAt}</li>
			  <i class="fa-solid fa-circle"></i>
			  <li class="offer-desc-details__contract offers-desc-details-text">${contract}</li>
			  <i class="fa-solid fa-circle"></i>
			  <li class="offer-desc-details__place offers-desc-details-text">${location}</li>
			</ul>
			<hr>
		  </div>
		</div>

		<div class="offer-categories">
	 ${manageOfferButtons(offerButtons)}
		</div>
		`;

		offersSection.append(newOffer);

		if (featured) {
			newOffer.classList.add("offer-line");
		}
	}
}

function checkNew(offer) {
	if (offer.new) {
		return '<span class="offer-desc-top__new feature">NEW!</span>';
	} else {
		return "";
	}
}

function checkFeatures(offer) {
	if (offer.featured) {
		return '<span class="offer-desc-top__featured feature">FEATURED</span>';
	} else {
		return "";
	}
}

function manageOfferButtons(offerButtons) {
	return offerButtons
		.map(
			(offer) => `<button class="offer-categories__category">${offer}</button>`
		)
		.join("");
}
