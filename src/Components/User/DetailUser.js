import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { putUpdateUser } from "../../services/apiServices";
import _ from "lodash";
import "./DetailUser.scss";
const DetailUser = (props) => {
  const [show, setShow] = useState(true);
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const password = localStorage.getItem("password");
  const email = localStorage.getItem("email");
  const avatar = localStorage.getItem("avatar");

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {});

  return (
    <div className="detail-user-container container">
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" disabled value={email} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Role</label>
          <select className="form-select" value={role} disabled>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Avatar</label>
          <input className="form-control form-control-md" type="file"></input>
        </div>
        <div className="col-md-12 img-preview">
          <img src={avatar} />
        </div>
      </form>
    </div>
  );
};

export default DetailUser;
