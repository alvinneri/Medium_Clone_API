import React from "react";
import Categories from "./Categories";
import GreenButton from "../Buttons/GreenButton";
import { Link } from "react-router-dom";

const Welcomepage = () => {
    return (
        <div className="container mx-auto p-5 font-sans text-black text-center">
            <h2 className="text-5xl font-semibold">
                Dive deeper on topics that matter to you.
            </h2>
            <span className="font-medium text-lg">
                Select what you're into. We'll help you find great things to
                read.
            </span>
            <Categories />
            <GreenButton />
            <p>
                Already have an account?{" "}
                <Link
                    to="/signin"
                    className="hover:no-underline font-bold text-green-600 hover:text-black"
                >
                    Sign in.
                </Link>
            </p>
        </div>
    );
};

export default Welcomepage;
