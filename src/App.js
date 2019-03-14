import React, { Component } from 'react';
import axios from 'axios';

import TodayWeather from './TodayWeather';
import AllWeather from './AllWeather';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherToday: null,
      weatherFiveDays: [],
      city: '',
      country: '',
      counter: 0
    }
  }

  componentDidMount(){
    const weatherApiUrlOneDay = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';
    const weatherApiUrlFiveDays = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';
    
    axios(weatherApiUrlOneDay)
      .then(response => {
        console.log("погода на один день", response.data);
        this.setState( { weatherToday: response.data } ); // записываем погоду в стейт
      });
        
    axios(weatherApiUrlFiveDays)
      .then(response => {
        console.log("погода на пять день", response.data.list);
        console.log("город", response.data.city.name);
        console.log("country", response.data.city.country);
        this.setState( { weatherFiveDays: response.data.list, city: response.data.city.name, country: response.data.city.country } );
      });

    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);

    // всё
  }

  render(){
    const{ weatherToday, weatherFiveDays, city, country } = this.state;

    return(
      <div className="App">     

            <TodayWeather weather={weatherToday} city={city} country={country} />
            <AllWeather arr={weatherFiveDays} />

      </div>
    )
  }

}
export default App;
