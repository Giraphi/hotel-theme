/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import Glide from "@glidejs/glide";

// class HeroSlider {
// 	constructor() {
// 		const allSlideshows = document.querySelectorAll(".hero-slider");
// 		allSlideshows.forEach(function (currentSlideshow) {
// 			// count how many slides there are
// 			const dotCount = currentSlideshow.querySelectorAll(
// 				".hero-slider__slide",
// 			).length;

// 			// Generate the HTML for the navigation dots
// 			// let dotHTML = "";
// 			// for (let i = 0; i < dotCount; i++) {
// 			// 	dotHTML += `<button class="slider__bullet glide__bullet" data-glide-dir="=${i}"></button>`;
// 			// }

// 			// Add the dots HTML to the DOM
// 			currentSlideshow
// 				.querySelector(".glide__bullets")
// 				.insertAdjacentHTML("beforeend", dotHTML);

// 			// Actually initialize the glide / slider script
// 			var glide = new Glide(currentSlideshow, {
// 				type: "carousel",
// 				perView: 1,
// 				autoplay: 3000,
// 			});

// 			glide.mount();
// 		});
// 	}
// }

new Glide(".glide").mount();

// const heroSlider = new HeroSlider();
