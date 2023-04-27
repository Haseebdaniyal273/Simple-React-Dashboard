import React from "react";
import "./login.css";
// import Button from 'react-bootstrap/Button';
// import Form from "react-bootstrap/Form";

function Example() {
  return (
    <div className="container ">
      <section className="home-section py-5">
        <div>
          <h2>Login your Zaxier Account</h2>
        </div>
        <div className="home-content">
          <div>
            <form className="row g-3 py-5">
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  className=" sz "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="sz"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                <input
                    type="checkbox"
                  />&nbsp;&nbsp;                Remember Me &nbsp;&nbsp;
                  
                  
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-success" type="submit">
                  Login
                </button>
                </div></form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Example;
