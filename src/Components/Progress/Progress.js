import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactStars from "react-rating-stars-component";

import "./Progress.css";

const percentage = 90;

function StudentProgress() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="progress">
      {/* Attendance */}
      <div className="attendance">
        <p className="heading">Attendance</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className="info">
          Last absence <br />
          12th May, 12:00 PM
        </p>
      </div>

      <div className="tests">
        <p className="heading">Tests</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className="info">
          Last Test <br /> 100 %
        </p>
      </div>

      <div className="rating">
        <p className="heading">HW Rating</p>

        <div className="stars">
          <ReactStars
            value={4.1}
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            activeColor="#EFD75B"
          />
          <p className="rating">(4.1)</p>
          <p className="info">
            Last Homework <br />
            4.5
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentProgress;