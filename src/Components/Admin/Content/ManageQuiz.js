import React, { useState } from "react";
import axios from "axios"; // Import thư viện axios để thực hiện HTTP request
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";

const ManageQuiz = () => {
  const [quizList, setQuizList] = useState([]);
  const usename = localStorage.getItem("username");

  // Khởi tạo state để lưu trữ thông tin về bài quiz mới
  const [quizData, setQuizData] = useState({
    quizTitle: "",
    quizDesc: "",
    createBy: usename,
    quizDetails: [],
  });

  // Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7067/api/Quizs",
        quizData
      );
      console.log("Quiz created:", response.data);
      fetchQuizData();

      setQuizData({
        quizTitle: "",
        quizDesc: "",
        createBy: "",
        quizDetails: [],
      });
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  const handleDelete = async (quizId) => {
    try {
      await axios.delete(`https://localhost:7067/api/Quizs/${quizId}`);
      console.log("Quiz deleted successfully!");

      // Sau khi xóa thành công, cập nhật lại danh sách bài quiz bằng cách gọi lại fetchQuizData
      fetchQuizData();
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  const fetchQuizData = async () => {
    try {
      const response = await axios.get("https://localhost:7067/api/Quizs");
      console.log("check res: ", response.data.$values);
      setQuizList(response.data.$values);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  return (
    <div className="manage-quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            <div className="title">Quản lý bài test</div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">
                  Thêm bài test:
                </legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="quizTitle"
                    name="quizTitle"
                    value={quizData.quizTitle}
                    onChange={handleChange}
                    placeholder="Tên bài test"
                  />
                  <label htmlFor="quizTitle">Test Title: </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="quizDesc"
                    name="quizDesc"
                    value={quizData.quizDesc}
                    onChange={handleChange}
                    placeholder="Miêu tả bài kiểm tra"
                  />
                  <label htmlFor="quizDesc">Miêu tả: </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="createBy"
                    name="createBy"
                    value={quizData.createBy}
                    onChange={handleChange}
                    placeholder="Người tạo"
                    disabled
                  />
                  <label htmlFor="createBy">Người tạo: </label>
                </div>

                <button className="btn btn-primary" onClick={handleSubmit}>
                  Tạo bài kiểm tra
                </button>
              </fieldset>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="title">Danh sách các bài test</div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="list-detail">
              <TableQuiz
                fetchQuizData={fetchQuizData}
                quizList={quizList}
                setQuizList={setQuizList}
                handleDelete={handleDelete}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ManageQuiz;
