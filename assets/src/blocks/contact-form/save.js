import { useBlockProps } from "@wordpress/block-editor";
import { Input } from "antd";

export default function Save() {
	const blockProps = useBlockProps.save({ className: "htl-contact-form" });

	return (
		<div {...blockProps}>
			<h3 class="htl-contact-form__headline">Contact</h3>
			<p>
				If you want to request the room or have any questions, use this form to
				contact us:
			</p>

			<div className="htl-contact-form__inputs">
				<input className={"htl-contact-form__input"} placeholder="Name" />
				<input className={"htl-contact-form__input"} placeholder="E-Mail" />
				<textarea
					type=""
					className={"htl-contact-form__textarea"}
					placeholder="Message ..."
				/>
			</div>
			<button className={"htl-contact-form__submit"}>Submit</button>
		</div>
	);
}
