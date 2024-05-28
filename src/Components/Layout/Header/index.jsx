import React from "react";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <div className="max-w-screen-lg  sticky top-0 z-[20] flex-wrap mx-auto flex w-full items-center justify-between border-b border-zinc-500 p-6 bg-zinc-50 dark:bg-zinc-800 dark:text-white">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
