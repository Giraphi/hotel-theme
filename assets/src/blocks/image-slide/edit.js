import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, Button } from "@wordpress/components";
import apiFetch from "@wordpress/api-fetch";
import "./editor.scss";

export default function Edit(props) {
	const blockProps = useBlockProps({ className: "glide__slide" });

	function onFileSelect(file) {
		props.setAttributes({ imgID: file.id });
		async function queryImageUrl() {
			const response = await apiFetch({
				path: `/wp/v2/media/${file.id}`,
				method: "GET",
			});
			props.setAttributes({
				imgURL: response.media_details.sizes.large.source_url,
			});
		}
		queryImageUrl();
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Image" initialOpen={true}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onFileSelect}
								value={props.attributes.imgID}
								render={({ open }) => {
									return <Button onClick={open}>Select Image</Button>;
								}}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{props.attributes.imgURL ? (
					<img src={props.attributes.imgURL}></img>
				) : (
					<p>Select image in settings on the right</p>
				)}
			</div>
		</>
	);
}
