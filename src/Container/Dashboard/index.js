import React, { useState, useEffect } from "react";
import classes from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import CardHolder from "../CardHolder";
import Tab1 from "../../Component/Tab1";
import Tab2 from "../../Component/Tab2";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const cardsData = useSelector((state) => state.images.data);
  const dispatch = useDispatch();

  const tab1Classes =
    activeTab === 1 ? `${classes.tabItem} ${classes.active}` : classes.tabItem;
  const tab2Classes =
    activeTab === 2 ? `${classes.tabItem} ${classes.active}` : classes.tabItem;

  useEffect(() => {
    dispatch({ type: "GET_IMAGES" });
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.tabView}>
        <p className={tab1Classes} onClick={() => setActiveTab(1)}>
          Images
        </p>
        <p className={tab2Classes} onClick={() => setActiveTab(2)}>
          Image Settings
        </p>
      </div>
      {activeTab === 1 ? <Tab1 /> : <Tab2 />}
    </div>
  );
};

export default Dashboard;