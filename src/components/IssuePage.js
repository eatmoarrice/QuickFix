import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import OriginalPost from "./OriginalPost";
import CommentBlock from "./CommentBlock";
import IssuePageHeader from "./IssuePageHeader";
import Reply from "./Reply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function IssuePage(props) {
	const [issueInfo, setInfo] = useState(null);
	const urlParams = props.match.params;
	let history = useHistory();
	const getIssues = async () => {
		// console.log("issues here");

		let url = `https://api.github.com/repos/${urlParams.owner}/${urlParams.repo}/issues/${urlParams.issueID}`;
		let data = await fetch(url);
		if (data.status == 404) {
			return history.push("/404");
		}
		let result = await data.json();

		setInfo(result);
		console.log("result", result);
		// console.log("result", result);
	};
	useEffect(() => {
		getIssues();
	}, []);

	if (issueInfo === null || issueInfo === undefined) {
		return <div>loading</div>;
	}
	return (
		<div className="container">
			<div className="d-flex justify-content-between mt-3">
				<h3 className="address">
					<FontAwesomeIcon icon="robot" className="roboticon" />
					{urlParams.owner}/{urlParams.repo}
				</h3>
				<Link to={`/${urlParams.owner}/${urlParams.repo}/issues/new`}>
					<Button variant="success">New Issue</Button>
				</Link>
			</div>
			<hr></hr>
			<IssuePageHeader issueInfo={issueInfo} owner={urlParams.owner} repo={urlParams.repo} issueID={urlParams.issueID} />
			<div className="row">
				<div className="col-md-8 col-12 border-right">
					<OriginalPost issueInfo={issueInfo} />
					<CommentBlock owner={urlParams.owner} repo={urlParams.repo} issueID={urlParams.issueID} />
					<Reply owner={urlParams.owner} repo={urlParams.repo} issueID={urlParams.issueID} />
				</div>
				<div className="col-md-4 d-md-block d-none">
					<SideBar issueInfo={issueInfo} />
				</div>
			</div>
		</div>
	);
}
