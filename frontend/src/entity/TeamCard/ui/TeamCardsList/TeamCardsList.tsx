import type { FC } from "react";
import { TeamCard } from "../TeamCard/TeamCard";

const resp: string[] = ["data1", "data2", "data3", "data4", "data5"];

export const TeamCardsList: FC = () => {
  return (
    <>
      {resp.map((item, i) => (
        <TeamCard number={i + 1} key={item} />
      ))}
    </>
  );
};
