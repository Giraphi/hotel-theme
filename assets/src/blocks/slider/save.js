import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save({ className: "slider" });

	return (
		<div {...blockProps}>
			<div class="glide">
				<div data-glide-el="track" class="glide__track">
					<ul class="glide__slides">
						<InnerBlocks.Content />
					</ul>
				</div>
			</div>
		</div>
	);
}
