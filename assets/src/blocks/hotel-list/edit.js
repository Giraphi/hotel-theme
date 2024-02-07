import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	return <p {...useBlockProps()}>HOTEL-LIST BLOCK</p>;
}
