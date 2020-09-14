import React from "react";


const Weather = props => (


	<div className="weather__info">
	
		{ 
			props.city && props.country && <p className="weather__key"> Location : 

		<span className="weather__value">	{props.city} , {props.country} </span>

			</p> 
		} 
	  
	    {/*This is accessing city props defined inside Weather from App component and  displaying here only 
	    if this.props.city and this.props.country both returns true otherwise we are getting Location :,
	     humidity: description: these fields while the page loads .But we need them to be loaded while 
	   it contains some data only . So we have used AND(&&) operator here*/}
			 
		{ 
		props.temperature && <p className="weather__key"> Temperature : 

		  <span className="weather__value"> {props.temperature} </span>

		</p>
		}   

		 {/*This is accessing temperature props from 
		App component and displaying here if this.props.temperature returns true*/}
			
		{ 
			props.humidity &&	<p className="weather__key"> Humidity :

			<span className="weather__value"> {props.humidity} </span>

			</p> 
		}
			
		{ 
			props.description && <p className="weather__key"> Condition : 

			<span className="weather__value"> {props.description} </span> 

			</p> 
		}
			
		{ 
			props.error && <p className="weather__error">{props.error}</p> 
		}
			
	</div>


			);

export default Weather ;