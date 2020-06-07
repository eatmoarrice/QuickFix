import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";
import Emoji from "react-emoji-render";
import CodeBlock from "./CodeBlock";

export default function OriginalPost(props) {
	const myRef = useRef(null);
	const reactionTypeToEmoji = {
		THUMBS_UP: "👍",
		THUMBS_DOWN: "👎",
		LAUGH: "😆",
		FACE_WITH_ROLLING_EYES: "🙄",
		FACE_BLOWING_A_KISS: "😘",
		MONEY_MOUTH_FACE: "🤑"
	};

	return (
		<div>
			<div className="d-flex justify-content-between">
				<div>
					<table width="100%">
						<thead>
							<tr align="left" bgcolor="#eeeeee">
								<th width="50">
									<img width="50" src={props.issueInfo.user.avatar_url}></img>
								</th>
								{/* <th>{`${props.issueInfo.user.login} posted ${moment(props.issueInfo.created_at).fromNow()}`}</th> */}
								<th width="650" style={{ marginLeft: "10px" }}>
									<i className="fa fa-caret-left"></i>
									{`  ${props.issueInfo.user.login}`}
									<span style={{ fontWeight: "normal" }}>{` commented: ${moment(props.issueInfo.created_at).fromNow()}`}</span>
								</th>
								<th className="text-right"></th>
								<td>
									<div className="d-flex">
										<Dropdown className="mr-2">
											<Dropdown.Toggle className="minh-dropdown" id="dropdown-basic">
												😆
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item href="#/action-1">👍</Dropdown.Item>
												<Dropdown.Item href="#/action-2">👎</Dropdown.Item>
												<Dropdown.Item href="#/action-3">😆</Dropdown.Item>
												<Dropdown.Item href="#/action-4">🙄</Dropdown.Item>
												<Dropdown.Item href="#/action-5">😘</Dropdown.Item>
												<Dropdown.Item href="#/action-5">🤑</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
										<Dropdown>
											<Dropdown.Toggle className="minh-dropdown" id="dropdown-basic">
												...
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item href="#/action-1">Copy Link</Dropdown.Item>
												<Dropdown.Item href="#/action-2">Quote Reply</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</td>
							</tr>
						</thead>
						<tbody className="border">
							<tr>
								<td></td>
								<td className="border-left"></td>
								<td></td>
								<td className="text-right">{`ID: ${props.issueInfo.user.id}`}</td>
							</tr>
							<tr>
								<td></td>
								<td colSpan="3" className="InfoCopy text-left border-left" style={{ paddingRight: "20px", paddingLeft: "20px" }}>
									<ReactMarkdown source={props.issueInfo.body} renderers={{ code: CodeBlock }} />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
