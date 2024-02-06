import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes: {
		imgID: { type: "string", default: "" },
		imgURL: { type: "string", default: "" },
	},
	edit: Edit,
	save: Save,
});
