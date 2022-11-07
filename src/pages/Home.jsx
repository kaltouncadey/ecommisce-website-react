import React from "react";
import style from "../components/Home.module.css";

const Home = () => {
  return (
    <div className={style.guud}>
      <div className={style.qoralo}>
        <div className={style.head}>
          <h1>hi I'm kaltoum adem </h1>{" "}
        </div>
        <div className={style.text}>
          I'm fullstack sofware and you learing in this <br /> college more lesson that
          your entaligents{" "}
        </div>
        <div className={style.btns}><button>get-started</button></div>
      </div>
      <div className={style.sawir}>
        <img src="/asd/dd.png" alt="" />
      </div>
    </div>
  );
};

export default Home;



