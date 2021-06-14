import React from "react";
import "./Cards.css";

const Cards = ({ data }) => {
  return (
    <div className="cardContainer">
      <p
        className={"header"}
        style={
          data.title === "Homework"
            ? { backgroundColor: "#F86624" }
            : data.title === "Class"
            ? { backgroundColor: "#04724D" }
            : { backgroundColor: "#CC2936" }
        }
      >
        {data.title}
      </p>
      <div className="cardData">
        <h2>{data.head}</h2>
        <h2>{data.description}</h2>
        <h2>{data.time}</h2>
      </div>
    </div>
  );
};
export default Cards;