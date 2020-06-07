import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavBarHey() {
	const [searchText, setSearchText] = useState("");
	let history = useHistory();
	const changeSearch = (e) => {
		setSearchText(e.target.value);
		console.log(searchText);
	};
	const startSearch = () => {
		history.push(`/${searchText}/issues`);
	};
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">QuickFix</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link to="/">Home</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl
							type="text"
							placeholder=":owner/:repo"
							className="mr-sm-2"
							onChange={(e) => {
								changeSearch(e);
							}}
						/>
						<Button variant="outline-success" onClick={() => startSearch()}>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
