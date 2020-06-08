import React, { useState, useEffect } from "react";
import IssueBlockHeader from "./IssueBlockHeader";
import IssueBlockIssue from "./IssueBlockIssue";
import parse from "parse-link-header";
import { useHistory } from "react-router-dom";

export default function IssueBlock(props) {
	const [info, setInfo] = useState(null);
	const [pagebuttons, setPagebuttons] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(null);
	const [simpleURL, setsimpleURL] = useState(null);
	let history = useHistory();
	let pageNumbers = [];
	const getIssues = async () => {
		let url = `https://api.github.com/repos/${props.owner}/${props.repo}/issues`;
		let data = await fetch(url);
		if (data.status == 404) {
			return history.push("/404");
		}
		let result = await data.json();
		setInfo(result);
		let links = parse(data.headers.get("Link"));
		if (links !== null) {
			console.log(parse(data.headers.get("Link")));
			let totalPages = parseInt(links.last.page);
			let bareURL = links.last.url.split("=")[0];
			calculatePages(totalPages, bareURL);
			console.log(totalPages, bareURL);
			setPages(totalPages);
			setsimpleURL(bareURL);
		} else {
			calculatePages(1, url);
		}
	};

	const getIssuesForPage = async (pageURL) => {
		let data = await fetch(pageURL);
		if (data.status == 404) {
			return history.push("/404");
		}
		let result = await data.json();
		setInfo(result);
	};

	const calculatePages = (totalPages, bareURL) => {
		pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			let active = currentPage == i ? "active" : "";
			pageNumbers.push(
				<li className={`page-item`} key={`button-${i}`} onClick={() => goToPage(i, bareURL)}>
					{/* <li className={`page-item ${active}`} key={`button-${i}`} onClick={() => goToPage(i, bareURL)}></li> */}
					<a href="#" className="page-link">
						{i}
					</a>
				</li>
			);
		}
		setPagebuttons(pageNumbers);
	};
	const goToPage = (i, bareURL) => {
		setCurrentPage(i);
		getIssuesForPage(`${bareURL}=${i}`);
		console.log(currentPage, pages, simpleURL);
	};
	useEffect(() => {
		getIssues();
	}, []);
	const item = () => {
		return info.map((item, i) => <IssueBlockIssue info={item} key={i} owner={props.owner} repo={props.repo} />);
	};
	if (info === null || pagebuttons.length === 0) {
		return <div>Loading</div>;
	}
	return (
		<div>
			<div className="bigIssue">{item()}</div>
			<IssueBlockHeader />
			{/* <Pagination /> */}
			<div className="d-flex justify-content-center">
				<ul className="pagination">{pagebuttons}</ul>
			</div>
			{/* {links === null ? <div>1 page </div> : calculatePages()} */}
		</div>
	);
}
