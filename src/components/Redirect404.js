import React from "react";
import { useHistory } from "react-router-dom";

export default function Redirect404() {
	let history = useHistory();
	history.push("/404");
	return <div></div>;
}
