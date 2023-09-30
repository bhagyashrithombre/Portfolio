import { FC } from "react";
import s from "./Me.module.scss";
import Image from "next/image";
import MePic from "@/asserts/picofme.png";

export const Me: FC = () => (
  <div className={s.wrap}>
    <div className={s.imageWrapper}>
      <Image src={MePic} alt="MePic" quality={100} />
    </div>
    <div className={s.intro}>
      🚀 Full-Stack Alchemist 🧙‍♂️ | Turning Ideas into Code 💻 | Passionate
      Problem Solver 🔍
      <br />
      Hey there! I&apos;m Bhagyashri Thombre, a full-stack developer on a
      mission to create digital magic. With a blend of front-end finesse and
      back-end wizardry, I transform concepts into functional, user-friendly web
      experiences. 💡 I thrive on challenges and believe that every line of code
      should serve a purpose. My code is clean, efficient, and built to last. 🌐
      When I&apos;m not coding, I&apos;m probably exploring the latest tech
      trends, experimenting with new tools, or diving into the world of
      open-source.
      <br />
      🗣️ I understand the importance of clear and open communication in the
      development process. I&apos;m a proactive collaborator, always eager to
      share ideas, listen to feedback, and keep everyone on the same page.
      Whether it&apos;s discussing project requirements or presenting solutions,
      I make sure the message is crystal clear.
      <ul>
        <li>I Know,</li>
        <li>English - Professional Working Proficiency</li>
        <li>Hindi - Full Professional Proficiency</li>
        <li>Gujarati - Full Professional Proficiency</li>
        <li>Marathi - Native or Bilingual Proficiency</li>
      </ul>
    </div>
  </div>
);
