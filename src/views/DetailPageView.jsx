import millify from "millify";
import React from "react";
import { number } from "yup";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const DetailPageView = ({ model }) => {
  console.log(model);
  return (
    <>
      <h3 className="text-center">
        {model?.coin?.name}
        {model?.coin?.symbol}
      </h3>{" "}
      <div className="row my-5 mx-0 p-5">
        <div className="col-lg-3 d-flex flex-column gap-2 py-3 px-2">
          {model.infoFields.map((data) => (
            <div
              key={data.label}
              className="bg-white rounded shadow-lg text-black text-center"
            >
              <p className="fs-4"> {data.icon}</p>
              <h3>{data.label}</h3>
              <p className="fw-bold"> {millify(data.value)}</p>
            </div>
          ))}
        </div>
        <div className="col-lg-9 d-flex flex-column gap-4 ">
          <Line data={model.chartData} />

          <Bar data={model.chartData} />
        </div>
      </div>
    </>
  );
};

export default DetailPageView;
