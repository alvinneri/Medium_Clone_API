import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

function Main() {
    return (
        <div>
            <Navbar />
        </div>
    );
}

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
