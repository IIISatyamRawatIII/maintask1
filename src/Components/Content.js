import React from 'react'
import "./Content.css"
import ProfileResume from "./ProfileResume.js";
import PersonIcon from '@material-ui/icons/Person';

function Content() {
    return (
        <div className="content">
            <div className="center_screen">
                <div className="header">
                    <div className="left_part">
                        <div className="icon">
                            <h2><PersonIcon/></h2>
                        </div>
                        <div className="candidates">
                            <h2>Candidates</h2>
                        </div>
                    </div>
                </div>
                <div className="content_part">
                    <ProfileResume/>
                    <ProfileResume/>
                    <ProfileResume/>
                    <ProfileResume/>
                    <ProfileResume/>
                </div>
            </div>            
        </div>
    )
}

export default Content;

