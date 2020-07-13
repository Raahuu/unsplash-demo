import React from "react";
import CardHolder from "../../Container/CardHolder";
import { useSelector } from "react-redux";
import styles from "./style.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Tab1 = () => {
  const cardData = useSelector((state) => state.images.data);
  const loading = useSelector((state) => state.images.fetching);

  return (
    <div className={styles.cardHolderContainer}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <ClipLoader size={75} color={"#123abc"} loading />
        </div>
      ) : (
        <CardHolder cards={cardData} />
      )}
    </div>
  );
};

export default Tab1;
