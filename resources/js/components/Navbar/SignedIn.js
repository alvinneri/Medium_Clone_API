import React from "react";
import { Link } from "react-router-dom";

const SignedIn = ({ hidden }) => {
    return (
        <ul className={`${hidden} md:flex md:flex-row`}>
            <li className="pr-5">
                <Link path="/home">Home</Link>
            </li>
            <li className="pr-5">
                <Link path="/logout">Logout</Link>
            </li>
        </ul>
    );
};

export default SignedIn;
