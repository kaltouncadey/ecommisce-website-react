import React from "react";
import style from "../components/Login.module.css";

const Login = () => {
  return (
    <div className={style.allss}>
      <div className={style.dhamaaan}>
        <h2>login form </h2>

        <form action="">
          <div className={style.userbox}>
            <label>enter your first-name</label>
            <input type="text" name="" placeholder="first name " required />
          </div>
          <div className={style.userbox}>
            <label>enter your last-name</label>
            <input type="text" placeholder="last name " required />
          </div>
          <a href="#" className="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <li className={style.hh}>Submit</li>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
