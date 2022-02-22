import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './googleAuth';

const Header = () =>{
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Streams
                </Link>
                <div className="item">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
}

export default Header;