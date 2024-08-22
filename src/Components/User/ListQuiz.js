import { useEffect, useState } from "react";
import { getQuizApi } from "../../services/apiServices";
import DetailQuiz from "./DetailQuiz";
import { useNavigate, useParams } from "react-router-dom";

const ListQuiz = () => {
  let navigate = useNavigate();
  const [arrQuiz, setArrQuiz] = useState([]);
  const [idQuizDetail, setIdQuizDetail] = useState(0);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    const res = await getQuizApi();
    setArrQuiz(res.$values);
  };

  const handleQuiz = (id, title) => {
    //setIdQuizDetail(id);
    //localStorage.setItem("idQuizDetail", id);
    navigate(`quiz/${id}`, { state: { quizTitle: title } });
  };
  return (
    <div className="list-quiz-container container">
      {arrQuiz.map((quiz, index) => {
        console.log("Quiz: ", quiz);
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
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
                Làm bài test
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListQuiz;
