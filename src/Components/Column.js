import React from "react";
import Cards from "./Cards";
import "../App.css";

const Column = ({ data }) => {
  return (
    <div
      className="container"
      style={
        data.title === "FRI"
          ? { backgroundColor: "#E7D2E8" }
          : { backgroundColor: "#F6F6F6" }
      }
    >
      <p
        className="dayText"
        style={
          data.title === "FRI"
            ? {
                backgroundColor: "#3F0E40",
                color: "#ffffff",
                borderRadius: "50px",
              }
            : { color: "black", borderRadius: "0px" }
        }
      >
        {data.title}
      </p>
      {data.data.map((item, index) => (
        <Cards key={index} data={item} />
      ))}
    </div>
  );
};

export default Column;