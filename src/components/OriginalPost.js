import React, { useState, useEffect } from "react";

import { Container, Row, Col } from 'react-bootstrap'




 import moment from 'moment'


export default function OriginalPost(props) {
	const [issueInfo, setInfo] = useState(null)


	const getIssues = async () => {
		console.log("issues here");
		let url = "https://api.github.com/repos/facebook/react/issues/19073";
		let data = await fetch(url);
		let result = await data.json();
		setInfo(result)
		console.log("result", result);
	};



	const postedAt = () => {
		let vinh = moment(issueInfo.updated_at)

		let date = moment(vinh).fromNow()
		console.log("date", date)
		return date
	}



	useEffect(() => {
		getIssues()


	}, [])

	if (issueInfo === null) {
		return <div>loading</div>
	}

	return <div className="d-flex justify-content-between">

		<div>
			<h4>
				{issueInfo.title} #{issueInfo.number}
			</h4>
			<div >
				<span className="badge badge-success"> {issueInfo.state}</span>
				&nbsp;
				<span className="font-weight-bold">{issueInfo.user.login}</span> opened this issue&nbsp;
			 {postedAt()}
				&nbsp; · &nbsp;{issueInfo.comments} Comments
			</div>
		</div>
		<div>
			<button className="badge badge-success">
				New Issue
			</button>
		</div>
	</div>

}

