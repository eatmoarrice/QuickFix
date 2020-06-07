import React from "react";
import moment from "moment";

export default function IssuePageHeader(props) {
	const postedAt = () => {
		let time = moment(props.issueInfo.created_at);

		let date = time.fromNow();
		// console.log("date", date)

		return date;
	};

	return (
		<div className="d-flex justify-content-between border-bottom mb-4">
			<div>
				<h4>
					{props.issueInfo.title} #{props.issueInfo.number}
				</h4>

				<div className="text-left">
					<span className="badge badge-success"> {props.issueInfo.state}</span>
					&nbsp;
					<span className="font-weight-bold">{props.issueInfo.user.login}</span> opened this issue&nbsp;
					{postedAt()}
					&nbsp; · &nbsp;{props.issueInfo.comments} Comments
				</div>
			</div>

			<div>
				<button className="badge badge-success">New Issue</button>
			</div>
		</div>
	);
}
