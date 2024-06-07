import React from "react";
import projects from "../../data";
import Card from "../../Components/Card";

const MyWorkPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-2xl uppercase border-b-4 border-fuchsia-500 pb-4 mb-5">
        My Projects
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorkPage;
