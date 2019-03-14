import React from 'react';
import moment from 'moment';

import {direction} from './direction';

function TodayWeather(props){
  const { weather, city, country } = props;

  console.log(weather);

  if (!weather) return (<div>Загрузка ...</div>);

  return(
    <div className="weather">
      <div className="divInfo">
        <h3>{city},  <span className="badge badge-secondary">'{country}'</span></h3>
      </div>
      <div>
    {moment().format('DD.MM.YYYY в HH:mm:ss')}
      </div>
      <div className = "divWeather">
        <div>
          {weather.weather[0].main} 
          <div className="temp">

          {weather.main.temp - 273.15} °C
          </div>
          </div>
          <div className="divWind">
          <div className="wind"> 
          {weather.wind.speed} M/S;
          </div>
          <div className="wind">
            {direction(weather.wind.deg)}
          </div>

        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
