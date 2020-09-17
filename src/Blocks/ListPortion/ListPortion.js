import React , { Component} from 'react';
import axios from 'axios';

import "./ListPortion.css";

import {connect} from 'react-redux';

 class ListPortion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results : [],
			movie : [],
			errorMsg : ''
		}

	}
	componentDidMount() {
		

		// this.getOneMovieDetail();
		axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=e65e3e05c4be826e3088635cf4c56d49")
		.then(response => {
			// console.log(response)
			this.setState({results: response.data});

		})
		.catch(err => {
			console.log(err)
			// this.setState({errorMsg: "error retriving data"})
		})
	}
	getOneMovieDetail(event){

		var id = event.currentTarget.id;

		var movieId = this.props.changeName(id);

	

		
		// console.log("event.currentTarget.id",event.currentTarget.id);
		axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=e65e3e05c4be826e3088635cf4c56d49")
		.then(response => {
			console.log(response)
			this.setState({movie: response.data});
		})
		.catch(err => {
			console.log(err)
			// this.setState({errorMsg: "error retriving data"})
		})
	}
	render(){
		console.log("t31 his.state.results",this.state.results);
		return (

			<div className="listPart col-lg-3 col-lg-offset-1">
				
					{
					
					this.state.results.results?
						this.state.results.results.map((element,index) =>{
							// console.log("element ",element);
							// console.log("element.data",element.id);
							// id={element.data.belongs_to_collection.id}
							// id={element.results[index].id}
						 return(

						 		 
						 		 <div   id={element.id} key={index} className="box1"  onClick={this.getOneMovieDetail.bind(this)}>
							 		 <div className="subBox">
							 		 <img className="subBoxImg" src={"https://image.tmdb.org/t/p/w200"+element.poster_path}></img>
							 		 </div>
									<h4 >{element.original_title}</h4>
									<h3 className="title"> vote average: {element.vote_average}</h3>
									<h3 className='title'> Released on : {element.release_date}</h3>
									<p className="para">{element.overview}</p>
								</div>
						 	)

						 }) 
					:
					<div>Bye</div>
				}

					
				

			</div>

			)
	}
}

/*const mapStateToProps = (state) => {
	return{

		movieId:state.movieId
 }
}

const mapDispatchToProps = (dispatch) => {
	return{

		changeName:(name) => {dispatch({type:'CHANGE_ID',payload:name})}
 }
}*/

const mapStateToProps = (state) => {
	return{

		name:state.name
 }
}

const mapDispatchToProps = (dispatch) => {
	return{

		changeName:(name) => {dispatch({type:'CHANGE_NAME',payload:name})}
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListPortion);