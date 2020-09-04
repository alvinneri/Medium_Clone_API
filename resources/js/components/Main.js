import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Welcomepage from "./Landing/Welcomepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route to="/" component={Welcomepage}></Route>
            </Switch>
        </Router>
    );
}

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
