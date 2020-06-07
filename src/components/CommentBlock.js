
import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "./CodeBlock";
import Reply from "./Reply";
import Dropdown from "react-bootstrap/Dropdown";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function CommentBlock(props) {
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);
	const reactionTypeToEmoji = {
		THUMBS_UP: "👍",
		THUMBS_DOWN: "👎",
		LAUGH: "😆",
		HOORAY: "🎉",
		CONFUSED: "😕",
		HEART: "❤️"
		
	};

	const fetchSingleComment = async () => {
		let url = `https://api.github.com/repos/${props.owner}/${props.repo}/issues/${props.issueID}/comments`;
		let data = await fetch(url);
		let result = await data.json();
		setSingleComment(result);
		console.log(result);
		fetchEmojies();
	};

	const fetchEmojies = async () => {
		let url = "https://api.github.com/repos/facebook/react/comments/19073/reactions";
		let data = await fetch(url);
		let result = await data.json();
		setReaction(result);
		console.log("emojoies", result);

	};

	useEffect(() => {
		fetchSingleComment();
	}, []);

	const [singleComment, setSingleComment] = useState(null);
	const [reaction, setReaction] = useState(null);

	const reply = () => {
		executeScroll();
	};

	if (singleComment == null) {
		return <div>Loading</div>;
	}

	return (
		<div style={{ marginTop: "20px" }}>
			{singleComment.map((item, index) => {
				return (
					<table key={item.id} width="800">
						<thead>
							<tr height="50" align="left" bgcolor="#eeeeee">
								<th width="50">
									<img className="avatar" width="50" src={item.user.avatar_url}></img>
								</th>
								<th width="650" style={{ marginLeft: "10px" }}>
									<i className="fa fa-caret-left"></i>
									{`  ${item.user.login}`}
									<span style={{ fontWeight: "normal" }}>{` commented: ${moment(item.created_at).fromNow()}`}</span>
								</th>
								<th></th>
								<th>
									<button
										className="replyBtn"
										onClick={() => reply()}
										style={{ backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "15px", paddingLeft: "15px", paddingRight: "15px", fontWeight: "bold" }}
									>
										Reply
									</button>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td style={{ borderLeft: "solid 1px #eeeeee" }}></td>
								<td></td>
								<td className="text-right" style={{ paddingRight: "10px", borderRight: "solid 1px #eeeeee" }}>{`ID: ${item.user.id}`}</td>
							</tr>
							<tr>
								<td></td>
								<td
									colSpan="3"
									align="left"
									className="ArticleCopy"
									style={{ paddingBottom: "10px", paddingLeft: "10px", borderLeft: "solid 1px #eeeeee", borderRight: "solid 1px #eeeeee", borderBottom: "solid 1px #eeeeee" }}
								>
									<ReactMarkdown key={index} source={item.body} renderers={{ code: CodeBlock }} />
								</td>
							</tr>
							<tr height="50">
								<td></td>
								<td className="text-left" style={{ paddingLeft: "10px" }}>
									Total Reactions
								</td>
								<td></td>
								<td>
									<Dropdown>
										<Dropdown.Toggle variant="secondary" id="dropdown-basic">
											😆
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">👍</Dropdown.Item>
											<Dropdown.Item href="#/action-2">👎</Dropdown.Item>
											<Dropdown.Item href="#/action-3">😆</Dropdown.Item>
											<Dropdown.Item href="#/action-4">🎉</Dropdown.Item>
											<Dropdown.Item href="#/action-5">😕</Dropdown.Item>
											<Dropdown.Item href="#/action-6">❤️</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</td>
							</tr>
						</tbody>
					</table>
				);
			})}
			<div ref={myRef} style={{ marginBottom: "100px" }}>
				<Reply />
			</div>
		</div>
	);
}

