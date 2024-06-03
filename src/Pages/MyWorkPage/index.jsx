import React from "react";

import projects from "../../data";
import Card from "../../Components/Card";

const MyWorkPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center w-full lg:max-w-screen-lg text-2xl  uppercase border-b-4 border-fuchsia-500 pb-4 mb-5">
        My Projects
      </h1>
      <div className="grid grid-cols-1 lg:gap-8 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyWorkPage;
