import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import BlackButton from "../Buttons/BlackButton";

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="container mx-auto p-5 font-sans text-black text-center">
            <h3 className="text-3xl font-serif">Sign up with email</h3>
            <p className="py-5 font-sans text-xl font-semibold">
                Enter your email address to create an account
            </p>
            <form>
                <span className="font-sans text-xl">Your Email</span>
                <input
                    className="mb-5 border-b-2 flex  sm:min-w-full mx-auto text-center py-2 font-serif text-xl focus:outline-none"
                    value={email}
                />
                <span className="font-sans text-xl">Your Password</span>
                <input
                    className="mb-5 border-b-2 flex  sm:min-w-full mx-auto text-center py-2 font-serif text-xl focus:outline-none"
                    value={password}
                    type="password"
                />
                <BlackButton path={"password"} />
            </form>
        </div>
    );
};

export default Signup;
