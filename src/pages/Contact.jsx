import React from 'react'
import style from '../components/Contact.module.css'

const Contact = () => {
  return (
    <div className={style.dhamntod}>
      <div className={style.text}>
        <h1 className={style.heading}>contact us </h1>
        <li>our maing adress</li>
        <li>180</li>
        <li>in hargeisa-somaliland</li>
        <li>
          phone: <span className={style.phone}>+252-63-6443594</span>{" "}
        </li>
      </div>

      {/* forms */}

      <div className={style.form}>
        <div className={style.meessage}>
          <span>
            Great vision without great people is irrelevant. Let's work
            together.
          </span>

          {/* <form action="action-page"></form> */}
          <div className={style.inputes}>
            <input type="text" id='fname'name='' placeholder='fadaln gali bal magacga ' /> <br />
          <input type="text" name="" id="" placeholder='fadaln gali gmailkga' /> <br />
          <input type="text" name="" id="" placeholder='fadaln gali phonkega' /> <br />
          </div>
            <button className={style.butons}>send in</button>

        </div>
      </div>
    </div>
  );
}

export default Contact;