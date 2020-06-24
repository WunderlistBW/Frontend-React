import React from "react";
import Div from "../stylingComponents/Div";
import H2 from "../stylingComponents/H2";
import NavStyling from "../stylingComponents/NavStyling";
import NavLink from "../stylingComponents/NavLink";

export default function Nav() {
    return (
    <Div class="navigation">
        <H2>wunderlist</H2>
        <NavStyling>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </NavStyling>
    </Div>
    )
}