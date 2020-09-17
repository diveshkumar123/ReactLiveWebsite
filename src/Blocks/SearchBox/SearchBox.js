import React , { Component} from 'react';

import "./SearchBox.css";

export default class SearchBox extends Component {
	render() {
		return (

			<section>
				<div className="SearchBoxWrapper col-lg-10 col-lg-offset-1">
            		<div className='input-group col-lg-6 col-lg-offset-4'>

				        <input type='text' id='search' className='form-control  searchBar'></input>
				       	
				    </div>
				              
					
				</div>	
			</section>






			)
	}
}