import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Welcomepage from "./Landing/Welcomepage";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Welcomepage} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
            </Switch>
        </Router>
    );
}

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
