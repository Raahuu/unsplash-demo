import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "../../Component/Card";
import { useSelector, useDispatch } from "react-redux";
import classes from "./style.module.css";

const Tab2 = () => {
  const [show, setShow] = useState(false);
  const [selectedID, setSelectedID] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const cardData = useSelector((state) => state.images.data);
  const dispatch = useDispatch();

  const submitChanges = () => {
    dispatch({
      type: "EDIT_IMAGE_DATA",
      payload: {
        id: selectedID,
        author,
        description,
        title,
      },
    });
    handleClose();
  };

  const handleClick = (id) => {
    setSelectedID(id);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedID("");
    setAuthor("");
    setDescription("");
    setTitle("");
  };

  useEffect(() => {
    cardData.forEach((card) => {
      if (card.id === selectedID) {
        setAuthor(card.author);
        setDescription(card.description);
        setTitle(card.title);
      }
    });
  }, [selectedID]);

  return (
    <>
      <div>
        {cardData.map((card) => (
          <Card
            clicked={(id) => handleClick(id)}
            editable
            key={card.id}
            data={card}
          />
        ))}
      </div>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <h3 className={classes.modalHeader}>You can edit the details here</h3>
        </Modal.Header>
        <div className={classes.modalBody}>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />

          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <button variant="secondary" onClick={() => handleClose()}>
            Close
          </button>
          <button variant="primary" onClick={() => submitChanges()}>
            Save Changes
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Tab2;
