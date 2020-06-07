import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div>
			<Jumbotron>
				<h1>QuickFix: 404 Page Not Found</h1>
				<p>The page you are looking for cannot be found my dear and beloved friend.</p>
				<p>
					<img src="https://cdn.pixabay.com/photo/2014/04/03/09/57/detective-309445_960_720.png" width="100px" alt="person looking" className="mr-2" />
					<Link to="/">
						<Button variant="primary">Home</Button>
					</Link>
				</p>
			</Jumbotron>
		</div>
	);
}
