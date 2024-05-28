import React from "react";
import selfie from "../../assets/charlotteLund.jpg";
import github from "../../assets/github.png";
import linkedIn from "../../assets/instagram.png";
import instagram from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import RecentlyProjects from "../../Components/RecentlyProjects";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-lg ">
      <div className="flex flex-col-reverse md:flex-row items-center mt-10 ">
        <div className="mt-10 md:mt-0 md:w-1/2 p-4">
          <p className="text-xl uppercase p">Hi, my name is</p>
          <h1 className="text-3xl uppercase">Charlotte lund</h1>
          <p className="text-xl uppercase mb-4">frontend developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            architecto! Hic ad deleniti optio? Cupiditate temporibus blanditiis
            iure eos! Mollitia recusandae debitis voluptas sed illo alias aut
            facilis tempora maiores.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-4 py-2 rounded-lg bg-fuchsia-500 text-white mt-5 uppercase">
              about me
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a href="https://github.com/chalund">
              <img src={github} alt="github icon" className="h-12 w-12" />
            </a>
            <a href="https://www.instagram.com/superlottis/">
              <img src={instagram} alt="instagram icon" className="h-12 w-12" />
            </a>
            <a href="https://www.linkedin.com/in/charlotte-lund88/">
              <img src={linkedIn} alt="linkedin icon" className="h-12 w-12" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center md:w-1/2">
          <div className="absolute top-8 right-8 md:left-8 rounded-full bg-fuchsia-500 h-64 w-64 md:h-80 md:w-80"></div>
          <img
            src={selfie}
            alt="image of Charlotte Lund"
            className="rounded-full h-64 w-64 md:h-80 md:w-80 relative"
          />
        </div>
      </div>

      <div className="p-4 my-5">
        <div className="text-2xl mt-16  border-b-4 border-fuchsia-500 pb-2 mb-5">
          <div className="flex gap-3">
            <h1 className="uppercase">Latest work</h1>
            <Link
              to="my_work"
              className="hover:text-fuchsia-500 hover:underline"
            >
              {" "}
              - see all
            </Link>
          </div>
        </div>
        <RecentlyProjects />
      </div>

      <div className="my-5 p-4">
        <div className="text-2xl mt-16  border-b-4 border-fuchsia-500 pb-2 mb-5">
          <Link to="about" className="hover:text-fuchsia-500 hover:underline">
            <h1 className="uppercase">Contact me</h1>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            amet suscipit numquam officia quam? Adipisci necessitatibus, harum
            dolorem vel sint laborum laboriosam. Quo doloremque mollitia,
            impedit sit debitis ut autem!
            <div className="flex justify-center md:justify-start">
              <button
                className="px-4 py-2 rounded-lg bg-fuchsia-500 text-white mt-5 uppercase"
                onClick={() => {
                  window.location.href = "mailto:chalund@gmail.com";
                }}
              >
                Contact me
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center md:w-1/2">
            <img
              src={selfie}
              alt="image of Charlotte Lund"
              className=" h-64 w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
