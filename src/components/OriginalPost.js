import React, { useState, useEffect } from "react";

import { Container, Row, Col } from 'react-bootstrap'



export default function OriginalPost() {
	let [user,setUserState]=useState(null);

	const getOriginalPost = async () => {
		console.log("issues here");
		let url = "https://api.github.com/repos/alacritty/alacritty/issues/3820";
		let data = await fetch(url);
		let result = await data.json();
		setUserState(result)
		console.log(result);
	};

	let commentList = [];




	const saveStorage = () => {
		localStorage.setItem("commentList", JSON.stringify(commentList));

	}
	useEffect(() => {
		getOriginalPost();
		
	}, [])
	if(user==null){
		return(
		<div>Loading</div>
		)}
	return <div className="d-flex" >
		
		
			<div>This is the pic profile</div>
			<div>This is the post</div>

		
	</div>;
}

