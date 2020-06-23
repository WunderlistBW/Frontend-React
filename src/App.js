import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import * as Yup from "yup";
import formSchema from "./components/formSchema";

import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from './components/Dashboard'; 

const initialFormValues = {
  userName: "",
  password: "",
};

const initalFormErrors = {
  userName: "",
  password: "",
};

export default function App() {
  // const [loginInfo, setLoginInfo] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(false);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newLogin = {
      userName: formValues.userName.trim(),
      password: formValues.password.trim(),
    };
    // axios requst goes here, using newLogin
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* add register */}
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>

        <PrivateRoute path="/dashboard" component={Dashboard} />

        <Route path="/login">
          <Login
            values={formValues}
            onSubmit={onSubmit}
            onInputChange={onInputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        {/* add register */}
      </Switch>
    </div>
  );
}
