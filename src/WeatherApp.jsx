import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
    city:"Bhandara",
    feelsLike: 38.18,
    humidity: 55,
    temp: 33.16,
    tempMax: 33.16,
    tempMin: 33.16,
    weather: "broken clouds",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}> 
            <h2>Weather App by Bhushan</h2>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    )
}