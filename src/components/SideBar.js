import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function SideBar(props) {
	return (
		<div>
			<ListGroup variant="flush">
				<ListGroup.Item>
					Assignees:{" "}
					{props.issueInfo.assignees.length === 0 ? (
						<span>No one assigned</span>
					) : (
						props.issueInfo.assignees.map((item) => {
							return (
								<span>
									<img src={item.avatar_url} width="25px" /> {item.login}{" "}
								</span>
							);
						})
					)}
				</ListGroup.Item>
				<ListGroup.Item>
					Labels:{" "}
					{props.issueInfo.labels.length === 0 ? (
						<span>None</span>
					) : (
						props.issueInfo.labels.map((item, i) => {
							return (
								<span className="badge badge-warning" key={i}>
									{item.name}
								</span>
							);
						})
					)}
				</ListGroup.Item>
				<ListGroup.Item>Projects: Awsome project</ListGroup.Item>
				<ListGroup.Item>Milestone: {props.issueInfo.milestone}</ListGroup.Item>
				<ListGroup.Item>Linked pull request: Successfully merging a pull request may close this issue.</ListGroup.Item>
			</ListGroup>
		</div>
	);
}
