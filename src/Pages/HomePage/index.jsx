import React from "react";
import selfie from "../../assets/images/charlotte.jpg";
import { Link } from "react-router-dom";
import RecentlyProjects from "../../Components/RecentlyProjects";
import { githubIcon, linkedInIcon, envelope } from "../../assets/icons";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-lg ">
      <div className="flex flex-col-reverse md:flex-row items-center mt-10 ">
        <div className="mt-10 md:mt-0 md:w-1/2 p-4">
          <p className="text-xl uppercase p">Hi, my name is</p>
          <h1 className="text-3xl uppercase">Charlotte lund</h1>
          <p className="text-xl uppercase mb-4">frontend developer</p>
          <p>
            I'm passionate about crafting user-friendly designs with strong
            technical solutions. I'm also enthusiastic about learning and
            enhancing my skills{" "}
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-4 py-2 rounded-lg  bg-gradient-to-t from-fuchsia-400 to-fuchsia-600 hover:to-fuchsia-800 hover:font-semibold text-white mt-5 uppercase">
              <Link to="/about">about me</Link>
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a href="https://github.com/chalund">
              <img
                src={githubIcon}
                alt="github icon"
                className="h-12 w-12 bg-white rounded-full"
              />
            </a>
            <a href="https://www.linkedin.com/in/charlotte-lund88/">
              <img
                src={linkedInIcon}
                alt="linkedin icon"
                className="h-12 w-12"
              />
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

      <div className="p-4 md:my-5">
        <div className="text-2xl  mt-10 md:mt-16  border-b-4 border-fuchsia-500 pb-2 mb-5">
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

      <div className="md:my-5 p-4">
        <div className="text-2xl   border-b-4 border-fuchsia-500 pb-2 mb-5">
          <h1 className="uppercase">Contact me</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <p>
              Feel free to reach out if you have any questions, want to work
              together on projects, have something specific in mind, or just
              want to say hello. I'm open to new opportunities and would love to
              connect with you!{" "}
            </p>
          </div>
          <div className="md:w-1/2 md:ms-6">
            <div className="flex items-center gap-3">
              <div className="border rounded-full h-24 w-24 hover:border-fuchsia-500">
                <button
                  onClick={() => {
                    window.location.href = "mailto:chalund@gmail.com";
                  }}
                >
                  <img src={envelope} alt="envelope icon" className="p-4 " />
                </button>
              </div>

              <div>
                <p className="font-medium text-lg">Mail:</p>
                <p className="text-lg">chalund@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
