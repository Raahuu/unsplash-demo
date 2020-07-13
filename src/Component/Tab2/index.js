import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "../../Component/Card";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "./style.module.css";

const Tab2 = () => {
  const [show, setShow] = useState(false);
  const [selectedID, setSelectedID] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const cardData = useSelector((state) => state.images.data);
  const loading = useSelector((state) => state.images.fetching);
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

  const handleClick = (id, type) => {
    if (type === "delete") {
      dispatch({ type: "DELETE", payload: id });
    } else {
      setSelectedID(id);
      setShow(true);
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedID]);

  return (
    <div className={classes.cardHolderContainer}>
      {loading ? (
        <div className={classes.loaderContainer}>
          <ClipLoader size={75} color={"#123abc"} loading />
        </div>
      ) : (
        <div className={classes.cardContainer}>
          {cardData.map((card) => (
            <Card
              clicked={(id, type) => handleClick(id, type)}
              editable
              key={card.id}
              data={card}
            />
          ))}
        </div>
      )}

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <p className={classes.modalHeader}>You can edit the details here</p>
        </Modal.Header>
        <div className={classes.modalBody}>
          <div className={classes.formItem}>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className={classes.formItem}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className={classes.formCTA}>
            <button
              className={classes.closeBtn}
              variant="secondary"
              onClick={() => handleClose()}
            >
              Close
            </button>
            <button
              className={classes.saveBtn}
              variant="primary"
              onClick={() => submitChanges()}
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tab2;
