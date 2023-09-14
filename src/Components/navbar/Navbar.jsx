import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

function Navbar({ isWhiteBackground, isOfferVisible }) {
  const [colorChange, setColorchange] = useState(false);
  const [sideBarHidden, setSideBarHidden] = useState(null);

  const [isAuth, setIsAuth] = useState(false);

  const location = useLocation();

  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  if (!isWhiteBackground) {
    window.addEventListener("scroll", changeNavbarColor);
  }

  const handleShowSideMenu = () => {
    setSideBarHidden((prev) => {
      if (prev === null) return false;
      return !prev;
    });
  };

  const handleBlankScreen = () => {
    setSideBarHidden(true);
  };

  const handleLinkClick = () => {
    handleShowSideMenu();
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsAuth(false);
  };

  return (
    <>
      <div
        className={`${styles.blank_screen} ${
          sideBarHidden || sideBarHidden === null ? "hidden" : ""
        }`}
        onClick={handleBlankScreen}></div>
      {isOfferVisible && !colorChange && (
        <div className={styles.discount}>
          <p>Upto 50% of on your trips</p>
        </div>
      )}
      <div
        className={styles.navouter}
        style={
          isWhiteBackground || colorChange
            ? {
                backgroundColor: "white",
                top: "0",
                boxShadow: " rgba(17, 17, 26, 0.1) 0px 1px 0px",
              }
            : {}
        }>
        <div
          className={`${styles.navbar} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
          <div>
            <span className="text-3xl font-semibold whitespace-nowrap">
              Voyawander
            </span>
          </div>

          <div className={styles.sidebar_icon} onClick={handleShowSideMenu}>
            <i
              className="fa-solid fa-bars fa-xl"
              style={{ color: "#000000" }}
            />
          </div>
          <div className={`${styles.desk_links}`}>
            <Link
              to={"/"}
              className={`${
                location.pathname === "/" ? styles.link_active_desk : ""
              } font-semibold`}>
              Home
            </Link>
            <Link
              to={"/"}
              className={`${
                location.pathname === "/aboutus" ? styles.link_active_desk : ""
              } font-semibold`}>
              About Us
            </Link>
            <Link
              to={"/hostel"}
              className={`${
                location.pathname === "/hostel" ? styles.link_active_desk : ""
              } font-semibold`}>
              Hostels
            </Link>
            <Link
              to={"/flights"}
              className={`${
                location.pathname === "/flights" ? styles.link_active_desk : ""
              } font-semibold`}>
              Flights
            </Link>
            <Link
              to={"/contactus"}
              className={`${
                location.pathname === "/contactus"
                  ? styles.link_active_desk
                  : ""
              } font-semibold`}>
              Contact Us
            </Link>
            {!isAuth && (
              <Link
                to={"/login"}
                className={`${
                  location.pathname === "/login" ? styles.link_active_desk : ""
                } font-semibold`}>
                Login
              </Link>
            )}
            {isAuth && (
              <Link
                onClick={handleLogOut}
                className={`${
                  location.pathname === "/login" ? styles.link_active_desk : ""
                } font-semibold`}>
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* mobile sidebars */}
      <div
        style={{ zIndex: 330 }}
        className={`${styles.mobile_sidebar} ${
          !sideBarHidden && sideBarHidden !== null
            ? `${styles.sidebar_anima}`
            : sideBarHidden === null
            ? ""
            : `${styles.sidebar_backward}`
        } z-50`}>
        <p className={`${styles.logo}`}>Voyawander</p>

        <Link
          onClick={handleLinkClick}
          to={"/"}
          className={`${
            location.pathname === "/" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Home
        </Link>

        <Link
          onClick={handleLinkClick}
          to={"/"}
          className={`${
            location.pathname === "/aboutus" ? styles.mobile_active_link : ""
          } font-semibold`}>
          About Us
        </Link>

        <Link
          onClick={handleLinkClick}
          to={"/hostel"}
          className={`${
            location.pathname === "/hostel" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Hostels
        </Link>

        <Link
          onClick={handleLinkClick}
          to={"/flights"}
          className={`${
            location.pathname === "/flights" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Flights
        </Link>

        <Link
          onClick={handleLinkClick}
          to={"/contactus"}
          className={`${
            location.pathname === "/contactus" ? styles.mobile_active_link : ""
          } font-semibold`}>
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Navbar;
