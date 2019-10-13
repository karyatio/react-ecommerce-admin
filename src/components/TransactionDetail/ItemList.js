import React from "react";

export default function ItemList(props) {
  const { _id, quantity } = props.product;
  return (
    <div>
      <p>{_id}</p>
      <p>{quantity}</p>
    </div>
  );
}
