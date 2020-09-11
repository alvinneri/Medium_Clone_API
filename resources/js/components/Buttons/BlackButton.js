import React from "react";
import { Link } from "react-router-dom";

const BlackButton = ({ path }) => {
    return (
        <div className="mb-3">
            <Link
                to={path}
                className="py-3 px-5 rounded bg-black text-white font-bold hover:no-underline"
            >
                CONTINUE
            </Link>
        </div>
    );
};

export default BlackButton;
