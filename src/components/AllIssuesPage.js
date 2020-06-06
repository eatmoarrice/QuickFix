import React from "react";
import IssueSearchBar from "./IssueSearchBar";
import IssueBlock from "./IssueBlock";

export default function AllIssuesPage(props) {
	const urlParams = props.match.params;
	return (
		<div>
			<IssueSearchBar />
			<IssueBlock owner={urlParams.owner} repo={urlParams.repo} issueID={urlParams.issueID} />
		</div>
	);
}
