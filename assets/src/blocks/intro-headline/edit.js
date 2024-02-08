import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Edit(props) {
	const blockProps = useBlockProps({ className: "htl-intro-headline" });

	function handleTextChange(update) {
		props.setAttributes({ text: update });
	}

	return (
		<div {...blockProps}>
			<RichText
				allowedFormats={["core/italic"]}
				tagName="h1"
				className={`htl-intro-headline__headline`}
				value={props.attributes.text}
				onChange={handleTextChange}
			/>
		</div>
	);
}
