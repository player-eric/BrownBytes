import React from "react";
import { Route, Switch } from "react-router-dom";

import Alert from "../layout/Alert";

import Home from "../home/Home";
import Calendar from "../calendar/Calendar";
import About from "../about/About";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import ForgotPassword from "../forgot-password/ForgotPassword";
import SignUp from "../signup/SignUp";

const Routes = () => {
	return (
		<section className="container">
			<Alert />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/calendar" component={Calendar} />
				<Route exact path="/about" component={About} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/login" component={Login} />
				<Route
					exact
					path="/forgotpassword"
					component={ForgotPassword}
				/>
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</section>
	);
};

export default Routes;
