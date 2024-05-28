import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-sm md:text-2xl">
          <span className="block md:inline">Portfolio | </span>
          <span className="block md:inline">CHARLOTTE LUND</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
