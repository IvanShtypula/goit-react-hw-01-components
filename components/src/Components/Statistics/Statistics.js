import React from 'react';
import SingleStatistic from './SingleStatistic/SingleStatistic.js';

const statisticsStyle = {
  display: "flex",
  flexDirection: "column",
  width: "600px",
  boxShadow: "2px 2px 3px rgb(41, 39, 39)",
  margin: "0 auto 50px auto",
}

const statListStyle = {
  display: "flex",  
  justifyContent: "space-evenly",
  margin: "0",
  padding: "0",
}

const statTitleStyle = {
  textTransform: "uppercase",
  color: "rgb(48, 57, 65)",
}

const Statistics = (props) => {
  console.log(props)
  return (
    <section  style={statisticsStyle}>
    <h2 style={statTitleStyle}>{props.title}</h2>
  
    <ul style={statListStyle}>
      {props.stats.map(stat => <SingleStatistic key={stat.id} label={stat.label} percentage={stat.percentage}/>)}
      
    </ul>
  </section>
  );
};

export default Statistics;