import React from 'react';
import Item from './Item';


const AllWeather = (props) => {
  const { arr } = props;
  const filteredArr = arr.filter((item, i) => i % 8 === 0);
  
  return (
    <div className="forecast">
      {filteredArr.map((item, index) => <Item key={index} {...item} />)}
    </div>
  )
}

export default AllWeather;