import React from 'react';

function Item(props){
            console.log("Item", props);
  const{dt_txt} = props;
            console.log(dt_txt);
  const temp = Math.round(props.main.temp - 273)
            console.log(temp);
  const wind = props.wind.speed
             console.log(wind);
  const img = props.weather[0].icon 

    const srcImg=`http://openweathermap.org/img/w/${img}.png`
  return (
    <div className="fc">
      <ul>
      <li>
      <div lassName="fcTime">
        {dt_txt}
      </div>
      <div className="fcTemp">
        {temp} °C
      </div>
        <div className="wind">
          {wind} M/C
        </div>
        <div className="weatherIcon">
          <img src ={srcImg} alt="" ></img>
          </div>
          </li>
        </ul>
    </div>
  );
}


export default Item;