import React from "react";
import { useHistory } from "react-router-dom";

const Registered = () => {
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem("data"));
  console.log("data", data);
  return (
    <div className="container">
      <h4 className="my-4">
        {" "}
        Candidate Successfully Registered with Order_id :{" "}
        <strong>{data.orderId}</strong>
      </h4>
      <h5 className="my-4">
        Candidate needs to visit on below Lab: <br /> {data.randomLabs},{" "}
        {data.state.zip}
      </h5>

      <hr/>

      <button
        className="btn btn-secondary btn-block"
        onClick={() => history.push("/")}
      >
        Home
      </button>
    </div>
  );
};

export default Registered;
