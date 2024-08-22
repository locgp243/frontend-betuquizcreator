import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const handleDetailUser = () => {
    navigate("/detail-user");
  };

  const handleLogout = () => {
    localStorage.removeItem("accountId");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("token");
    navigate("/");
  };
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          BETU Quiz Creator
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Trang chủ
            </NavLink>
            <NavLink to="/danh-sach-bai-test" className="nav-link">
              Làm bài test
            </NavLink>
            <NavLink to="/admin/manage-quiz" className="nav-link">
              Tạo bài test
            </NavLink>
            {/* <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink> */}
          </Nav>
          <Nav>
            {token ? (
              <>
                <NavDropdown
                  title={`Xin chào, ${username}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <button className="btn-logout" onClick={handleDetailUser}>
                      Thông tin chi tiết
                    </button>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <button className="btn-logout" onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  Đăng nhập
                </button>
                <button className="btn-signup" onClick={() => handleRegister()}>
                  Đăng ký
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
