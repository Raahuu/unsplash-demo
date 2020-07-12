import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import AllRoutes from "./Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
      <NotificationContainer />
    </div>
  );
}

export default App;
