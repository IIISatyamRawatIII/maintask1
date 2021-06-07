import React from "react";
import "./Card.css"
import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import StudentProgress from "../StudentProgress/Progress";

function StudentCard() {
  return (
    <div className="card">
      {/* 10marks */}
      <div className="first">
        <div className="batch">
          <p>Batch Name | PHY_B1</p>
          <CreateIcon style={{ color: "#2e2e2e" }} />
        </div>

        <div className="name">
          <img  alt="SR" />
          <p>Marvin McKinney</p>
          <GroupAddIcon
            style={{
              marginLeft: "auto",
              marginRight: "18px",
              fontSize: "30px",
              color: "#2e2e2e",
            }}
          />
        </div>

        <div className="students">
          <AccountCircleIcon style={{ color: "#2e2e2e" }} />
          <p>125 Students</p>
        </div>

        <div className="upcoming">
          <WatchLaterIcon style={{ color: "#2e2e2e" }} />

          <p>
            <span style={{ fontWeight: "normal" }}>
              Upcoming {"<Activity>"} <br />
              Thu, 25th May <br />
            </span>
            12:00 PM - 12:00 PM
          </p>

          <Button
            variant="outlined"
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
              height: "30px",
              border: "2px solid",
              textTransform: "capitalize",
              marginLeft: "auto",
              marginRight: "27px",
            }}
          >
            View
          </Button>
        </div>
      </div>

      {/* 50marks */}
      <div>
        <StudentProgress />
      </div>
    </div>
  );
}

export default StudentCard;