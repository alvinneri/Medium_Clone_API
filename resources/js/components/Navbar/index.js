import React, { useState } from "react";

const Navbar = () => {
    const [hidden, setHidden] = useState("hidden");

    const toggle = () => {
        if (hidden === "hidden") {
            setHidden("block");
        } else {
            setHidden("hidden");
        }
    };
    return (
        <div className="container mx-auto p-5 font-sans text-black">
            <nav className="flex flex-row justify-between relative">
                <div className="flex-row">
                    <span className="text-2xl font-bold ">Medium</span>
                </div>

                <p
                    className="md:hidden justify-end absolute right-0"
                    onClick={toggle}
                >
                    Toggle
                </p>

                <ul className={`${hidden} md:flex md:flex-row`}>
                    <li className="pr-5">Sign In</li>
                    <li className="pr-5">Sign Up</li>
                    <li className="pr-5">Dashboard</li>
                    <li className="pr-5">Logout</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
