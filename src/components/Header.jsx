import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Header = () => {
  return (
    <div className="guud">
      <nav className={style.nav}>
        <div className={style.logo}>
          <h2>
            tiigsi <span>tecnology</span>
          </h2>
        </div>
        <div className={style.menu}>
          <ul>
            <li className={style.list}>
              <Link to={"/"  } className={style.lists}>Home</Link>
              <Link to={"/Service" } className={style.lists}>Service</Link>
              <Link to={"/Contact" } className={style.lists}>Contact</Link>
              <Link to={"/Shoping" } className={style.lists}>Courses</Link>
              <Link to={"/Login"   } className={style.lists}>Login</Link>
            </li>
          </ul>
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
