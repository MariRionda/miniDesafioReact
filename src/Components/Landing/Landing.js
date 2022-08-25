import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

const Landing = () => {
    return(
        <div className="background">
            <div className="buttons">
                <Link to="/table">
                    <button className="btnHover">Table</button>
                </Link>
            </div>
            <div className="buttons">
                <Link to="/form">
                    <button className="btnHover">Form</button>
                </Link>
            </div>
        </div>
    )
}
export default Landing