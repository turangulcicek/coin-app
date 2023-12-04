import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex align-items-center  justify-content-between p-3">
      <Link to={"/home"} className="d-flex align-items-center h-logo gap-3 ">
        <img src="/c-logo.png" alt="" />
        <h3 className="text-white text-decoration-none">Coinbit</h3>
      </Link>
      <div className="navlinks">
        <NavLink to={"/home"}>HomePage</NavLink>
        <NavLink to={"/"}>Login</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
