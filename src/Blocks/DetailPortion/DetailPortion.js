import React , { Component} from 'react';
import axios from 'axios';

import "./DetailPortion.css";

export default class DetailPortion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			movieId : this.props.movieId,
		}

	}
	



	render(){
			console.log("movieId====>",this.state.movieId);
		return (

			<div className="DetailPart col-lg-7 ">
				<div className="detailBox">
					<div className="imgBox"></div>
					<h2 className="movName">Hard Kill (2020)</h2>
					<h4 className="relaseDate">09/18/2020 (US)</h4>
					<h4 className="abtMov">Horror, Thriller</h4>
					<h4 className="duration">1h 29m</h4>
					<div className="overview">Overview</div>
					<p className="movPara">A severely injured man and woman awake in an abandoned sanitarium only to discover that a sadistic caretaker holds the keys to their freedom and the horrific answers as to their true identity.</p>
					<div className="nameBox">
						<div className="name">Rob Grant</div>
						<div className="post">Director</div>
					</div>
					
					
				</div>

			</div>

			)
	}
}