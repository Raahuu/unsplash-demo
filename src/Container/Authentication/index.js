import React, { useState } from "react";
import SignIn from "../../Component/SignIn";
import SignUp from "../../Component/SignUp";

const Authentication = () => {
  const [status, setStatus] = useState("signin");
  return (
    <div>
      {status === "signin" ? (
        <>
          <SignIn />
          <p onClick={() => setStatus("signup")}>Create a new account</p>
        </>
      ) : (
        <>
          <SignUp registered={() => setStatus("signin")} />
          <p onClick={() => setStatus("signin")}>Back to SignIn</p>
        </>
      )}
    </div>
  );
};

export default Authentication;
