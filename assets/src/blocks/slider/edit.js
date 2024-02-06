import { InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit(props) {
	return (
		<>
			<div {...useBlockProps()}>
				<div className="wp-block-hotel-theme-slider__headline">
					SLIDER BLOCK
				</div>
				<div className="wp-block-hotel-theme-slider__images">
					<InnerBlocks allowedBlocks={["hotel-theme/image-slide"]} />
				</div>
			</div>
		</>
	);
}
