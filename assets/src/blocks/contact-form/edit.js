import "./editor.scss";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit(props) {
	return <div {...useBlockProps()}>CONTACT FORM BLOCK</div>;
}
