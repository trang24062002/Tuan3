import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homeStyles.css';
import '../styles/sidebarStyles.css'; 
import Content from './Layout/DefaultLayout/Content'; // Đường dẫn đúng

const Home = () => {
  return (
    <div className='h-screen flex'>
      {/* Sidebar */}
      <aside className='sidebar'>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>
            <Link to="/monhoc">Môn Học</Link>
          </li>
          <li className='sidebar-item'>
            <Link to="/khoahoc">Khoa Học</Link>
          </li>
          <li className='sidebar-item'>
            <Link to="/lophoc">Lớp Học</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className='flex-grow flex flex-col'>
        <header className='header'>
          <nav>
            <ul className='flex space-x-4'>
              <li className='header_navbar-item'>
                <Link to='/'>Welcome to Class Master!</Link>
              </li>
            </ul>
            <ul className='flex space-x-4'>
              <li className='header_navbar-item'>
                <Link to='/account'>Thông Báo</Link>
              </li>
              <li className='header_navbar-item'>
                <Link to='/help'>Trợ Giúp</Link>
              </li>
              <li className='header_navbar-item'>
                <Link to='/register'>GV001</Link>
              </li>
              
            </ul>
          </nav>
        </header>

        <div className='flex-grow flex flex-col justify-center items-center bg-blue-200'>
          <h1 className='mb-4'>Chào mừng đến với Home!</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
