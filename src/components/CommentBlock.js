import React, {useState, useEffect} from "react";
import moment from 'moment'
import ReactMarkdown from 'react-markdown'



export default function CommentBlock(props) {
	
	const fetchSingleComment = async () => {
		let url = "https://api.github.com/repos/facebook/react/issues/19073/comments";
		let data = await fetch(url);
		let result = await data.json();
		setSingleComment(result)
	};

	useEffect(() => {
		fetchSingleComment();
	}, [])

	const [singleComment, setSingleComment] = useState(null)

	if (singleComment == null){
		return <div>Loading</div>
	}


	return (
	<div>

		{singleComment.map((item, index) =>{

			return (

		<table  width="800">
			<thead>
				<tr align="left" bgcolor="#eeeeee">
					<th width="50"><img width="50" src={item.user.avatar_url}></img></th>
					<th style={{paddingLeft:"10px"}}>{`${item.user.login}`}<span style={{fontWeight:"normal"}}>{` commented: ${moment(item.created_at).fromNow()}`}</span></th>
					<th></th>
					<th className="text-right">Emoji Here</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td className="text-right" padding="5">{`ID: ${item.user.id}`}</td>
				</tr>
				<tr>
					<td></td>
					<td colSpan="3" align="left" className="ArticleCopy"><ReactMarkdown source={item.body}/></td>
				</tr>
				</tbody>
		</table>
				
		)
})}	
</div>
	)
}
