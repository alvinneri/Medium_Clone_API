import React from "react";
import { Link } from "react-router-dom";

const NotSignedIn = ({ hidden }) => {
    return (
        <ul className={`${hidden} md:flex md:flex-row`}>
            <li className="pr-5">
                <Link
                    to="/signin"
                    className="hover:no-underline hover:font-bold hover:text-green-600"
                >
                    Sign In
                </Link>
            </li>
            <li className="pr-5">
                <Link
                    to="/signup"
                    className="hover:no-underline hover:font-bold hover:text-green-600"
                >
                    Sign Up
                </Link>
            </li>
        </ul>
    );
};

export default NotSignedIn;
