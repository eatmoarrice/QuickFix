import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarHey from "./components/NavBar";
import PostIssue from "./components/PostIssue";
import PageNotFound from "./components/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IssuePage from "./components/IssuePage";
import HomePage from "./components/HomePage";
import AllIssuesPage from "./components/AllIssuesPage";
import Redirect404 from "./components/Redirect404";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faRobot);

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {
	const [token, setToken] = useState(null);
	const getToken = () => {
		const existingToken = localStorage.getItem("token");
		const accessToken = window.location.search.split("=")[0] === "?access_token" ? window.location.search.split("=")[1].split("&")[0] : null;

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
					<Route path="/:owner/:repo/issues/new" exact render={(props) => <PostIssue {...props} />} />
					{/* <PostIssue token={token} /> */}

					<Route path="/:owner/:repo/issues" exact component={AllIssuesPage} />

					<Route path="/:owner/:repo/issues/:issueID" exact render={(props) => <IssuePage {...props} />} />

					<Route path="/404">
						<PageNotFound />
					</Route>
					<Route component={Redirect404} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
