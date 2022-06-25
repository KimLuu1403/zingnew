import "./index.css";
import { Link } from "react-router-dom";
import { Home, About, Contact, Logout, Book, Admin } from "../../Pages";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header-pd">
      <div className="logo-header">
        <Link className="nav-link" to="/" element={<Home />}>
          <img
            src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
            alt=""
            className="logo"
          />
          <span>TRI THỨC TRỰC TUYẾN</span>
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav header-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/book" element={<Book />}>
              <span>Sách</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<About />}>
              <span>Thế giới</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Kinh doanh</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Công Nghệ</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Sức khỏe</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Thể thao</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Giải trí</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Đời sống</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Du lịch</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" element={<Contact />}>
              <span>Lifestyle</span>
            </Link>
          </li>
        </ul>
      </div>
      <h3 className="logout-css">
        <Link className="nav-link" to="/admin" element={<Admin />}>
          <img
            src="https://zalo-api.zadn.vn/api/emoticon/sticker/webpc?eid=45353&size=130&version=2"
            alt=""
          />
        </Link>
        <Link className="nav-link" to="/logout" element={<Logout />}>
          <span>Logout</span>
        </Link>
      </h3>
    </nav>
  );
};

export default Header;
