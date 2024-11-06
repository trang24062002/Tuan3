// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/sidebarStyles.css";

const Sidebar = ({ onShowContent }) => {
    return (
      <div className="sidebar">
        
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/monhoc" onClick={onShowContent}>Môn Học</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/khoahoc" onClick={onShowContent}>Khoa Học</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/lophoc" onClick={onShowContent}>Lớp Học</Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;
