import React from "react";
import { Link } from "react-router-dom";

const GreenButton = () => {
    return (
        <div className="mb-3">
            <Link
                to="/signin"
                className="py-3 px-5 rounded bg-green-600 text-white font-bold hover:no-underline"
            >
                GET STARTED
            </Link>
        </div>
    );
};

export default GreenButton;
