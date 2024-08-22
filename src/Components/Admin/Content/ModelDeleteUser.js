import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiServices";
import { toast } from "react-toastify";

const ModelDeleteUser = (props) => {
  const { show, setShow, dataDelete, pageCurrent } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //console.log(dataDelete);

  const handleSubmitDeleteUser = async (id) => {
    let res = await deleteUser(id);

    if (res) {
      toast.success(`Bạn đã xóa user có id là ${id} thành công`);
      handleClose(true);
      props.setPageCurrent(1);
      await props.fetchListUsersPaginate(1);
      handleClose();
    } else {
      toast.error(`Bạn đã xóa thất bại`);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Thông báo xóa [
            {dataDelete && dataDelete.username ? dataDelete.username : "Lỗi..."}
            ]
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có muốn chắc rằng sẽ xóa tài khoản: [
          {dataDelete && dataDelete.username ? dataDelete.username : "Lỗi..."}]{" "}
          có email là [
          {dataDelete && dataDelete.email ? dataDelete.email : "Lỗi..."}] này
          không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quay lại
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSubmitDeleteUser(dataDelete.accountId)}
          >
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelDeleteUser;
