import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    gender: "",
    zip: "",
    testPackage: "",
  });

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  const onSubmitFunc = (e) => {
    e.preventDefault();

    const orderId = Math.floor(Math.random() * 600000);

    const randomLabs = pickRandom(["Lab1", "Lab2", "Lab3"]);

    const data = {
      state,
      orderId,
      randomLabs,
    };
    localStorage.setItem("data", JSON.stringify(data));
    history.push("/registered");

    // console.log("state:", str);
  };

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <h4 className="my-4">Welcome to ABC healthcare! </h4>

      <hr />

      <h6>Registration Form: </h6>

      <form onSubmit={onSubmitFunc}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              First Name:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="first name"
            onChange={onChangeHandler}
            value={state.firstName}
            name="firstName"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon2">
              Last Name:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="last name"
            onChange={onChangeHandler}
            value={state.lastName}
            name="lastName"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              DOB:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="DOB"
            onChange={onChangeHandler}
            value={state.dob}
            name="dob"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon4">
              E-mail:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="e-mail"
            onChange={onChangeHandler}
            value={state.email}
            name="email"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon5">
              Gender:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="gender"
            onChange={onChangeHandler}
            value={state.gender}
            name="gender"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon6">
              Zip Code:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="zip code"
            onChange={onChangeHandler}
            value={state.zip}
            name="zip"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon7">
              Test Package:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="test package"
            onChange={onChangeHandler}
            value={state.testPackage}
            name="testPackage"
          />
        </div>

        <input className="btn btn-primary btn-block" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
