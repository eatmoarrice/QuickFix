import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
export default function OriginalPost(props) {
	return (
		<div className="text-left">
			<ReactMarkdown source={props.issueInfo.body} renderers={{ code: CodeBlock }} />
		</div>
	);
}
