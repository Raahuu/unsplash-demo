import React, { useState } from "react";
import SignIn from "../../Component/SignIn";
import SignUp from "../../Component/SignUp";
import classes from "./style.module.css";

const Authentication = () => {
  const [status, setStatus] = useState("signin");
  return (
    <div className={classes.container}>
      {status === "signin" ? (
        <div className={classes.formcontainer}>
          <SignIn />
          <p className={classes.navigation} onClick={() => setStatus("signup")}>
            Create a new account
          </p>
        </div>
      ) : (
        <div className={classes.formcontainer}>
          <SignUp registered={() => setStatus("signin")} />
          <p className={classes.navigation} onClick={() => setStatus("signin")}>
            Back to SignIn
          </p>
        </div>
      )}
    </div>
  );
};

export default Authentication;
