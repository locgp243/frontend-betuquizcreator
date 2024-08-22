import _ from "lodash";
import { useEffect, useState } from "react";

const Question = (props) => {
  const { index, data } = props;

  useEffect(() => {
    props.resetAnswerClasses();
  }, [index]);

  if (_.isEmpty(data)) {
    return <>Loading...</>;
  }

  const apiUrl = "https://localhost:7067";
  const avatarPath = data.avatar;
  const fullAvatarUrl = apiUrl + avatarPath;

  const handleCheckAnswer = (e, option) => {
    if (option === data.correctAnswer) {
      e.target.classList.add("correct");
      props.handlePoint();
    } else {
      e.target.classList.add("error");
    }
  };

  return (
    <>
      <div className="question-img">
        <img src={fullAvatarUrl} />
      </div>
      <div className="question">
        <strong>Question {index + 1}:</strong> {data.question}
      </div>
      <div className="answers">
        <div className="row">
          <div className="col">
            <button className="option" onClick={(e) => handleCheckAnswer(e, 1)}>
              A. {data.option1}
            </button>
          </div>
          <div className="col">
            <button className="option" onClick={(e) => handleCheckAnswer(e, 2)}>
              B. {data.option2}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="option" onClick={(e) => handleCheckAnswer(e, 3)}>
              C. {data.option3}
            </button>
          </div>
          <div className="col">
            <button className="option" onClick={(e) => handleCheckAnswer(e, 4)}>
              D. {data.option4}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
