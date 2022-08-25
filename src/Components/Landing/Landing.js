import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div>
            <div>
                <Link to="/table">
                    <button className="button1">Table</button>
                </Link>
            </div>
            <div>
                <Link to="/form">
                    <button className="button2">Form</button>
                </Link>
            </div>
        </div>
    )
}
export default Landing