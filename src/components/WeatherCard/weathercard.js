import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./Icon";
import Condition from "./Condition";
const WeatherCard = ({ condition,temp,city,country}) => {
  let highColor = 0;
    let lowColor = 0;
   let bg = null;
  if (temp > 15) {
    highColor = (1 - (temp -15) / 28) * 255;
      lowColor = highColor - 130;
      bg = `linear-gradient(
      to top,
      rgba(200, ${highColor}, 0),
      rgba(200, ${lowColor}, 0)
    `;
  } else if (temp<=15){
    highColor = (1 - (temp + 20) / 32) * 255;
      lowColor = highColor - 150;
      bg = `linear-gradient(
      to top,
      rgba(0, ${highColor}, 255),
      rgba(0, ${lowColor}, 255)
    `;
  }

  const Card = styled.div`
    margin: 0 auto;
    background:${bg} );
    width: 210px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
          <Location city={city} country={country}/>
      <Icon condition={condition} />
          <Condition condition={condition} temp={temp}/>
    </Card>
  );
};
export default WeatherCard;
