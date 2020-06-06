import React, {useState,useEffect}from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css'
import OriginalPost from "./OriginalPost";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IssueBlockIssue(props) {
	const clickTitle = (id) =>{
		 console.log('id issue', id);
		
	}
	return(
		<div className="mg"  onClick={()=>clickTitle(props.info.number)}>
			<div className="flex">
				
			<FontAwesomeIcon icon={faInfoCircle} className="icon" style={{marginLeft: 30}}/><a href={`/facebook/react/${props.info.number}`}><h3 style={{fontSize:18,marginLeft: 20, marginTop: 10}}>{props.info.title}</h3></a>
				<h3 style={{marginLeft: 30, backgroundColor: "#d4c5f9", fontSize: 14,paddingTop:5,height:25,}}>{props.info.labels[0].name}</h3>
				<h4 style={{marginLeft: 30}}>{props.info.comments}</h4>
			</div>
			<div className="flexx">
			<h5 className="space">#{props.info.number}</h5>
				<h5>{props.info.state}</h5>
				<h5>{ moment(props.info.updated_at).fromNow()}</h5>
			</div>
		
			</div>
	)
}
