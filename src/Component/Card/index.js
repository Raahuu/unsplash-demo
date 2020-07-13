import React from "react";
import classes from "./style.module.css";

const Card = (props, type) => {
  return (
    <div className={classes.card}>
      <div className="d-flex flex-column">
        <div className={classes.imageHolder}>
          <img
            width="100%"
            height="100%"
            src={props.data.image}
            alt="broken_image"
          />
        </div>
        <div className={classes.details}>
          <p>Title: {props.data.title}</p>
          <p>Author: {props.data.author}</p>
          <p>{props.data.description}</p>
        </div>
      </div>
      {props.editable ? (
        <div className={classes.actions}>
          <button
            className={classes.edit}
            onClick={() => props.clicked(props.data.id, "edit")}
          >
            Edit
          </button>
          <button
            className={classes.delete}
            onClick={() => props.clicked(props.data.id, "delete")}
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
