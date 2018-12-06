import React from "react";
// import "./Header.css";

const Header = () => {
  return (
    <nav className={"navbar is-transparent"} role={"navigation"}>
      <div className={"navbar-brand"}>
        <h1 className={"title is-1"}>
          <a className={"navbar-item"} href={"."}>
            Digital Syriac Manuscripts
          </a>
        </h1>
      </div>

      <div className={"navbar-menu is-active"}>
        <div className={"navbar-start"}>
          <div className={"navbar-item has-dropdown is-hoverable"}>
            <a className={"navbar-link"} href=".">
              About
            </a>
            <div className={"navbar-dropdown"}>
              <a className={"navbar-item"} href={"."}>
                Participants
              </a>
            </div>
          </div>
          <a className={"navbar-item"} href=".">
            Results
          </a>
          <a className={"navbar-item"} href=".">
            Participants
          </a>
          <a className={"navbar-item"} href=".">
            Contact Us
          </a>
        </div>
        <div className={"navbar-end"}>
          <div className={"navbar-item"}>
            <a className={"button"} href=".">
              Script Chart Generator
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
