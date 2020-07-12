import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

const SignUP = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const error = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (confPassword !== password) {
      NotificationManager.error("Two passwords dont match", "Try again", 2000);
    } else if (firstName && lastName && username && password) {
      dispatch({
        type: "SIGNUP",
        payload: {
          firstName,
          lastName,
          username,
          password,
        },
      });
    } else {
      NotificationManager.error(
        "All fields are required please fill",
        "Error",
        2000
      );
    }
  };

  useEffect(() => {
    if (error) {
      NotificationManager.error(error, "Error", 2000);
      dispatch({ type: "CLEAR" });
    }
  }, [error]);

  useEffect(() => {
    if (status === "Success") {
      NotificationManager.success(
        "User registered! You can login now",
        "Success",
        2000
      );
      props.registered();
    }
  }, [status]);

  return (
    <div>
      <div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={firstName}
            placeholder="Enter firstName here"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={lastName}
            placeholder="Enter lastName here"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          placeholder="Your Username here"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          placeholder="Type a password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confPassword">Confirm Password</label>
        <input
          id="confPassword"
          value={confPassword}
          placeholder="Retype your password here"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
      <button onClick={() => handleRegister()}>Register</button>
    </div>
  );
};

export default SignUP;
