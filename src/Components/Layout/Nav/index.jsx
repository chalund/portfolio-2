import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import DarkModeToggle from "../DarkModeToggle";

const NavLinks = ({ closeMenu }) => {
  const { pathname } = useLocation();
  const isActiveNavLink = (path) => {
    return pathname === path
      ? "text-fuchsia-500 font-bold"
      : "text-black dark:text-white";
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };
  return (
    <>
      <NavLink
        to="/"
        className={`mb-2 p-2 text-xl uppercase font-medium hover:bg-fuchsia-500 hover:text-white md:px-4  md:hover:bg-zinc-50 md:hover:dark:bg-zinc-800 md:hover:font-medium md:hover:text-fuchsia-500 ${isActiveNavLink(
          "/"
        )}`}
        onClick={handleNavLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/my_work"
        className={`mb-2 p-2 text-xl uppercase whitespace-nowrap font-medium hover:bg-fuchsia-500 hover:text-white md:px-4  md:hover:bg-zinc-50 md:hover:dark:bg-zinc-800 md:hover:font-medium md:hover:text-fuchsia-500 ${isActiveNavLink(
          "/my_work"
        )}`}
        onClick={handleNavLinkClick}
      >
        My Work
      </NavLink>
      <NavLink
        to="/about"
        className={`mb-2 p-2 text-xl uppercase font-medium hover:bg-fuchsia-500 hover:text-white md:px-4  md:hover:bg-zinc-50 md:hover:dark:bg-zinc-800 md:hover:font-medium md:hover:text-fuchsia-500 ${isActiveNavLink(
          "/about"
        )}`}
        onClick={handleNavLinkClick}
      >
        About
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="lg:w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks closeMenu={closeMenu} />
          <div className="mt-2 ms-2">
          <DarkModeToggle aria-label="Toggle Dark Mode" />
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="mr-4 mt-2">
          <DarkModeToggle aria-label="Toggle Dark Mode" />
          </div>
          <button onClick={toggleNavBar}>
            {isOpen ? <IoClose size={40} /> : <IoMenu size={40} />}{" "}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-4 flex basis-full flex-col md:hidden">
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </>
  );
};

export default Nav;
