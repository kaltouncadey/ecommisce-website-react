import React from "react";
import style from "../components/Courses.module.css";

const Courses = () => {
  return (
    <div>
      <div className={style.alls}>
        <div className={style.sawir}>
          <img
            src="https://t4.ftcdn.net/jpg/03/05/15/05/360_F_305150577_Y9sxJN1nU79bQ3T1GP4b3o6vWTlm0uHP.jpg"
            alt=""
          />
        </div>
        <h2 className={style.header}>
          choose your program, start today and ending for few monthleyy!...
        </h2>
      </div>

      <div className={style.dhamaan}>
        <div className={style.sawir}>
          <img src="acconting.jpg" alt="" />
          <div className={style.qoralo}>
            <h1>hell accounting</h1>
          </div>
          <div className="phps">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum
            ad quos asperiores dolor, sit nesciunt doloremque totam quod
            aperiam!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
