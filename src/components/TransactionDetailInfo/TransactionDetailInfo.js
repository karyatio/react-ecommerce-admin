import React from "react";
import province from "../../data/province.json";
import city from "../../data/city.json";

function TransactionDetailInfo({ transaction }) {
  const {
    user,
    shippingAddress,
    processStatus,
    createdAt,
    resiNumber
  } = transaction;

  const _getShippingAddress = () => {
    const provinceList = province.rajaongkir.results;
    const cityList = city.rajaongkir.results;

    if (shippingAddress) {
      const selectedProvince = provinceList.filter(
        province => province.province_id === shippingAddress.province
      );

      const selectedCity = cityList.filter(
        city => city.city_id === shippingAddress.city
      );

      return (
        <div>
          <p>Provinsi : {selectedProvince[0].province}</p>
          <p>Kota : {selectedCity[0].city_name} </p>
          <p>Alamat Pengiriman : {shippingAddress.address}</p>
          <p>Nomor Telepon : {shippingAddress.phoneNumber}</p>
          <p>Status Transaksi : {processStatus}</p>
        </div>
      );
    }
  };
  return (
    <div>
      <h3>Pembelian oleh {user ? user.firstName + " " + user.lastName : ""}</h3>
      <p>Email : {user ? user.email : ""}</p>
      {_getShippingAddress()}
      <p>Tanggal : {createdAt}</p>
      {resiNumber ? <p>Nomor Resi : {resiNumber}</p> : ""}
    </div>
  );
}

export default TransactionDetailInfo;
