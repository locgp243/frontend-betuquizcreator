import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/Home/HomePage";
import ManageUser from "./Components/Admin/Content/ManageUser";
import Dashbroad from "./Components/Admin/Content/Dashbroad";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import DetailUser from "./Components/User/DetailUser";
import DetailQuiz from "./Components/User/DetailQuiz";
import ManageQuiz from "./Components/Admin/Content/ManageQuiz";
import Report from "./Components/Admin/Content/Report";
import ReportDetail from "./Components/Admin/Content/ReportDetail";
import ManageQuestion from "./Components/User/ManageQuestion";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/danh-sach-bai-test" element={<User />} />
        <Route path="/detail-user" element={<DetailUser />} />
        <Route path="/danh-sach-bai-test/quiz/:id" element={<DetailQuiz />} />
      </Route>

      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashbroad />} />
        <Route path="manage-user" element={<ManageUser />} />
        <Route path="manage-quiz" element={<ManageQuiz />} />
        <Route path="manage-question" element={<ManageQuestion />} />
        <Route path="thong-ke" element={<Report />} />
        <Route path="thong-ke/chi-tiet/:id" element={<ReportDetail />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
