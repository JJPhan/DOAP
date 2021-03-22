import React, { useState, useEffect } from "react";
import SidebarContainer from "../SearchComponent/SearchContainer";
import { Link } from "react-router-dom";

const SidebarForm = ({
  is_open,
  isSearch,
  currentEmail,
  currentUser,
  closeSide,
  logout,
}) => {
  const submit = () => {
    closeSide(false);
  };

  const sidebarLogout = () => {
    logout();
    closeSide();
  };

  const renderBottomSidebar = () => {
    if (!currentUser) {
      return (
        <div className="signInLinks">
          <Link className="loginBut" to="/login">
            {" "}
            Login{" "}
          </Link>
          <Link className="loginBut sidebar-signup" to="/signup">
            {" "}
            Sign Up{" "}
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          {currentEmail}
          <Link to="/">
            <div>
              <button onClick={() => sidebarLogout()}> Logout </button>
            </div>
          </Link>
        </div>
      );
    }
  };

  let openShow = is_open ? "sidebar-open" : "";

  if (!isSearch) {
    return (
      <div>
        {is_open && <div className="overlay" onClick={submit} />}
        <div className={"sidebar " + openShow}>
          <ul className="sidebar_items">
            <li>
              <div>
                <Link to="/" onClick={submit}>
                  {" "}
                  Discover{" "}
                </Link>
              </div>{" "}
            </li>
            <li>
              <div>
                <Link to="/sneakers" onClick={submit}>
                  {" "}
                  Shop All{" "}
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/airjordans" onClick={submit}>
                  {" "}
                  JORDAN BRAND{" "}
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/nikedunks" onClick={submit}>
                  {" "}
                  NIKE DUNKS{" "}
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/adidas" onClick={submit}>
                  {" "}
                  ADIDAS{" "}
                </Link>
              </div>
            </li>

            <li>
              <a href="https://github.com/JJPhan" target="_blank">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jordanjphan/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <ul className="signin-buttons-container">
                {renderBottomSidebar()}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <SidebarContainer />;
  }
};

export default SidebarForm;
