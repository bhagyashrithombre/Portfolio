import { FC } from "react";
import s from "./Experience.module.scss";
import Image from "next/image";
import InfolabzLogo from "@/asserts/logos/lafolabz.png";

const data = [
  {
    background: "#00aaff70",
    color: "#c2e6ff",
    designation: "Full-Stack Developer",
    companyName: "Infolabz",
    location: "Ahmedabad, Gujarat",
    timePeriod: "07/2020 - 04/2021",
    logo: InfolabzLogo,
    companyURL: "www.pedalsup.com",
  },
];

export const Experience: FC = () => {
  return (
    <div className={s.wrap}>
      <div className={s.cardsWrapper}>
        {data.map((item, index) => {
          return (
            <div
              className={s.card}
              key={index}
              style={{ background: item.background, color: item.color }}
            >
              <div className={s.logo}>
                <Image src={item.logo} alt={item.companyName} />
              </div>
              <div className={s.timePeriod}>
                <div>{item.location}</div>
                <div>{item.timePeriod}</div>
              </div>
              <div
                className={s.underline}
                style={{ background: `${item.color + 25}` }}
              />
              <div className={s.designation}>{item.designation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
