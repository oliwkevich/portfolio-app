import React from "react";
import { SkillsCart } from "./SkillsCart";

export const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCart title="HTML" image="/../public/assets/skills/html.png" />
          <SkillsCart title="CSS" image="/../public/assets/skills/css.png" />
          <SkillsCart title="JavaScript" image="/../public/assets/skills/javascript.png" />
          <SkillsCart title="React JS" image="/../public/assets/skills/react.png" />
          <SkillsCart title="FireBase" image="/../public/assets/skills/firebase.png" />
          <SkillsCart title="Tailwind CSS" image="/../public/assets/skills/tailwind.png" />
          <SkillsCart title="React Redux" image="/../public/assets/skills/redux.png" />
          <SkillsCart title="Next JS" image="/../public/assets/skills/next-js.png" />
          <SkillsCart title="Bootstrap UI" image="/../public/assets/skills/bootstrap.png" />
          <SkillsCart title="Material UI" image="/../public/assets/skills/material-ui.png" />
          <SkillsCart title="SASS CSS" image="/../public/assets/skills/sass.png" />
        </div>
      </div>
    </div>
  );
};
