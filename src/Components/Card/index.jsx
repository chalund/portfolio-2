import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Card = ({ project }) => {
  return (
    <div className="w-72 rounded bg-white overflow-hidden shadow-lg hover:border-2 hover:border-fuchsia-500 flex flex-col">
      <div>
        <img
          className="w-full h-52"
          src={project.image}
          alt={`${project.name} homepage`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 dark:text-black">
            {project.name}
          </div>
          <p className="text-gray-700 text-xs">{project.description}</p>
        </div>
      </div>
      <div className="px-6 py-4 mt-auto">
        <div className="flex justify-between mt-auto">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg w-2/5 bg-gradient-to-t from-fuchsia-400 to-fuchsia-600 hover:to-fuchsia-800 hover:font-semibold text-white uppercase flex items-center gap-1"
          >
            <FaGithub /> Github
          </a>
          <a
            href={project.netlify_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg w-2/5 bg-gradient-to-t from-fuchsia-400 to-fuchsia-600 hover:to-fuchsia-800 hover:font-semibold  text-white uppercase flex items-center gap-1"
          >
            <SiNetlify /> Netlify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
