import React from "react";
import hikeInLofoten from "../../assets/images/lofoten.jpg";
import hjørdis from "../../assets/images/hjørdis.jpeg";
import fugloya from "../../assets/images/fugloya.jpg";
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

const SkillIcon = ({ icon, name }) => {
  return (
    <li className="relative group">
      <img src={icon} className="h-12 w-12" alt={`${name} Icon`} />
      <span className="sr-only">{name}</span>
      <div className="opacity-0 group-hover:opacity-100 text-center absolute  left-0 right-0 py-2 rounded-md transition-opacity duration-300">
        {name}
      </div>
    </li>
  );
};

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-center text-2xl uppercase border-b-4 border-fuchsia-500 pb-4 mb-5">
        About me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-8 gap-5">
        <div>
          <img
            src={hikeInLofoten}
            alt="image of Charlotte Lund looking down the mountain in Lofoten"
            className="w-72 h-72 rounded-full"
          />
          <div className="flex gap-2 mt-4">
            <img
              src={fugloya}
              alt="image of fugloya"
              className="w-24 h-24 mt-4 object-cover rounded-full"
            />
            <img
              src={hjørdis}
              alt="image of hjoris my dog"
              className="w-36 h-36 mt-4 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="md:w-2/3 p-4">
          <p className="py-2">
            Charlotte Lund, 36 years old and originally from Lyngen in
            Nord-Troms. After a bit of wandering around, I ended up here at
            Sortland in Vesterålen, where I live with my partner and our dog
            Hjørdis. After working in the service profession, I realized that I
            needed new challenges and thus ended up studying Frontend
            development at Noroff.
          </p>

          <p className="py-2">
            It has been 2 incredibly educational years and this is just the
            beginning, I can't wait to start the new everyday life where I can
            work on this and develop into a better developer. I am passionate
            about good communication, that things should be user-friendly and
            that there is a good design as well as implementing good code
            solutions. I UX and UI design is incredibly interesting and want to
            learn even more from this.
          </p>
          <p className="py-2">
            After completing an online vocational school, I am looking forward
            to joining a professional community and working with colleagues who
            are passionate about the same. Being able to discuss subjects with
            like-minded people is something I look forward to.
          </p>

          <p className="py-2">
            As a person, I am incredibly dedicated and committed, I always
            strive to achieve my goals, even in the face of significant
            challenges and am generally curious and willing to learn.
          </p>

          <p className="py-2">
            In my spare time, I like to be out in nature, going for walks in the
            woods and fields as well as mountain hikes. Summer and autumn are
            probably my favorite seasons and I love the combination of sea and
            mountains which gives peace of mind. Apart from that, I like to
            travel, experience new things, but at the same time I find
            tranquility in Vesterålen.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:w-2/3 ml-auto p-4 md:p-0">
          <h2 className="flex text-lg uppercase font-medium ">
            Current Skills
          </h2>
          <div className="py-4">
            <div>
              <ul className="flex flex-wrap gap-1 md:gap-4">
                <SkillIcon icon={htmlIcon} name="HTML" />
                <SkillIcon icon={cssIcon} name="CSS" />
                <SkillIcon icon={jsIcon} name="JavaScript" />
                <SkillIcon icon={reactIcon} name="React" />
                <SkillIcon icon={viteIcon} name="Vite" />
                <SkillIcon icon={tailwindIcon} name="TailwindCSS" />
                <SkillIcon icon={bootstrapIcon} name="Bootstrap" />
                <SkillIcon icon={figmaIcon} name="Figma" />
                <SkillIcon icon={githubIcon} name="Github" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
