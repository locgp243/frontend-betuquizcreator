import { useState, useRef, useEffect } from "react";
import "./User.scss";
import { getQuizApi } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
import ListQuiz from "./ListQuiz";
import DetailQuiz from "./DetailQuiz";
const User = (props) => {
  return (
    <div className="user-container">
      <ListQuiz />
    </div>
  );
};

export default User;
