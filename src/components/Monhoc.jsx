// src/Monhoc.jsx
import React from 'react';
import Header from './Layout/DefaultLayout/Header';
import Sidebar from './Layout/DefaultLayout/Sidebar';
import Content from './Layout/DefaultLayout/Content'; // Chắc chắn rằng Content là phần nội dung chính của bạn
import '../styles/homeStyles.css'; // Giữ lại các style đã có cho home

const Monhoc = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          {/* Bạn có thể thêm nội dung khác vào đây nếu cần */}
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Monhoc;
