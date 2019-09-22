import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

function ProductDeleteModal(props) {
  const { closeModal, modal, deleteId } = props;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/products/${deleteId}`)
      .then(res => {
        console.log(res);
        alert("Berhasil delete");
        closeModal();
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <Modal isOpen={modal} toggle={closeModal}>
      <ModalHeader toggle={closeModal}>Modal title</ModalHeader>
      <ModalBody>Yakin ingin menghapus {deleteId}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete}>
          Ya
        </Button>
        <Button color="secondary" onClick={closeModal}>
          Tidak
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ProductDeleteModal;
