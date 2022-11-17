import React from "react";
import style from "../components/Home.module.css";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {

  return (
    <div className={style.guud}>
      <div className={style.qoralo}>
        <div className={style.head}>

          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              words={["Hello!", "I'm Mss,Kaltuun", "I'm Full Stack Developer"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>

          {/* dhammaadka qoralka dahson */}
        </div>
        <div className={style.text}>
          I'm fullstack Developer and my learing in this  college more
          lesson that your entaligents{" "}
        </div>
        <div className={style.btns}>
          <button>get-started</button>
        </div>
      </div>
      <div className={style.sawir}>
        <img src="/asd/dd.png" alt="" />
      </div>
    </div>
  );
};

export default Home;



