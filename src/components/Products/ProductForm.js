import React, { Fragment } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function ProductForm(props) {
  return (
    <Fragment>
      <Form>
        <FormGroup>
          <Label for="code">Kode Produk</Label>
          <Input type="text" name="code"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Nama</Label>
          <Input type="text" name="name"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="price">Harga</Label>
          <Input type="text" name="price"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="material">Material</Label>
          <Input type="text" name="material"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="width">Lebar</Label>
          <Input type="text" name="width"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Deskripsi</Label>
          <Input type="text" name="description"></Input>
        </FormGroup>
      </Form>
    </Fragment>
  );
}

export default ProductForm;
