import React from "react";
import github from "../../assets/github.png";
import linkedIn from "../../assets/instagram.png";
import instagram from "../../assets/linkedin.png";

const AboutPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-2xl mt-10 uppercase border-b-4 border-fuchsia-500 pb-4 mb-5">
        Who am I?
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly m-4 mt-8 ">
        <p className="md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quidem
          magnam et pariatur! Ea ipsum dignissimos, delectus itaque ipsa autem
          accusamus sunt harum debitis asperiores quo, nobis cumque velit
          assumenda?
        </p>
        <img
          src={github}
          alt="image of Charlotte Lund"
          className="h-64 w-64 "
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-evenly m-4 mt-8 ">
        <p className="md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quidem
          magnam et pariatur! Ea ipsum dignissimos, delectus itaque ipsa autem
          accusamus sunt harum debitis asperiores quo, nobis cumque velit
          assumenda?
        </p>

        <img
          src={github}
          alt="image of Charlotte Lund"
          className="h-64 w-64 "
        />
      </div>

      <div>
        <h1 className="flex justify-center text-2xl mt-10 uppercase border-b-4 border-fuchsia-500 pb-4 mb-10">
          Contact me
        </h1>

        <div className="flex justify-center  gap-4 mt-8">
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

        <div className="flex justify-center ">
          <button
            className="px-4 py-2 rounded-lg bg-fuchsia-500 text-white mt-10 mb-5 uppercase"
            onClick={() => {
              window.location.href = "mailto:chalund@gmail.com";
            }}
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
