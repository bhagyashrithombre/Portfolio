import { FC } from "react";
import s from "./Tools.module.scss";
import VercelIcon from "@/asserts/technology/vercel.svg";
import HeorkuIcon from "@/asserts/technology/heroku.svg";
import PostmanIcon from "@/asserts/technology/postman.svg";
import GithubIcon from "@/asserts/technology/github.svg";
import NetlifyIcon from "@/asserts/technology/netlify.svg";
import GitIcon from "@/asserts/technology/git.svg";
import Image from "next/image";

export const Tools: FC = () => (
  <div className={s.wrap}>
    <h1>Tools</h1>
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={VercelIcon} alt="VercelIcon" />
        </div>
        <h4>Vercel</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={HeorkuIcon} alt="HerokuIcon" />
        </div>
        <h4>Heroku</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={PostmanIcon} alt="PostmanIcon" />
        </div>
        <h4>Postman</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={GithubIcon} alt="GithubIcon" />
        </div>
        <h4>Github</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={NetlifyIcon} alt="NetlifyIcon" />
        </div>
        <h4>Netlify</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={GitIcon} alt="GitIcon" />
        </div>
        <h4>Git</h4>
      </div>
    </div>
  </div>
);
