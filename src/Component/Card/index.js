import React from "react";
import classes from "./style.module.css";

const Card = (props) => {
  const click = (id) => {
    if (props.editable) {
      props.clicked(id);
    }
  };

  return (
    <div onClick={() => click(props.data.id)}>
      <div className={classes.imageHolder}>
        <img
          width="100%"
          height="100%"
          src={props.data.image}
          alt="broken_image"
        />
      </div>
      <p>Title: {props.data.title}</p>
      <p>Author: {props.data.author}</p>
      <p>{props.data.description}</p>
      <br />
    </div>
  );
};

export default Card;
