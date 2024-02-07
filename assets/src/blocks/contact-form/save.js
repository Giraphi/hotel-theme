import { useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save({
		className: "htl-contact-form htl-js-contact-form",
	});

	return (
		<div {...blockProps}>
			<h3 class="htl-contact-form__headline">Contact</h3>
			<p>
				If you want to request the room or have any questions, use this form to
				contact us:
			</p>

			<div className="htl-contact-form__inputs">
				<input
					className={"htl-contact-form__input htl-js-contact-form__input-name"}
					placeholder="Name"
				/>
				<input
					className={"htl-contact-form__input htl-js-contact-form__input-email"}
					placeholder="E-Mail"
				/>
				<textarea
					type=""
					className={
						"htl-contact-form__textarea htl-js-contact-form__input-message"
					}
					placeholder="Message ..."
				/>
			</div>
			<button
				className={"htl-contact-form__submit htl-js-contact-form__submit"}
			>
				Submit
			</button>

			<h3 className="htl-contact-form__confirmation">
				Thank you for your message. We will contact you soon.
			</h3>
		</div>
	);
}
