import millify from "millify";
import React from "react";

const CardView = ({ data, navigate }) => {
  return (
    <div
      onClick={() => navigate(`/coin/${data.id}`)}
      className=" p-3 rounded bg-warning text-black d-flex  flex-column justify-content-between w-100 text-center card"
    >
      <div className="fw-bold">
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>${Number(data.priceUsd).toFixed(2)}</p>
      </div>
      <div className="d-flex flex-column mt-3 border p-2 bg-primary-subtle rounded">
        <span
          className={
            data.changePercent24Hr > 0 ? "text-success" : "text-danger"
          }
        >
          {Number(data.changePercent24Hr).toFixed(2)} %
        </span>{" "}
        <span>Günlük Değişim</span>
      </div>
    </div>
  );
};

export default CardView;
