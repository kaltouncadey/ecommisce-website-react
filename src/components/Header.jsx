import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./style.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="guud">
      <nav className="nav">
        <div className="logo">
          <h2>
            tiigsi <span>tecnology</span>
          </h2>
        </div>
        <div className="menu1">
          <ul className={nav ? "nav-menu active" : "nav-menu"}>
            <li className="list">
              <Link to={"/"} className="menu1">
                Home
              </Link><Link to={"/Service"} > Service </Link>
              <Link to={"/Contact"}>Contact  </Link>
              <Link to={"/Shoping"} > Courses</Link>
              <Link to={"/Login"}>Logi </Link>
            </li>
          </ul>
          <i className=" fa fa-bars bars" onClick={handleNav}></i>
        </div>
      </nav>
    </div>
  );
};

{
  /* <div className="menuitme">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="menuitme">
        <Link to={"/services"}> services </Link>{" "}
      </div>
      {/* <div className="menuitem">
        {" "}
        <Link to={"/Projects"}>projects </Link>{" "}
      </div> */
}
{
  /* 
      <div className="menuitem">
        {" "}
        <Link to={"/About"}>About</Link>
      // </div> */
}
{
  /* {" "} */
}
// */

export default Header;
