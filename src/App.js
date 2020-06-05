import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import IssueSearchBar from "./components/IssueSearchBar";
import IssueBlock from "./components/IssueBlock";
import PostIssue from "./components/PostIssue";
import OriginalPost from "./components/OriginalPost";
import CommentBlock from "./components/CommentBlock";
import SideBar from "./components/SideBar";
import Reply from "./components/Reply";
import "bootstrap/dist/css/bootstrap.min.css";
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
		getIssues();
		getToken();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				{/* <button onClick={() => getIssues()}>issues</button> */}
				<NavBar />
				<Switch>
					<Route path="/" exact>
						stuff here
						<IssueSearchBar />
						<IssueBlock />
					</Route>
					<Route path="/:owner/:repo/new">
						<PostIssue token={token} />
					</Route>

					<Route path="/:owner/:repo/:issueID">
						<div className="row">
							<div className="col-md-8 col-12">
								<OriginalPost />
								<CommentBlock />
								<Reply token={token} />
							</div>
							<div className="col-md-4 d-md-block d-none">
								<SideBar />
							</div>
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
