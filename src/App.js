import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarHey from "./components/NavBar";

// import IssueSearchBar from "./components/IssueSearchBar";
// import IssueBlock from "./components/IssueBlock";
import PostIssue from "./components/PostIssue";
// import OriginalPost from "./components/OriginalPost";
// import CommentBlock from "./components/CommentBlock";
// import SideBar from "./components/SideBar";
// import Reply from "./components/Reply";
import PageNotFound from "./components/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IssuePage from "./components/IssuePage";
import HomePage from "./components/HomePage";
import AllIssuesPage from "./components/AllIssuesPage";

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
		// console.log("issues here");
		let url = "https://api.github.com/repos/facebook/react/issues";
		let data = await fetch(url);
		let result = await data.json();

		console.log("result", result);
	};

	const postNewIssue = async () => {
		const issue = { title: "here is the issue", body: "help me to fix this" };
		const url = `https://api.github.com/repos/eatmoarrice/QuickFix/issues`;
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
		// getIssues();
		getToken();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				{/* <button onClick={() => getIssues()}>issues</button> */}

				<NavBarHey path="/test1" />

				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/new">
						<PostIssue token={token} />
					</Route>
					<Route path="/:owner/:repo/issues" exact component={AllIssuesPage} />

					<Route path="/:owner/:repo/new">
						<PostIssue token={token} />
					</Route>

					<Route path="/:owner/:repo/issues/:issueID" exact component={IssuePage} />

					<Route path="/test">
						<PageNotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
