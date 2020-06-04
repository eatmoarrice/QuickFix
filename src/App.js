import React, { useState, useEffect } from "react";
import "./App.css";

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {
	const [token, setToken] = useState(null);
	const getToken = () => {
		const existingToken = localStorage.getItem("token");
		const accessToken = window.location.search.split("=")[0] === "?access_token" ? window.location.search.split("=")[1] : null;

		if (!accessToken && !existingToken) {
			window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`);
		}

		if (accessToken) {
			console.log(`New accessToken: ${accessToken}`);

			localStorage.setItem("token", accessToken);

			setToken(accessToken);
		}

		if (existingToken) {
			setToken(existingToken);
		}
	};
	const getIssues = async () => {
		console.log("issues here");
		let url = "https://api.github.com/repos/facebook/react/issues";
		let data = await fetch(url);
		let result = await data.json();
		console.log(result);
	};

	const postNewIssue = async () => {
		const issue = { title: "here is the issue", body: "help me to fix this" };
		const url = `https://api.github.com/repos/legobitna/itviec/issues`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `token ${token}`
			},
			body: JSON.stringify(issue)
		});
	};
	useEffect(() => {
		getToken();
	}, []);
	return (
		<div className="App">
			<button onClick={() => getIssues()}>issues</button>
		</div>
	);
}

export default App;
