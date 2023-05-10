import React from "react";

const BranchRegistry: React.FC = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-12">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" id="inputName5" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail5" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword5" />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddres5s"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default BranchRegistry;
