import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Login from './components/Login';
import BusinessListing from './components/BusinessListing';
import AddBusiness from './components/AddBusiness';

import { connect } from 'react-redux'



const Router = () => {
    const userAuthentication = () => {
        return false
    }
    console.log(userAuthentication())
    const ProtectedRoute = ({ componenet: Component, ...rest }) => {
        return (
            <Route
                {...rest}
                render={(props) =>
                    userAuthentication() ? <Component {...props} />
                     :
                        <Redirect to="/" />
    
                }
            />
        )
    }
    
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/listings" component={BusinessListing} />
            <ProtectedRoute path="/add" component={AddBusiness} />
        </Switch>
    )
}
// uhuh
export default Router;