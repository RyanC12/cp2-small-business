import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import cookie from "cookie";

import Login from './components/Login';
import BusinessListing from './components/BusinessListing';
import AddBusiness from './components/AddBusiness';

const userAuthentication = () => {
    const cookies = cookie.parse(document.cookie);

    return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({ componenet: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                userAuthentication() ? (<Component {...props} />
                ) :
                    <Redirect to="/" />

            }
        />
    )
}


export default function Router() {
    return (
        <Switch>
            <Route path="/listings" component={BusinessListing} />
            <Route path="/add" component={AddBusiness} />
            <ProtectedRoute exact path="/" component={Login} />
        </Switch>
    )
}
