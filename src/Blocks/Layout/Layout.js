import React , { Component} from 'react';
import axios from 'axios';


import "./Layout.css";
export default class Layout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			results : [],
			movie : [],
			errorMsg : '',
			showDeatail: false,
			search:""
		}

	}
	componentDidMount() {
		
		var j=5;
		

			// this.getOneMovieDetail();
			axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=e65e3e05c4be826e3088635cf4c56d49")
			.then(response => {
				
				// for(var i=0,i<=response.data.length,i++){

					this.setState({results: response.data});
				// }

			})
			.catch(err => {
				console.log(err)
				// this.setState({errorMsg: "error retriving data"})
			})

		
	}

	handleChange(event){

		event.preventDefault();
		const target = event.target;
		const name = target.name;
		this.setState({[name]: event.target.value},()=>{

		// console.log("this.state.search");
			console.log("this.state.search",this.state.search);

			axios.get("https://api.themoviedb.org/3/search/movie?api_key=e65e3e05c4be826e3088635cf4c56d49&language=en-US&query="+this.state.search+"&page=1&include_adult=false")
				.then(response => {
					
					this.setState({

						results: response.data
					});

				})
				.catch(err => {
					console.log(err)
					
				})

		});



		
	}
	
	getOneMovieDetail(event){

		var id = event.currentTarget.id;
		
		console.log("event.currentTarget.id",event.currentTarget.id);

		axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=e65e3e05c4be826e3088635cf4c56d49")
		.then(response => {
			console.log("one movie ====",response.data);
			this.setState({movie: response.data, showDeatail:true});

			console.log("one state  ====",this.state.movie);
		})
		.catch(err => {
			console.log(err)
			// this.setState({errorMsg: "error retriving data"})
		})
	}
	render() {

		

		return(
			<section>
				<div className="LayoutWrapper col-lg-12">
					<div className="SearchBoxWrapper col-lg-10 col-lg-offset-1">
	            		<div className='input-group col-lg-6 col-lg-offset-4'>

					        <input type='text' id='search' name="search" value={this.state.search} className='form-control  searchBar' placeholder='Search movies here...' onChange={this.handleChange.bind(this)}></input>
					       	
					    </div>
					              
						
					<div className="row">
						<div className="listPart col-lg-4 ">
							
								{
								
								this.state.results.results?
									this.state.results.results.map((element,index) =>{
										// console.log("element ",element);
										// console.log("element.data",element.id);
										// id={element.data.belongs_to_collection.id}
										// id={element.results[index].id}
									 return(

									 		 
									 		 <div id={element.id} key={index} className="box1"  onClick={this.getOneMovieDetail.bind(this)}>
										 		 <div className="subBox">
										 		 <img className="subBoxImg" src={"https://image.tmdb.org/t/p/w200"+element.poster_path}></img>
										 		 </div>
												<h4  className="MovTitle">{element.original_title}</h4>
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

						{ this.state.showDeatail ?

							<div className="DetailPart col-lg-8 ">
							<div className="row">
								<div className="detailBox" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5)),url("+"https:/image.tmdb.org/t/p/w500"+this.state.movie.backdrop_path+")"}}>
							
								
			
									
									<div className="imgBox">
										<img className="subImgBox" src={"https://image.tmdb.org/t/p/w200"+this.state.movie.poster_path} />
									</div>
									<h2 className="movName">{this.state.movie.original_title}</h2>
									<h4 className="relaseDate">{this.state.movie.release_date }</h4>
									<h4 className="abtMov">{this.state.movie.genres[0].name+" "+this.state.movie.genres[1].name+" "+this.state.movie.genres[2].name+" "}</h4>
									<h4 className="duration">&nbsp;&nbsp;&nbsp;&nbsp;{this.state.movie.runtime + " min. "}</h4>
									<div className="tagline">{this.state.movie.tagline}</div>

									<div className="overview">Overview</div>
									<p className="movPara">{this.state.movie.overview}</p>
									
							</div>		
									
								</div>

							</div>
						 : null
					}
					</div>
						
					</div>	
				</div>
			</section>



			)
	}
}