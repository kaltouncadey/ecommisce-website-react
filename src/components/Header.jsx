import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./style.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <>
    <div className="guud">
      <nav className="nav">
        <div className="logo">
          <h2>
            tiigsi <span>tecnology</span>
          </h2>
        </div>
      </nav>
         <div className="hello">

          <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li><Link to={"/"} className="menu1">Home</Link></li>
          <li><Link to={"/Service"}className="menu1" > Service </Link>  </li>
          <li><Link to={"/Contact"} className="menu1">Contact  </Link></li> 
          <li><Link to={"/Shoping"}className="menu1" > Courses</Link></li>
          <li><Link to={"/Login"} className="menu1">Logi </Link></li>
             
            
          </ul>
          <i className=" fa fa-bars bars" onClick={handleNav}></i>
      
         </div>
    </div>
    </>
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
