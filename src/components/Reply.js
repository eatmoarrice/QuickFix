import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Reply(props) {

	let [replyMessage, setReplyMessage]=useState('')

	const postNewReply = async () => {
		console.log("reply",replyMessage)
		console.log("token", props.token)
		const issue = { title: "here is the issue", body: {replyMessage} };

		const url = `https://api.github.com/repos/legobitna/itviec/issues`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: "token" + props.token
			},
			body: JSON.stringify(issue)
		});
	};

	return <div>
	

		{/* Here is Reply and token is {props.token} */}
		<table width="800" style={{marginTop:"20px"}}>
			<tbody>
				<tr>
					<td width="50">
					</td>
					<td style={{backgroundColor:"#eeeeee", borderTopLeftRadius:"20px", borderTopRightRadius:"20px", padding:"10px"}}>
						<b>Reply</b>
					</td>
				</tr>
				<tr>
					<td width="50">
					</td>
					<td>
						<form>
							<Form.Group style={{resize:"none", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px", padding:"10px", width:"100%", border:"#eeeeee solid 1px", marginTop:"-1px"}}name="message" rows="10" controlId="exampleForm.ControlTextarea1">
    						<Form.Control as="textarea" rows="10" placeholder="message" value={replyMessage} onInput={e => setReplyMessage(e.target.value)}/>
 					 		</Form.Group>
							<Button onClick={()=>postNewReply()} variant="primary">Submit</Button>
						</form>
					</td>
				</tr>
			</tbody>
		</table>
	</div>;

