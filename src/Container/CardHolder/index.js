import React from "react";
import classes from "./style.module.css";

import Card from "../../Component/Card";

const CardHolder = (props) => {
  return props.cards.map((card) => <Card key={card.id} data={card} />);
};

export default CardHolder;
