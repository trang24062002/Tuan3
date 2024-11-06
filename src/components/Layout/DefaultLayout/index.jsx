import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/sidebarStyles.css'; // Đảm bảo đường dẫn đúng

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/monhoc">
            <button className="sidebar-button">Môn học</button>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/khoahoc">
            <button className="sidebar-button">Khoa học</button>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/lophoc">
            <button className="sidebar-button">Lớp học</button>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
