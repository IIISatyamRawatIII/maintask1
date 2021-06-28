import React from 'react'
import "./Appbar.css";
import { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Appbar(props) {
    const [seed, setseed] = useState("");

    useEffect(() => {
            setseed(Math.floor(Math.random() * 5000));
        }, []);
    return (
        <div className="all_header">
            <div className="inner_header">
                <div className="header_left">
                    <div className="inner_header_left">
                        <div className="logo">
                            <h1>VERZEO</h1>
                        </div>
                        <div className="text">
                            <p>For employers</p>
                        </div>
                    </div>
                </div>
                <div className="header_center">
                    <div className="inner_header_center">
                        <div style={{cursor: "pointer"}} className="dashboard">
                            <h3>Dashboard</h3>
                        </div>
                        <div style={{cursor: "pointer"}} className="job_posted">
                            <h3>Job posted</h3>
                        </div>
                    </div>
                </div>
                <div className="header_right">
                    <div className="inner_header_right">
                        <div className="notification"> 
                            <h1>
                                <NotificationsIcon style={{width:'35px', height:'35px'}}/>
                            </h1>
                            <div className="notification_light"><p>5</p></div>
                        </div>
                        <div className="messages">
                            <h1>
                                <ChatBubbleIcon style={{width:'30px', height:'30px'}}/>
                            </h1>
                            <div className="message_light"><p>2</p></div>
                        </div>
                        <div className="avatar">
                            <Avatar style={{ height: '50px', width: '50px' }} src={`https://i1.sndcdn.com/artworks-oIM7azTwJ5XazPzP-tDGOdw-t500x500.jpg`}/>
                        </div>
                        <div className="dropdown_button">
                            <h1><KeyboardArrowDownIcon/></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appbar

