import React from "react";
import CardHolder from "../../Container/CardHolder";
import { useSelector } from "react-redux";

const Tab1 = () => {
  const cardData = useSelector((state) => state.images.data);

  return (
    <div>
      <CardHolder cards={cardData} />
    </div>
  );
};

export default Tab1;
