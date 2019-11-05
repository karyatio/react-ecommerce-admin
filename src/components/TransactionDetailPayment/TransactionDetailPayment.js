import React from "react";
import Button from "@material-ui/core/Button";

function TransactionDetailPayment({ total, payments }) {
  const getStatusBayar = () => {
    if (!payments) return "";

    if (payments.isPaidOff) {
      return "Terferivikasi";
    } else {
      return "Belum Terferivikasi";
    }
  };
  return (
    <div className="payments">
      <div className="info">
        <h3>Pembayaran</h3>
        <p>Status Bayar : {getStatusBayar()}</p>
        <p>Metode Bayar : {payments ? payments.method : ""}</p>
        <p>Nomor Rekening Pengirim : {payments ? payments.rekNumber : ""}</p>
        <p>Total Bayar : Rp.{total}</p>
      </div>
      <div className="pay-image">
        <img
          src={
            payments
              ? `${process.env.REACT_APP_API_URL}/images/${payments.image}`
              : ""
          }
          alt="payment"
        />
        {/* <Button variant="contained" color="primary">
          Valid
        </Button>

        <Button variant="contained" color="secondary">
          Tidak Valid
        </Button> */}
      </div>
    </div>
  );
}

export default TransactionDetailPayment;
