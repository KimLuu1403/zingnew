import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Admin } from "./Pages/index";
const AdminPage = () => {
  return (
    <div>
      <div
        style={{
          width: 256,
        }}
        className="menu-admin-page"
      >
        <Link to="/admin" element={<Admin />}>
          <h3>
            <UserOutlined /> Page
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
