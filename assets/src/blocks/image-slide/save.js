import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save(props) {
	const blockProps = useBlockProps.save({
		className: "swiper-slide htl-image-slide",
	});

	return (
		<div {...blockProps}>
			{props.attributes.imgURL ? (
				<div className="htl-image-slide__container">
					<img
						src={props.attributes.imgURL}
						className="htl-image-slide__image"
					></img>
				</div>
			) : (
				<p>No image selected</p>
			)}
		</div>
	);
}
