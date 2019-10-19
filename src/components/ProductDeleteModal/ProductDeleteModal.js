import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import useStyles from "./styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function ProductDeleteModal({ open, handleClose, handleDelete }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Hapus Produk Ini ?</h2>
        <div>
          <Button variant="contained" onClick={handleClose}>
            Tidak
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Ya
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ProductDeleteModal;
