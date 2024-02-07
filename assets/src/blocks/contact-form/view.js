selectors = {
	element: ".htl-js-contact-form",
	inputName: ".htl-js-contact-form__input-name",
	inputEmail: ".htl-js-contact-form__input-email",
	inputMessage: ".htl-js-contact-form__input-message",
	submitButton: ".htl-js-contact-form__submit",
};

class ContactForm {
	constructor(element) {
		console.log("constructor");
		this.element = element;
		this.init();
	}

	async submitForm() {
		const data = new FormData();
		data.append("action", "mail_before_submit");
		data.append("to", "hoeps.raphael@gmail.com");
		data.append("title", "Some title");
		data.append("text", "Some text");

		const rawResponse = await fetch(
			window.location.origin + "/wp-admin/admin-ajax.php",
			{
				method: "POST",
				body: data,
			},
		);

		this.element.classList.add("is-submitted");
	}

	init() {
		this.elements = {
			inputName: this.element.querySelector(selectors.inputName),
			inputEmail: this.element.querySelector(selectors.inputEmail),
			inputMessage: this.element.querySelector(selectors.inputMessage),
			submitButton: this.element.querySelector(selectors.submitButton),
		};

		this.elements.submitButton.addEventListener("click", (event) => {
			event.preventDefault();
			this.submitForm();
		});
	}
}

console.log("view.js");
document.querySelectorAll(selectors.element).forEach((element) => {
	console.log("element found");
	new ContactForm(element);
});
