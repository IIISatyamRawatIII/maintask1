import React from 'react'
import "./ProfileResume.css"
import { Avatar, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import GetAppIcon from '@material-ui/icons/GetApp';

function ProfileResume(props) {
    const [seed, setseed] = useState("");

    useEffect(() => {
            setseed(Math.floor(Math.random() * 5000));
        }, []);

    return (
        <div className="profile_data">
            <div className="inner_profile_data">
                <div className="left_content">
                    <div className="left_content_top">
                        <div className="profile_pic">
                            <h1>
                                <Avatar style={{ height: '70px', width: '70px' }} src={`https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946311-690-690.jpg`}/>
                            </h1>
                        </div>
                        <div className="candidate_info">
                            <div className="candidate_name">
                                <h3>Neha Verma</h3>
                            </div>
                            <div className="candidate_role">
                                <p>(UI Designer)</p>
                            </div>
                        </div>
                    </div>
                    <div className="left_content_bottom">
                        <div className="left_content_bottom_inner">
                            <div className="gmail_id">
                                    <h1>
                                        <MailOutlineIcon/>
                                    </h1>
                                    <p>verma.neha@gmail.com</p>
                            </div>
                            <div className="phone_number">
                                    <h1>
                                        <CallIcon/>
                                    </h1>
                                    <p>91+987654567</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_content">
                    <div className="inner_right_content">
                        <button className="download_cv">
                            <p>Download CV</p>
                            <h1>
                                <GetAppIcon/>
                            </h1>                                
                        </button>
                        <button className="message">
                            <p>Message</p>
                        </button>
                        <div className="remove">
                            <p>Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileResume

