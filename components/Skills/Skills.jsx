import React from "react";
import { SkillsCart } from "./SkillsCart";

export const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCart title="HTML" image="../img/skills/html.png" />
          <SkillsCart title="CSS" image="../img/skills/css.png" />
          <SkillsCart title="JavaScript" image="../img/skills/javascript.png" />
          <SkillsCart title="React JS" image="../img/skills/react.png" />
          <SkillsCart title="FireBase" image="../img/skills/firebase.png" />
          <SkillsCart title="Tailwind CSS" image="../img/skills/tailwind.png" />
          <SkillsCart title="React Redux" image="../img/skills/redux.png" />
          <SkillsCart title="Next JS" image="../img/skills/next-js.png" />
          <SkillsCart title="Bootstrap UI" image="../img/skills/bootstrap.png" />
          <SkillsCart title="Material UI" image="../img/skills/material-ui.png" />
          <SkillsCart title="SASS CSS" image="../img/skills/sass.png" />
        </div>
      </div>
    </div>
  );
};
