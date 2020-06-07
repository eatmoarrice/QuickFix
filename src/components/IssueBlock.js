import React, { useState, useEffect } from "react";
import IssueBlockHeader from "./IssueBlockHeader";
import IssueBlockIssue from "./IssueBlockIssue";
import Pagination from "./Pagination";

export default function IssueBlock(props) {
	const [info, setInfo] = useState(null);

	const getIssues = async () => {
		console.log("issues here");
		let url = `https://api.github.com/repos/${props.owner}/${props.repo}/issues`;
		let data = await fetch(url);
		let result = await data.json();
		setInfo(result);
		console.log(result);
	};
	const postNewIssue = async () => {
		const issue = { title: "here is the issue", body: "help me to fix this" };
		let url = `https://api.github.com/repos/${props.owner}/${props.repo}/issues`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `token ${props.token}`
			},
			body: JSON.stringify(issue)
		});
	};
	useEffect(() => {
		getIssues();
	}, []);
	const item = () => {
		return info.map((item) => <IssueBlockIssue info={item} />);
	};
	if (info === null) {
		return <div>Loading</div>;
	}
	// a function to process data and arrange it into an array of <IssueBlockIssue/>
	return (
		<div>
			<div className="bigIssue">
			{item()}
		</div>


			<IssueBlockHeader />
			<div>
				{/* array of <IssueBlockIssue/> */}
				Issues here.
			</div>
			<Pagination />
		</div>
	);
}
