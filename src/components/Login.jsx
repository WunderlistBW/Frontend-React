import React from "react";
import Button from "../stylingComponents/Button"


export default function Login(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        errors,
    } = props

    return (
        <form onSubmit={onSubmit}>
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
            <div className="userName">
                <h1>Sign In:</h1>
                <label>Username:
                    <input 
                        value={values.username}
                        type="username"
                        name="userName"
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <div className="password">
                <label>Password:
                    <input 
                    value={values.password}
                    type="password"
                    name="password"
                    onChange={onInputChange}
                    />
                </label>
            </div>
            <div className="btn">
                <Button disabled={disabled}>Sign In</Button>
            </div>
        </form>
    )
}