import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save({ className: "slider" });

	return (
		<div {...blockProps}>
			<div class="swiper">
				<div class="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
	);
}
