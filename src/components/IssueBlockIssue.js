import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import OriginalPost from "./OriginalPost";
import { faInfoCircle, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import "../App.css";

export default function IssueBlockIssue(props) {
	const clickTitle = (id) => {
		console.log("id issue", id);
	};
	const loadingLabels = () => {
		// return props.info.map(item => {
		// 	return(<h3>{item.labels[0].name}</h3>)
		// })
		if (props.info.labels[0] == null || props.info.labels[0] == "dependencies") {
			return;
		} else
			return props.info.labels.map((id) => {
				return (
					<div>
						<Badge class="badgess" style={{ marginLeft: 10, marginTop: 10 }} variant="success">
							{id.name}
						</Badge>
					</div>
				);
			});
		// console.log('labelne',props.info.labels.map(id => {return <div>{id.name}</div>}))
	};

	return (
		<div>
			<div className="mg" onClick={() => clickTitle(props.info.number)}>
				<div className="flex">
					<div style={{ display: "flex" }}>
						<FontAwesomeIcon icon={faInfoCircle} className="icon" style={{ marginLeft: 20 }} />
						<div className="flex1">
							<a href={`/${props.owner}/${props.repo}/issues/${props.info.number}`}>
								<h3 style={{ fontSize: 18, marginLeft: 20, marginTop: 10, textAlign: "left" }}>{props.info.title}</h3>
							</a>

							{loadingLabels()}
						</div>
					</div>

					<div className="flex-end">
						<FontAwesomeIcon icon={faCommentAlt} style={{ color: "#586069", marginRight: 5, marginTop: 4 }} />
						<h4 style={{ fontSize: 16, textAlign: "right" }}>{props.info.comments}</h4>
					</div>
				</div>

				<div className="flex1">
					<h5 style={{ marginLeft: 50 }}>#{props.info.number}</h5>
					<h5>{props.info.state}</h5>
					<h5>{moment(props.info.updated_at).fromNow()}</h5>
					<h5>by {props.info.user.login}</h5>
				</div>
			</div>
		</div>
	);
}
