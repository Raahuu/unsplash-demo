import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import classes from "./style.module.css";

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.status);

  const loginUser = () => {
    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: { username, password },
      });
    }
  };

  useEffect(() => {
    if (loginStatus === "Correct") {
      history.push("/dashboard");
    } else if (loginStatus === "Incorrect") {
      NotificationManager.error(
        "Username or password is not correct",
        "Error",
        2000
      );
      dispatch({ type: "CLEAR" });
    }
  }, [loginStatus]);

  return (
    <div className={classes.formfull}>
      <div className={classes.formHolder}>
        <label className={classes.label} htmlFor="username">
          UserName
        </label>
        <input
          className={classes.inputBox}
          id="username"
          value={username}
          placeholder="Your username here"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className={classes.formHolder}>
        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input
          className={classes.inputBox}
          id="password"
          value={password}
          placeholder="Your password here"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={classes.submitButton} onClick={() => loginUser()}>
        Login
      </button>
    </div>
  );
};

export default SignIn;
