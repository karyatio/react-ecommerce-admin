import React from "react";

function TransactionDetailInfo({ transaction }) {
  const { user, shippingAddress, processStatus, createdAt } = transaction;
  return (
    <div>
      <h3>Pembelian oleh {user ? user.firstName + " " + user.lastName : ""}</h3>
      <p>Email : {user ? user.email : ""}</p>
      <p>Alamat Pengiriman : {shippingAddress}</p>
      <p>Status Transaksi : {processStatus}</p>
      <p>Tanggal : {createdAt}</p>
    </div>
  );
}

export default TransactionDetailInfo;
