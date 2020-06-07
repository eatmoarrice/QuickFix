import React, { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function SideBar() {
	const [sideBarInfo, setSideBar] = useState(null)

	const getSideBarInfo = async () => {

		let url = "https://api.github.com/repos/facebook/react/issues/19073";
		let data = await fetch(url);
		let result = await data.json();
		setSideBar(result)
		console.log(" side bar result", result);
	};

	useEffect(() => {

		getSideBarInfo();

	}, [])
	if (sideBarInfo === null) {
		return <div>Sidebar is loading</div>
	}

	return (<div>
		<ListGroup variant="flush">
	<ListGroup.Item>Assignees: No one assigned</ListGroup.Item>
	<ListGroup.Item>Labels: bug</ListGroup.Item>
	<ListGroup.Item>Projects: Awsome project</ListGroup.Item>
	<ListGroup.Item>Milestone: {sideBarInfo.milestone}</ListGroup.Item>
	<ListGroup.Item>Linked pull request: Successfully merging a pull request may close this issue.

None yet</ListGroup.Item>
		</ListGroup>
	</div>);
}
