import React, { useState, useEffect } from "react";
import classes from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import Tab1 from "../../Component/Tab1";
import Tab2 from "../../Component/Tab2";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.status);

  const tab1Classes =
    activeTab === 1 ? `${classes.tabItem} ${classes.active}` : classes.tabItem;
  const tab2Classes =
    activeTab === 2 ? `${classes.tabItem} ${classes.active}` : classes.tabItem;

  useEffect(() => {
    dispatch({ type: "GET_IMAGES" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn === "Correct") {
      setActiveTab(2);
    }
  }, [isLoggedIn]);

  const checkRouteAvailability = () => {
    setActiveTab(2);
  };

  return (
    <div className={classes.container}>
      <div className={classes.tabView}>
        <p className={tab1Classes} onClick={() => setActiveTab(1)}>
          Images
        </p>
        <p className={tab2Classes} onClick={() => checkRouteAvailability()}>
          Image Settings {isLoggedIn === "Correct" ? "" : "(Sign in required)"}
        </p>
      </div>
      {activeTab === 1 ? <Tab1 /> : <Tab2 />}
    </div>
  );
};

export default Dashboard;
