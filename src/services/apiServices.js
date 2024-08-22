import axiosCustomize from "../../src/utils/axiosCustomize";

const postCreateUser = (username, password, email, role, avatar) => {
  const data = new FormData();
  data.append("Username", username);
  data.append("Password", password);
  data.append("Email", email);
  data.append("Role", role);
  data.append("Avatar", avatar);

  return axiosCustomize.post("api/Accounts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const putUpdateUser = (id, username, role, avatar) => {
  const data = new FormData();
  data.append("Username", username);
  data.append("Role", role);
  data.append("Avatar", avatar);

  console.log("Check data: ", data);

  return axiosCustomize.put(`api/Accounts/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const deleteUser = (id) => {
  return axiosCustomize.delete(`api/Accounts/${id}`, { id: id });
};

const getAllUser = () => {
  return axiosCustomize.get("api/Accounts/all");
};

const getUserPaginate = (page, pageSize) => {
  return axiosCustomize.get(`api/Accounts?page=${page}&pageSize=${pageSize}`);
};

const LoginUser = (email, password) => {
  return axiosCustomize.post(
    `api/Accounts/Login`,
    { email: email, password: password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const postRegisterUser = (password, email) => {
  const data = new FormData();
  data.append("Username", "");
  data.append("Password", password);
  data.append("Email", email);
  data.append("Role", "user");
  data.append("Avatar", "");

  return axiosCustomize.post("api/Accounts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getQuizApi = () => {
  return axiosCustomize.get("/api/Quizs");
};

// const postSubmitAccountQuiz = (accountId, quizId, point) => {
//   const data = new FormData();
//   data.append("AccountId", accountId);
//   data.append("QuizId", quizId);
//   data.append("Point", point);

//   return axiosCustomize.post("/api/Quizs/submit", data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

const postSubmitAccountQuiz = (accountId, quizId, point) => {
  return axiosCustomize.post("/api/Quizs/submit", {
    AccountId: accountId,
    QuizId: quizId,
    Point: point,
  });
};
export {
  postCreateUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserPaginate,
  LoginUser,
  getQuizApi,
  postRegisterUser,
  postSubmitAccountQuiz,
};
