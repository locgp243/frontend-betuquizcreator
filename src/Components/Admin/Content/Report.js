import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuizApi } from "../../../services/apiServices";
import "./Report.scss";
const Report = () => {
  let navigate = useNavigate();
  const [arrQuiz, setArrQuiz] = useState([]);
  //const [idQuizDetail, setIdQuizDetail] = useState(0);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    const res = await getQuizApi();
    console.log("Res: ", res);
    setArrQuiz(res.$values);
  };

  const handleQuiz = (id, title) => {
    //setIdQuizDetail(id);
    //localStorage.setItem("idQuizDetail", id);
    navigate(`/admin/thong-ke/chi-tiet/${id}`, { state: { quizTitle: title } });
  };
  return (
    <div className="container report-container d-flex">
      {arrQuiz.map((quiz, index) => {
        console.log("Quiz: ", quiz);
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-title">
                {quiz.quizId}. {quiz.quizTitle}
              </h5>
              <p className="card-text">Miêu tả: {quiz.quizDesc}</p>
              <p className="card-text">Người tạo: {quiz.createBy}</p>
              <a
                className="btn btn-primary"
                onClick={() => handleQuiz(quiz.quizId, quiz.quizTitle)}
              >
                Xem thống kê
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Report;
