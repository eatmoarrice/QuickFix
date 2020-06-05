import React, { useState, useEffect } from "react";
import Media from 'react-bootstrap/Media';

export default function CommentBlock(props) {
	const [commentInfo, setComment] = useState(null)


	const getComments = async () => {
		console.log("issues here");
		let url = "https://api.github.com/repos/facebook/react/issues/19073";
		let data = await fetch(url);
		let result = await data.json();
		setComment(result)
		console.log("result", result);
	};







	useEffect(() => {
		getComments()


	}, [])

	if (commentInfo === null) {
		return <div>loading</div>
	}

	return <div>

		<div>
			<Media>
				<img
					width={64}
					height={64}
					className="mr-3"
					src={commentInfo.user.avatar_url}
					alt="Generic placeholder"
				/>
				<Media.Body>

					<p>
						{commentInfo.body}
					</p>
				</Media.Body>
			</Media>
		</div>

	</div>

}

