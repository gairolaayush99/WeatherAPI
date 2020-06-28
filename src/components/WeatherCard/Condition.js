import React from "react";
import styled from "@emotion/styled";

const Condition = ({condition,temp}) => {
  const Temp = styled.div`
    font-family: "Fira Sans", sans-serif;
    font-size: 2 rem;
    font-weight: 200;
  `;
  const Condition = styled.div`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2 rem;
  `;

  return (
    <>
      <Temp>{temp}°C </Temp>
      <Condition>{condition}</Condition>
    </>
  );
};

export default Condition;
