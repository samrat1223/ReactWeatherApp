import React from "react";


import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather";


const API_KEY = "b9c417c0013508b33450f27af1cc2812" ;


//Here class is creating an instace of App which extends React.Component object which lies within node_modules
class App extends React.Component {

/*This is the initial state of our application and this state changes states only if we press the button*/
  state = {

    temperature : undefined ,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined 
 }

// Making the API call using async await methid
  getWeather = async (e) => {

  e.preventDefault();  {/*This e is a simple JS object and prevents the default behaviour of this AppComponent i.e.
   it stops loading of the page*/}

  const city = e.target.elements.city.value ; {/* We are targeting Form component's input element named city*/}
  const country = e.target.elements.country.value ; {/* We are targeting Form component's input element named country*/}


    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`); 
     
     const data  = await api_call.json(); {/*This JSON changes all the data we recieves from 
     //api call to language readable code and stores those datas in variable data */} 

if(city && country) // If we don't give input to city and country in the app and submit then our app crashes .
//this is because the values given was undefined initially . To prevent this we are saying if city
// and country are valid then only chnage state of the app i.e. load new data else don't // 

{

    
   {/*Populating the state with the data we get from API Call and the state 
       will be changed while we press submit button*/}


   this.setState({

    temperature : data.main.temp, /*data stores all the result we get back from our API call and 
    inside data's main's temp field we want to get back */
    city : data.name,
    country : data.sys.country,
    humidity : data.main.humidity,
    description : data.weather[0].description,
    error : ""

   });
   
   }

   else
   {
    this.setState({

    temperature : undefined, 
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : "Please enter city and country"

   });
   
   }

  }

 render() {

  return (

      <div>
            <div className="wrapper">
                <div className="main">
                   <div className="container">
                       <div className="row">
                          <div className="col-xs-5 title-container">

                            <Titles/>

                          </div>
                          <div className="col-xs-7 form-container">

                                        <Form getWeather={this.getWeather}/>  {/* This is a props named getWeather and this.getWeather 
                                         is of AppComponent and has access to fromComponent using this.props.getWather  */}
       

                                     <Weather 

                                          temperature={this.state.temperature} /*This is passing the temperature to Weather component so 
                                        that it can be displayed on the screen using props .*/
                                 
                                         city = {this.state.city}  /*Passing city as a prop to weather component*/

                                         country = {this.state.country} /*Passing country as a prop to weather component*/

                                         humidity = {this.state.humidity} /*Passing humidity as a prop to weather component*/

                                         description = {this.state.description} /*Passing description as a prop to weather component*/

                                         error = {this.state.error} /*Passing error as a prop to weather component*/

                                       />
                          </div>

                       </div>
                   </div>
               </div>
            </div>
      </div>



    );
 }
  
}



       
        

export default App ;