import React, { useState, useEffect } from "react";
import axios from "axios";

const TableQuiz = (props) => {
  const { quizList } = props;
  const role = localStorage.getItem("role");
  useEffect(() => {
    props.fetchQuizData();
  }, []);

  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Created By</th>
          </tr>
        </thead>
        <tbody>
          {quizList.map((quiz, index) => (
            <tr key={quiz.quizId}>
              <th scope="row">{quiz.quizId}</th>
              <td>{quiz.quizTitle}</td>
              <td>{quiz.quizDesc}</td>
              <td>{quiz.createBy}</td>
              <td>
                <button className="btn btn-primary">Xem</button>
                {role === "admin" ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      props.handleDelete(quiz.quizId);
                    }}
                  >
                    Xóa
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    disabled
                    onClick={() => {
                      props.handleDelete(quiz.quizId);
                    }}
                  >
                    Xóa
                  </button>
                )}

                {/* <button className="btn btn-warning">Sửa</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableQuiz;
