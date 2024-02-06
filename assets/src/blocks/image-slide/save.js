import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save(props) {
	const blockProps = useBlockProps.save({
		className: "swiper-slide image-slide",
	});

	return (
		<div {...blockProps}>
			{props.attributes.imgURL ? (
				<div className="image-slide__container">
					<img
						src={props.attributes.imgURL}
						className="image-slide__image"
					></img>
				</div>
			) : (
				<p>No image selected</p>
			)}
		</div>
	);
}
