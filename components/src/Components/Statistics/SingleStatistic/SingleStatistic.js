import React from 'react';

const colorChanel = function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function randomRgbColor(){
  const randomChanelRed = colorChanel(0, 255);
  const randomChanelGreen = colorChanel(0, 255);
  const randomChanelBlue = colorChanel(0, 255);
  return 'rgb('+randomChanelRed+','+randomChanelGreen+', '+randomChanelBlue+')'
}

const itemStyle = {
  display: "block",
  padding: "10px 0", 
  backgroundColor: randomRgbColor(),
  width: "100%",
}

const labelStyle = {
  display: "block",
  margin: "0",
  marginBottom: "10px",
  fontWeight: "700",
  color: "#fff",
}

const percentageStyle = {
  display: "block",
  margin: "0",
  fontWeight: "700",
  color: "#fff",
}

const SingleStatistic = (props) => { 
  console.log(props)
  return (
    <li style={itemStyle}>
    <span style={labelStyle}>{props.label}</span>
    <span style={percentageStyle}>{props.percentage}</span>
  </li>
  );
};

export default SingleStatistic;