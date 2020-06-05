import React from "react";
import IssueBlockHeader from "./IssueBlockHeader";
import IssueBlockIssue from "./IssueBlockIssue";
import Pagination from "./Pagination";

export default function IssueBlock(props) {
	// a function to process data and arrange it into an array of <IssueBlockIssue/>
	return (
		<div>
			This is an issue block.
			<IssueBlockHeader />
			<div>
				{/* array of <IssueBlockIssue/> */}
				Issues here.
			</div>
			<Pagination />
		</div>
	);
}
