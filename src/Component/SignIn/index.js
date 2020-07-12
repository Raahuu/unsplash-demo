import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
    }
  }, [loginStatus]);

  return (
    <div>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          value={username}
          placeholder="Your username here"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          placeholder="Your password here"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => loginUser()}>Login</button>
    </div>
  );
};

export default SignIn;
