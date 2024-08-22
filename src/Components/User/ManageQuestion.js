import React, { useState } from "react";
import axios from "axios";
import { Toast } from "bootstrap";
import "./ManageQuestion.scss";
import { toast } from "react-toastify";
const ManageQuestion = () => {
  const [formData, setFormData] = useState({
    quizId: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      `https://localhost:7067/api/Quizs/${formData.quizId}/quizDetails`,
      formData
    );
    if (res) {
      toast.success("Thêm câu hỏi thành công");
    }
    // try {
    //   const response = await axios.post(
    //     `https://localhost:7067/api/Quizs/${formData.quizId}/quizDetails`,

    //     formData
    //   );
    //   console.log(response.data);
    //   Toast.success("Thêm câu hỏi thành công");
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="manage-question-container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            QuizID:
          </label>
          <input
            type="number"
            name="quizId"
            value={formData.quizId}
            onChange={handleChange}
            placeholder="Quiz ID"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Question:
          </label>
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Question"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Option 1:
          </label>
          <input
            type="text"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
            placeholder="Option 1"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Option 2:
          </label>
          <input
            type="text"
            name="option2"
            value={formData.option2}
            onChange={handleChange}
            placeholder="Option 2"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Option 3:
          </label>
          <input
            type="text"
            name="option3"
            value={formData.option3}
            onChange={handleChange}
            placeholder="Option 3"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Option 3:
          </label>
          <input
            type="text"
            name="option4"
            value={formData.option4}
            onChange={handleChange}
            placeholder="Option 4"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Đáp án đúng:
          </label>
          <input
            type="text"
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleChange}
            placeholder="Correct Answer"
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Avatar:
          </label>
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Tạo bài quiz
        </button>
      </form>
    </div>
  );
};

export default ManageQuestion;

// import { useState } from "react";
// import Select from "react-select";
// import "./ManageQuestion.scss";
// import { BsFillPatchPlusFill } from "react-icons/bs";
// import { BsPatchMinusFill } from "react-icons/bs";
// import { AiOutlineMinusCircle } from "react-icons/ai";
// import { AiFillPlusSquare } from "react-icons/ai";
// import { RiImageAddFill } from "react-icons/ri";
// import { v4 as uuidv4 } from "uuid";
// import _ from "lodash";

// const ManageQuestion = (props) => {
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];
//   const [selectedQuiz, setSelectedQuiz] = useState({});

//   const [questions, setQuestions] = useState([
//     {
//       id: uuidv4(),
//       desciption: "questions 1",
//       imageFile: "",
//       imageName: "",
//       answers: [
//         {
//           id: uuidv4(),
//           description: "answer 1",
//           isCorrect: false,
//         },
//       ],
//     },
//   ]);

//   const handleAddRemoveQuestion = (type, id) => {
//     if (type === "ADD") {
//       const newQuestion = {
//         id: uuidv4(),
//         desciption: "",
//         imageFile: "",
//         imageName: "",
//         answers: [
//           {
//             id: uuidv4(),
//             description: "",
//             isCorrect: false,
//           },
//         ],
//       };

//       setQuestions([...questions, newQuestion]);
//     }
//     if (type === "REMOVE") {
//       let questionsClone = _.cloneDeep(questions);
//       questionsClone = questionsClone.filter((item) => item.id !== id);
//       setQuestions(questionsClone);
//     }
//   };

//   const handleAddRemoveAnswer = (type, questionId, anwserId) => {
//     let questionsClone = _.cloneDeep(questions);
//     if (type === "ADD") {
//       const newAnswer = {
//         id: uuidv4(),
//         description: "",
//         isCorrect: false,
//       };

//       let index = questionsClone.findIndex((item) => item.id === questionId);
//       questionsClone[index].answers.push(newAnswer);
//       setQuestions(questionsClone);
//     }
//     if (type === "REMOVE") {
//       let index = questionsClone.findIndex((item) => item.id === questionId);
//       questionsClone[index].answers = questionsClone[index].answers.filter(
//         (item) => item.id !== anwserId
//       );
//       setQuestions(questionsClone);
//     }
//   };

//   console.log("questions: ", questions);
//   return (
//     <div className="questions-container">
//       <div className="title">Manage Questions</div>
//       <hr />
//       <div className="add-new-question">
//         <div className="col-6 form-group">
//           <label className="mb-2">Select Quiz:</label>
//           <Select
//             defaultValue={selectedQuiz}
//             onChange={setSelectedQuiz}
//             options={options}
//           />
//         </div>
//         <div className="mt-3 mb-2 ">Add questions:</div>
//         {questions &&
//           questions.length > 0 &&
//           questions.map((question, index) => {
//             return (
//               <div key={question.id} className="q-main mb-4">
//                 <div className="questions-content">
//                   <div className="form-floating description">
//                     <input
//                       type="type"
//                       className="form-control"
//                       placeholder="name@example.com"
//                       value={question.desciption}
//                     />
//                     <label>Question {index + 1} 's description</label>
//                   </div>
//                   <div className="group-upload">
//                     <label>
//                       <RiImageAddFill className="label-up" />
//                     </label>
//                     <input type={"file"} hidden />
//                     <span>0 file is uploaded</span>
//                   </div>
//                   <div className="btn-add">
//                     <span onClick={() => handleAddRemoveQuestion("ADD", "")}>
//                       <BsFillPatchPlusFill className="icon-add" />
//                     </span>
//                     {questions.length > 1 && (
//                       <span
//                         onClick={() =>
//                           handleAddRemoveQuestion("REMOVE", question.id)
//                         }
//                       >
//                         <BsPatchMinusFill className="icon-remove" />
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {question.answers &&
//                   question.answers.length > 0 &&
//                   question.answers.map((answer, index) => {
//                     return (
//                       <div key={answer.id} className="answers-content">
//                         <input
//                           className="form-check-input iscorrect"
//                           type="checkbox"
//                         />
//                         <div className="form-floating anwser-name">
//                           <input
//                             value={answer.description}
//                             type="type"
//                             className="form-control"
//                             placeholder="name@example.com"
//                           />
//                           <label>Answers {index + 1} </label>
//                         </div>
//                         <div className="btn-group">
//                           <span
//                             onClick={() =>
//                               handleAddRemoveAnswer("ADD", question.id)
//                             }
//                           >
//                             <AiFillPlusSquare className="icon-add" />
//                           </span>
//                           {question.answers.length > 1 && (
//                             <span
//                               onClick={() =>
//                                 handleAddRemoveAnswer(
//                                   "REMOVE",
//                                   question.id,
//                                   answer.id
//                                 )
//                               }
//                             >
//                               <AiOutlineMinusCircle className="icon-remove" />
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default ManageQuestion;
