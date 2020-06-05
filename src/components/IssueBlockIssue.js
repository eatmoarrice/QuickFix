import React, {useState,useEffect}from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css'
import OriginalPost from "./OriginalPost";

export default function IssueBlockIssue(props) {
	const clickTitle = (id) =>{
		 console.log('id issue', id);
		 
	}
	return(
		<div className="mg haha  "  onClick={()=>clickTitle(props.info.number)}>
			<div className="flex">
				
				<a href={`/facebook/react/${props.info.number}`}><h3 >{props.info.title}</h3></a>
				<h3>{props.info.labels[0].name}</h3>
				<h3 >{props.info.comments}</h3>
			</div>
			<div className="flexx">
			<h5 className="space">#{props.info.number}</h5>
				<h5>{props.info.state}</h5>
				<h5>{ moment(props.info.updated_at).fromNow()}</h5>
			</div>
		
			</div>
	)
}
