import { FC } from "react";
import s from "./Skills.module.scss";

const data = [
  "Team Collaboration: Collaborated effectively with cross-functional teams.",
  "Problem Solving: Analyzed issues and proposed solutions.",
  "Communication: Communicated ideas clearly, both written and verbally.",
  "Research: Conducted research to support projects and decisions.",
  "Time Management: Successfully managed tasks and met deadlines.",
  "Adaptability: Adapted to changing priorities and tasks.",
  "Attention to Detail: Maintained high accuracy in tasks and reports.",
  "Technical Proficiency: Demonstrated proficiency in [mention specific tools or software].",
  "Initiative: Took initiative to tackle challenging projects.",
  "Critical Thinking: Applied critical thinking to complex problems.",
  "Organizational Skills: Organized and prioritized tasks efficiently.",
  "Learning Agility: Quickly acquired new knowledge and skills.",
  "Data Analysis: Analyzed data to draw actionable insights.",
  "Client Interaction: Interacted professionally with clients or stakeholders.",
  "Presentation Skills: Delivered clear and engaging presentations.",
];

export const Skills: FC = () => (
  <div className={s.wrap}>
    {data.map((item, index) => (
      <div className={s.skillsWrapper} key={index}>
        <ul className={s.list}>
          <li>
            <b>{item.split(":")[0]}:</b>&nbsp;
            {item.split(":")[1]}
          </li>
        </ul>
      </div>
    ))}
  </div>
);
