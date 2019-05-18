import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav>
      <header>
        <Link
          to={"/"}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to={"/vendors"}
          className="nav-link"
        >
          All Producers
        </Link>
        <Link
          to={"/maps"}
          className="nav-link"
        >
          Market Map
        </Link>
        <Link
          to={"/create"}
          className="nav-link"
        >
          Become a Producer
        </Link>
        {/* Login will be a dropdown */}
        {/* <Link to={'/vendor/login'}>Login</Link> */}
      </header>
    </nav>
  );
};

export default Header;
