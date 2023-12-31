import { FC } from "react";
import s from "./Main.module.scss";
import { TabSection } from "../TabSection";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { Me } from "./inside/About/Me";
import { Education } from "./inside/About/Education";
import { SocialLinks } from "./inside/SocialLinks";
import { Experience } from "./inside/About/Experience";
import { Frontend } from "./inside/Technology/Frontend";
import { Backend } from "./inside/Technology/Backend";
import { Tools } from "./inside/Technology/Tools";
import { Skills } from "./inside/Skills";
import { Project } from "./inside/Project";

export const Main: FC = () => {
  const { currentFile } = useSelector((store: AppState) => store.portflio);

  return (
    <div className={s.wrap}>
      <TabSection />
      <div className={s.body}>
        {currentFile === "me.ts" && <Me />}
        {currentFile === "education.java" && <Education />}
        {currentFile === "socialLinks.md" && <SocialLinks />}
        {currentFile === "workExperience.js" && <Experience />}
        {currentFile === "frontend.js" && <Frontend />}
        {currentFile === "backend.ts" && <Backend />}
        {currentFile === "others" && <Tools />}
        {currentFile === "skills.sol" && <Skills />}
        {currentFile === "projects.tsx" && <Project />}
      </div>
    </div>
  );
};
