import React from "react";
import "./All.css";
// import Button from 'react-bootstrap/Button';
// import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <div className="container ">
      <section className="home-section py-5">
        <div>
          <h2>Create your Zaxier Account</h2>
        </div>
        <div className="home-content">
          <div>
            <form className="row g-3 py-5">
              <div className="col-md-4">
                <label for="validationDefault01" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="validationDefault01"
                  required
                  
                />
              </div>
              <div className="col-md-4">
                <label for="validationDefault02" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="validationDefaultUsername" className="form-label">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationDefault03" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div className="col-md-3">
                <label for="validationDefault05" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  required
                />
              </div>
              <div className="col-md-3">
                <label for="validationDefault04" className="form-label">
                  Date
                </label>
                <p><input type="text" id="datepicker" className="form-control"/></p>
              </div>
              
              <div className="col-12">
                <div className="form-check">
                <input
                    type="checkbox"
                  />&nbsp;&nbsp;                Agree to terms and conditions &nbsp;&nbsp;
                  
                  
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-success" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BasicExample;
