import { useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save({ className: "htl-contact-form" });

	return <div {...blockProps}></div>;
}
