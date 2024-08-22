import ModelCreaterUser from "./ModelCreaterUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUser, getUserPaginate } from "../../../services/apiServices";
import ModelUpdateUser from "./ModelUpdateUser";
import ModelDeleteUser from "./ModelDeleteUser";
import { useNavigate } from "react-router-dom";

const ManageUser = (props) => {
  const role = localStorage.getItem("role");
  let navigate = useNavigate();
  const PAGE_SIZE = 6;
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);

  const [showModelCreaterUser, setShowModelCreaterUser] = useState(false);
  const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);
  const [showModelDeleteUser, setShowModelDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    if (role !== "admin") {
      alert("Chỉ có admin mới được vào trang này");
      navigate("/admin/manage-quiz");
    }
    fetchListUsersPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUser();
    setListUsers(res);
  };

  const fetchListUsersPaginate = async (page) => {
    let res = await getUserPaginate(page, PAGE_SIZE);

    let res1 = await getAllUser();
    console.log("Check res all: ", res1);
    if (res && res.$values.length > 0) {
      setListUsers(res.$values);
      setPageCount(Math.ceil(res1.$values.length / PAGE_SIZE));
    }
  };

  const handleClickUpdateBtn = (user) => {
    setShowModelUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickDeleteBtn = (user) => {
    setShowModelDeleteUser(true);
    setDataDelete(user);
    //console.log("Check user cần xóa: ", user);
  };

  return (
    <div className="manage-user-container">
      <h2 className="title">Quản lý người dùng</h2>
      <div className="users-content">
        <button
          className="btn-add-new"
          onClick={() => setShowModelCreaterUser(true)}
        >
          {" "}
          <FcPlus />
          Thêm User
        </button>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickUpdateBtn={handleClickUpdateBtn}
            handleClickDeleteBtn={handleClickDeleteBtn}
            fetchListUsersPaginate={fetchListUsersPaginate}
            pageCount={pageCount}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
          />
        </div>
        <ModelCreaterUser
          show={showModelCreaterUser}
          setShow={setShowModelCreaterUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersPaginate={fetchListUsersPaginate}
          pageCount={pageCount}
          pageCurrent={pageCurrent}
        />
        <ModelUpdateUser
          show={showModelUpdateUser}
          setShow={setShowModelUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          setDataUpdate={setDataUpdate}
          fetchListUsersPaginate={fetchListUsersPaginate}
          pageCount={pageCount}
          pageCurrent={pageCurrent}
        />
        <ModelDeleteUser
          show={showModelDeleteUser}
          setShow={setShowModelDeleteUser}
          dataDelete={dataDelete}
          setDataDelete={setDataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersPaginate={fetchListUsersPaginate}
          pageCount={pageCount}
          pageCurrent={pageCurrent}
          setPageCurrent={setPageCurrent}
        />
      </div>
    </div>
  );
};

export default ManageUser;
