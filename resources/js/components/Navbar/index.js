import React, { useState } from "react";
import NotSignedIn from "./NotSignedIn";
import SignedIn from "./SignedIn";

const Navbar = () => {
    const [hidden, setHidden] = useState("hidden");
    const [isAuth, setIsAuth] = useState(false);

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

                {!isAuth ? (
                    <NotSignedIn hidden={hidden} />
                ) : (
                    <SignedIn hidden={hidden} />
                )}
            </nav>
        </div>
    );
};

export default Navbar;
