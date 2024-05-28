import React from "react";
import sortedProjects from "../../data";
import Card from "../Card";

const RecentlyProjects = () => {
  // Get the three latest projects by date
  const latestProjects = sortedProjects.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:gap-8 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {latestProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyProjects;
