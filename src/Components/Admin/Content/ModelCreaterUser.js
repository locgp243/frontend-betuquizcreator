import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { postCreateUser } from "../../../services/apiServices";

const ModelCreaterUser = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("user");
    setAvatar("");
    setPreviewAvatar("");
  };
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [avatar, setAvatar] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");

  const handleChangeAvatar = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewAvatar(URL.createObjectURL(e.target.files[0]));
      setAvatar(e.target.files[0]);
    } else {
      setPreviewAvatar("");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreateUser = async () => {
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Email không hợp lệ...");
      return;
    }

    if (!username) {
      toast.error("Username không hợp lệ...");
      return;
    }

    if (!password) {
      toast.error("Password không hợp lệ...");
      return;
    }

    if (!avatar) {
      toast.error("Avatar không hợp lệ...");
      return;
    }
    const data = new FormData();
    data.append("Username", username);
    data.append("Password", password);
    data.append("Email", email);
    data.append("Role", role);
    data.append("Avatar", avatar);

    let res = await postCreateUser(username, password, email, role, avatar);
    console.log(">>>Check res: ", res);
    if (res) {
      toast.success(`Thêm người dùng ${res.username} thành công`);
      await props.fetchListUsersPaginate(props.pageCurrent);
      handleClose();
    } else {
      toast.error("Có lỗi xảy ra...");
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Thêm User
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        className="model-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label">Avatar</label>
              <input
                className="form-control form-control-md"
                type="file"
                onChange={(e) => handleChangeAvatar(e)}
              ></input>
            </div>
            <div className="col-md-12 img-preview">
              {previewAvatar ? (
                <img src={previewAvatar} />
              ) : (
                <span>Image Preview</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelCreaterUser;
