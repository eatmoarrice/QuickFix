import React from "react";
import IssueSearchBar from "./IssueSearchBar";
import IssueBlock from "./IssueBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function AllIssuesPage(props) {
	const urlParams = props.match.params;
	return (
		<div>
			<div className="d-flex justify-content-between mx-5 mt-3">
				<h3 className="address">
					<FontAwesomeIcon icon="robot" className="roboticon" />
					{urlParams.owner}/{urlParams.repo}
				</h3>
				<Link to={`/${urlParams.owner}/${urlParams.repo}/issues/new`}>
					<Button variant="success">New Issue</Button>
				</Link>
			</div>
			<hr></hr>
			<IssueSearchBar />
			<IssueBlock owner={urlParams.owner} repo={urlParams.repo} issueID={urlParams.issueID} />
		</div>
	);
}
