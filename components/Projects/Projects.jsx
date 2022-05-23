import React from "react";
import { ProjectCart } from "./ProjectCart";

import SDI from "../../public/assets/projects/stackline.jpg";
import Disney from '../../public/assets/projects/dissney.jpg'
import Weather from '../../public/assets/projects/weather.jpg'
import MovieApp from '../../public/assets/projects/movieapp.jpg'
import Pizza from '../../public/assets/projects/pizza.jpg'

export const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto p-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          My Projects:
        </p>
        <h2 className="py-4">Hover for more information...</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCart title="SDI app." bg={SDI} projectURL="/stackline" />
          <ProjectCart title="Disney+ app." bg={Disney} projectURL="/disney" />
          <ProjectCart title="Weather app." bg={Weather} projectURL="/weather" />
          <ProjectCart title="Pizza app." bg={Pizza} projectURL="/pizza" />
          <ProjectCart title="Movie app." bg={MovieApp} projectURL="/movie" />
        </div>
      </div>
    </div>
  );
};
