import TeamCard from "./TeamCard";
import TeamImage1 from "../assets/TeamImage1.png";
import TeamImage2 from "../assets/TeamImage2.png";
import TeamImage3 from "../assets/TeamImage3.png";
import TeamImage4 from "../assets/TeamImage4.png";
import TeamImage5 from "../assets/TeamImage5.png";
import TeamImage6 from "../assets/TeamImage6.png";
import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState([
    { icon: TeamImage1, name: "Danial Def", description: "301 Cases" },
    { icon: TeamImage2, name: "Sanfole", description: "850 Cases" },
    { icon: TeamImage3, name: "Cesforila", description: "470 Cases" },
    { icon: TeamImage4, name: "Colleen", description: "180 Cases" },
    { icon: TeamImage5, name: "Haldone", description: "212 Cases" },
    { icon: TeamImage6, name: "Nik Jeo", description: "350 Cases" },
  ]);
  return (
    <div className="container pt-[93px] pb-[98px] font-sans max-w-[1134px] mx-auto flex flex-col items-center gap-[109px] text-white">
      <h2 className="font-[600] text-[54px] leading-[78px] ">Our Team</h2>
      <div className="flex flex-row flex-wrap justify-between gap-y-[44px] gap-x-[189px]">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            icon={member.icon}
            name={member.name}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
