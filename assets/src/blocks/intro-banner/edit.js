import "./editor.scss";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Edit(props) {
	const blockProps = useBlockProps({ className: "intro-banner" });

	function handleTextChange(update) {
		props.setAttributes({ text: update });
	}

	return (
		<div {...blockProps}>
			<RichText
				allowedFormats={["core/italic"]}
				tagName="h1"
				className={`intro-banner__headline`}
				value={props.attributes.text}
				onChange={handleTextChange}
			/>
		</div>
	);
}
