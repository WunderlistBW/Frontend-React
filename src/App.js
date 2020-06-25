import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

import { SignUpForm } from "./components/Signup";
import Nav from "./components/Nav";
import TaskForm from "./components/TaskForm";

import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard";

export default function App() {
    return (
        <div className='App'>
            <Nav />
            <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />

                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <SignUpForm />
                </Route>
                {/* add register */}
            </Switch>
        </div>
    );
}
