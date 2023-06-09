import React, {useState} from 'react';
import Form from '../form/Form';
import Card from '../card/Card';


const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=24514dbd793e3eeb4c041d6b53475394&lang=es";
    let urlCity = "&q=";
  
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=24514dbd793e3eeb4c041d6b53475394&lang=es";
    

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);


        //weather
        urlWeather = urlWeather + urlCity + loc; 
   
        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            // console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
       

        //Forecast
        urlForecast = urlForecast + urlCity + loc;
        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            // console.log(forecastData);
            setForecast(forecastData);
            setLoading(false);
            setShow(true);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
   };

    
  return (
    
    // <React.Fragment>
    <>
      <Form 
        newLocation = {getLocation}
      />

      <Card
        showData = {show}
        loadingData = {loading}
        weather = {weather}
        forecast = {forecast}
      />

    </>
    // </React.Fragment>


  );
};


export default WeatherPanel;
