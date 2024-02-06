import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes: {
		text: { type: "string", default: "Default Text" },
	},
	edit: Edit,
	save: Save,
});
