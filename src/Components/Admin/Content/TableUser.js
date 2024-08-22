import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
//const items = [...Array(33).keys()];

const TableUser = (props) => {
  const { listUsers, pageCount, setPageCurrent } = props;

  useEffect(() => {
    console.log("list user: ", listUsers);
  }, [listUsers]);

  const handlePageClick = (event) => {
    props.fetchListUsersPaginate(+event.selected + 1);
    setPageCurrent(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 ? (
            listUsers.map((user, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{user.accountId}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {/* <td>{user.avatar}</td> */}
                  <td>
                    <button className="btn btn-primary">Xem</button>
                    <button
                      className="btn btn-warning"
                      onClick={() => props.handleClickUpdateBtn(user)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickDeleteBtn(user)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>Đang load...</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={props.pageCurrent - 1}
        />
      </div>
    </>
  );
};

export default TableUser;
