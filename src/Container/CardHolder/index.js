import React from "react";
import classes from "./style.module.css";

import Card from "../../Component/Card";

const CardHolder = (props) => {
  return (
    <div className={classes.cardContainer}>
      {props.cards && props.cards.length ? (
        props.cards.map((card) => <Card key={card.id} data={card} />)
      ) : (
        <p>No cards to show</p>
      )}
    </div>
  );
};

export default CardHolder;
