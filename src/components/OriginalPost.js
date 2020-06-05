import React, {useState, useEffect} from "react";

export default function OriginalPost() {

	const fetchSingleIssue = async () => {
		console.log("issues here");
		let url = "https://api.github.com/repos/facebook/react/issues/19073/comments";
		let data = await fetch(url);
		let result = await data.json();
		setSingleIssue(result)
		
	};

	useEffect(() => {
		fetchSingleIssue();
	}, [])

	const [singleIssue, setSingleIssue] = useState(null)
	
	if (singleIssue == null){
		return <div>Loading</div>
	}
	return <div>

		{/* {singleIssue.title} */}
	</div>;
}
