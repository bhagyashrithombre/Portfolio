import { FC } from "react";
import s from "./Frontend.module.scss";
import ReactIcon from "@/asserts/technology/react.svg";
import JavaScriptIcon from "@/asserts/technology/js.svg";
import TypeScriptIcon from "@/asserts/technology/ts.svg";
import ReduxIcon from "@/asserts/technology/redux.svg";
import NextIcon from "@/asserts/technology/next.svg";
import Image from "next/image";

export const Frontend: FC = () => (
  <div className={s.wrap}>
    <h1>Frontend Designing & Tools</h1>
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={ReactIcon} alt="reactIcon" />
        </div>
        <h4>React</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={NextIcon} alt="nextIcon" />
        </div>
        <h4>Next</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={JavaScriptIcon} alt="jsIcon" />
        </div>
        <h4>Javascript</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={TypeScriptIcon} alt="tsIcon" />
        </div>
        <h4>Typescript</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={ReduxIcon} alt="reduxIcon" />
        </div>
        <h4>Redux</h4>
      </div>
    </div>
  </div>
);
