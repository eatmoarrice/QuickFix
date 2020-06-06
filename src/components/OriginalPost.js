import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import Dropdown from 'react-bootstrap/Dropdown';
import "../App.css";
import Emoji from "react-emoji-render";









export default function OriginalPost(props) {
	const myRef = useRef(null)

	const [issueInfo, setInfo] = useState(null)




	const reactionTypeToEmoji = {
		THUMBS_UP: '👍',
		THUMBS_DOWN: '👎',
		LAUGH: '😆',
		FACE_WITH_ROLLING_EYES: '🙄',
		FACE_BLOWING_A_KISS: '😘',
		MONEY_MOUTH_FACE: '🤑'

	};


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

	return (<div>
		<div className="d-flex justify-content-between">

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
				<div>
					<table width="400">
						<thead>
							<tr align="left" bgcolor="#eeeeee">
								<th width="50"><img width="50" src={issueInfo.user.avatar_url}></img></th>
								<th>{`${issueInfo.user.login} commented: ${moment(issueInfo.created_at).fromNow()}`}</th>
								<th></th>
								<th className="text-right"></th>
								<td>
									<div className="d-flex" >
									<Dropdown className="mr-2" >
										<Dropdown.Toggle className="minh-dropdown" id="dropdown-basic" >
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
										<Dropdown.Toggle className="minh-dropdown"  id="dropdown-basic">
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
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td className="text-right">{`ID: ${issueInfo.user.id}`}</td>
							</tr>
							<tr>
								<td></td>
								<td colSpan="3" className="InfoCopy"><ReactMarkdown source={issueInfo.body} /></td>
							</tr>
						</tbody>
					</table>



				</div>





			</div>


			<div>
				<button className="badge badge-success">
					New Issue
			</button>
			</div>






		</div>



	</div>

	)
}

