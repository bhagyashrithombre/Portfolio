import { FC } from "react";
import s from "./Education.module.scss";

export const Education: FC = () => (
  <div className={s.wrap}>
    <ul className={s.timeline}>
      <li>
        <div className={s.directionR}>
          <div className={s.flagWrapper}>
            <span className={s.flag}>GTU</span>
            <span className={s.timeWrapper}>
              <span className={s.time}>2021 - 2024</span>
            </span>
          </div>
          <div className={s.desc}>
            Bachlore of Engineering from GEC Modasa in Computer Engineering
            <br />
            pursuing with CGPA 6.78
          </div>
        </div>
      </li>
      <li>
        <div className={s.directionL}>
          <div className={s.flagWrapper}>
            <span className={s.flag}>GTU</span>
            <span className={s.timeWrapper}>
              <span className={s.time}>2018 - 2021</span>
            </span>
          </div>
          <div className={s.desc}>
            Diploma from Government Girls Polytechnic in Computer Engineering
            <br />
            CGPA 7.29
          </div>
        </div>
      </li>
      <li>
        <div className={s.directionR}>
          <div className={s.flagWrapper}>
            <span className={s.flag}>GSEB</span>
            <span className={s.timeWrapper}>
              <span className={s.time}>2016 - 1017</span>
            </span>
          </div>
          <div className={s.desc}>
            SSC (10th) from J.L. High School, Ahmedabad <br />
            61% in Board
          </div>
        </div>
      </li>
    </ul>
  </div>
);
