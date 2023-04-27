import React from 'react'
// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./All.css";

const Sidebar = () => {
  return (
    <div className="sidebar py-3">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">React SB</span>
    </div>
      <ul className="nav-links">
        <li>
        <Link to="/Dashboard">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
        </Link>
        </li>
        <li>
            <Link to="/Login">
            <i className='bx bx-box' ></i>
            <span className="links_name">login</span>
            </Link>
        </li>
        <li>
            <Link to="/Order">
            <i className='bx bx-list-ul' ></i>
            <span className="links_name">Order list</span> 
            </Link>
         
        </li>
        <li>
        <Link to="/Analytics">
            <i className='bx bx-pie-chart-alt-2' ></i>
            <span className="links_name">Analytics</span>
        </Link>
        </li>
        </ul>
  </div>
  )
}

export default Sidebar
