import React from "react";
import hikeInLofoten from "../../assets/images/lofoten.jpg";
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  viteIcon,
  tailwindIcon,
  bootstrapIcon,
  figmaIcon,
  githubIcon,
} from "../../assets/icons";

const AboutPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-2xl  uppercase border-b-4 border-fuchsia-500 pb-4 mb-5">
        Who am I?
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-evenly m-4 mt-8 ">
        <div className="md:w-2/3">
          <p className="py-2">
            Charlotte Lund, age 36 and originally from Lyngen in Nord-Troms, now
            resides in beautiful Vesterålen with my partner and our dog Hjørdis.
          </p>
          <p className="py-2">
            I've just completed a 2-year online vocational school at Noroff,
            specializing in front-end development. I'm passionate about blending
            technical solutions with strong design principles. My main focus as
            a front-end developer is to create and implement user interfaces and
            features that allow for direct interaction with users. Understanding
            and meeting user needs is crucial to me, as it enables me to build
            functional interfaces that deliver exceptional user experiences for
            all. I'm dedicated to delivering intuitive and visually appealing
            solutions that make digital interaction easy and engaging.
          </p>
          <p className="py-2">
            After my two-year program, I'm excited about joining a professional
            community where I can learn from my colleagues and share common
            interests. Being surrounded by like-minded individuals who are eager
            to learn new skills in this environment is something I'm really
            looking forward to. My studies not only provided me with
            professional skills but also helped me understand myself better. I'm
            organized and committed in everything I do, and I always strive to
            achieve my goals, even in the face of significant challenges.
          </p>
        </div>

        <img
          src={hikeInLofoten}
          alt="image of Charlotte Lund"
          className="h-72 w-full max-w-md md:ms-6 md:object-cover md:w-1/3 md:h-1/3"
        />
      </div>

      <div className="m-4 mt-8">
        <h2 className="flex text-lg uppercase font-semibold">Current Skills</h2>
        <div className="py-4">
          <div>
            <ul className="flex gap-1 md:gap-3">
              <li>
                <img src={htmlIcon} className="h-12 w-12" alt="HTML Icon" />
                <span className="sr-only">HTML</span>{" "}
              </li>
              <li>
                <img src={cssIcon} className="h-12 w-12" alt="CSS Icon" />
                <span className="sr-only">CSS</span>{" "}
              </li>
              <li>
                <img src={jsIcon} className="h-12 w-12" alt="JavaScript Icon" />
                <span className="sr-only">JavaScript</span>{" "}
              </li>
              <li>
                <img src={reactIcon} className="h-12 w-12" alt="React Icon" />
                <span className="sr-only">React</span>{" "}
              </li>
              <li>
                <img src={viteIcon} className="h-12 w-12" alt="Vite Icon" />
                <span className="sr-only">Vite</span>{" "}
              </li>
              <li>
                <img
                  src={tailwindIcon}
                  className="h-12 w-12"
                  alt="TailwindCSS Icon"
                />
                <span className="sr-only">TailwindCSS</span>{" "}
              </li>
              <li>
                <img
                  src={bootstrapIcon}
                  className="h-12 w-12"
                  alt="Bootstrap Icon"
                />
                <span className="sr-only">Bootstrap</span>{" "}
              </li>
              <li>
                <img src={figmaIcon} className="h-12 w-12" alt="Figma Icon" />
                <span className="sr-only">Figma</span>{" "}
              </li>
              <li>
                <img
                  src={githubIcon}
                  alt="github icon"
                  className="h-12 w-12 bg-white rounded-full"
                />
                <span className="sr-only">Github</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
