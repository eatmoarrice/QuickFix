import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import OriginalPost from "./OriginalPost";
import CommentBlock from "./CommentBlock";
import IssuePageHeader from "./IssuePageHeader";

export default function IssuePage(props) {
	const [issueInfo, setInfo] = useState(null);
	const urlParams = props.match.params;
	const getIssues = async () => {
		// console.log("issues here");

		let url = `https://api.github.com/repos/${urlParams.owner}/${urlParams.repo}/issues/${urlParams.issueID}`;
		let data = await fetch(url);
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
			<IssuePageHeader issueInfo={issueInfo} />
			<div className="row">
				<div className="col-md-8 col-12">
					<OriginalPost issueInfo={issueInfo} />
					<CommentBlock owner={urlParams.owner} repo={urlParams.repo} issueID={urlParams.issueID} />
				</div>
				<div className="col-md-4 d-md-block d-none">
					<SideBar issueInfo={issueInfo} />
				</div>
			</div>
		</div>
	);
}
