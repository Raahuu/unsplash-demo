import React from "react";
import CardHolder from "../../Container/CardHolder";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

const Tab1 = () => {
  const cardData = useSelector((state) => state.images.data);

  return (
    <div className={styles.cardHolderContainer}>
      <CardHolder cards={cardData} />
    </div>
  );
};

export default Tab1;
