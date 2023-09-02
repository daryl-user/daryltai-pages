import "./NavBar.css";
import { useState } from "react";

export default function NavBar({ currentPage, setPage }) {
  const [menuClicked, setMenuClicked] = useState(false);


  function getClickedState() {
    return menuClicked ? "-dropdown" : "";
  }

  function isSelected(page) {
    return currentPage == page ? " selected" : "";
  }

  function getClass(page) {
    return "nav-element" + getClickedState() + isSelected(page);
  }

  function changePage(page) {
    setMenuClicked(false);
    setPage(page);
  }

  return (
    <div>
      <div className="nav-bar" id="nav-bar">
        <img
          src={require("./assets/logo.png")}
          alt="logo"
          className="daryl-logo"
        ></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="menu-icon"
          onClick={(e) => setMenuClicked((prevState) => !prevState)}
        >
          <path
            strokeLinecap="round"
            strokeinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className={"nav-elements-container" + getClickedState()}>
        <a className={getClass("about")} onClick={() => changePage("about")}>About</a>
        <a className={getClass("works")} onClick={() => changePage("works")}>Works</a>
        <a className={getClass("services")} onClick={() => changePage("services")}>Services</a>
        <a className={getClass("blog")} onClick={() => changePage("blog")}>Blog</a>
        <a className={getClass("contact")} onClick={() => changePage("contact")}>Contact</a>
      </div>
    </div>
  );
}
