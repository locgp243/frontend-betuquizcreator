import { useEffect, useState } from "react";
import { getQuizApi } from "../../services/apiServices";
import { useLocation, useParams } from "react-router-dom";
import Question from "./Question";
import "./DetailQuiz.scss";
import { postSubmitAccountQuiz } from "../../services/apiServices";
import ModelResult from "./ModelResult";

const DetailQuiz = () => {
  const location = useLocation();
  const params = useParams();
  //const id = localStorage.getItem("idQuizDetail");
  const id = params.id;
  const accountId = localStorage.getItem("accountId");
  //   const [quizDetails, setQuizDetails] = useState(null);
  let [index, setIndex] = useState(0);
  const [dataQuiz, setDataQuiz] = useState([]);
  let [point, setPoint] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getQuizData();
  }, []);

  //console.log("params: ", params.id);

  const getQuizData = async () => {
    const res = await getQuizApi();

    console.log("Check id: ", id);
    console.log("Check value: ", res.$values);

    let value = res.$values.filter((item) => item.quizId === +id);
    console.log("Check: ", value[0].quizDetails.$values);
    setDataQuiz(value[0].quizDetails.$values);
    //const item = res.$values.filter((item) => item.id == id);

    //console.log("Check value: ", res.$values[id - 1]);
    //setDataQuiz(res.$values[id - 1].quizDetails.$values);

    //console.log(res.$values[id - 1].quizDetails.$values);
  };

  console.log("Check quiz data: ", dataQuiz.length - 1, index);

  const handleBtnNextQuestion = () => {
    setIndex(++index);
    console.log("index sau click: ", index);
  };
  const handleBtnBackQuestion = () => {
    setIndex(--index);
    console.log("index sau click: ", index);
  };

  const resetAnswerClasses = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("correct", "error");
    });
  };

  const handlePoint = () => {
    setPoint((point) => point + 1);
  };

  const handleClose = () => {
    setShow(false);
  };

  console.log("point: ", point);
  const handleReturnAnswer = async (accountId, quizId, point) => {
    console.log("Check: ", accountId, quizId, point);
    let res = await postSubmitAccountQuiz(accountId, quizId, point);
    console.log("Check res submit answer: ", res);
    setShow(true);
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <h2>
          Quiz {id}: {location.state?.quizTitle}
        </h2>
        <hr />
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
            resetAnswerClasses={resetAnswerClasses}
            handlePoint={handlePoint}
          />
        </div>
        <div className="group-btn">
          {index !== 0 ? (
            <button
              className="btn btn-secondary"
              onClick={() => handleBtnBackQuestion()}
            >
              Quay lại
            </button>
          ) : (
            []
          )}

          {index === dataQuiz.length - 1 ? (
            <button
              className="btn btn-warning"
              onClick={() => handleReturnAnswer(accountId, id, point)}
            >
              Nộp bài
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => handleBtnNextQuestion()}
            >
              Tiếp theo
            </button>
          )}
        </div>
      </div>
      <div className="right-content">right content</div>
      <ModelResult
        show={show}
        handleClose={handleClose}
        dataQuiz={dataQuiz}
        point={point}
      />
      ;
    </div>
  );
};
export default DetailQuiz;
