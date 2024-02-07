import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Save(props) {
	const blockProps = useBlockProps.save({ className: "htl-intro-banner" });

	return (
		<div {...blockProps}>
			<RichText.Content
				value={props.attributes.text}
				tagName="h1"
				className={`htl-intro-banner__headline`}
			/>
		</div>
	);
}
