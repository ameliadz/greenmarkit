import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <header>
        <Link
          to={"/"}
        >
          Home
        </Link>
        <Link
          to={"/vendors"}
        >
          All Producers
        </Link>
        <Link
          to={"/maps"}
        >
          Market Map
        </Link>
        <Link
          to={"/create"}
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
