import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModelResult = (props) => {
  let { show, handleClose, dataQuiz, point } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kết quả của bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Tổng số câu hỏi: {dataQuiz.length}</div>
          <div>Trả lời đúng: {point}</div>
          <div>Điểm: {point}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelResult;
