import rainydays_1 from "../assets/images/projects/rainydays-1.jpg";
import CSM_1 from "../assets/images/projects/CSM-1.jpg";
import blog_1 from "../assets/images/projects/blog-1.jpg";
import ebids_1 from "../assets/images/projects/ebids-1.jpg";
import rebuy_1 from "../assets/images/projects/rebuy-1.jpg";
import holidaze_1 from "../assets/images/projects/holidaze-1.jpg";

const projects = [
  {
    name: "Rainydays",
    assignment: "Javascript-1",
    description:
      "Modify existing cross-course project Rainydays, fetch products from external API. Rainydays is an online shop selling mens and womans rain jackets.",
    image: rainydays_1,
    github_link:
      "https://github.com/chalund/Rainydays-cross-course-project-.git",
    netlify_link: "https://cute-kringle-2228a8.netlify.app/",
    date: "19.11.2022",
  },
  {
    name: "Community Science Museum",
    assignment: "Semester Project 2",
    description:
      "An interactive science museum called the Community Science Museum is opening in your town/city. Its core target audience is primary and middle school children (ages 7-15) and families with young children",
    image: CSM_1,
    github_link: "https://github.com/chalund/Semesterproject-1.git",
    netlify_link: "https://semesterproject-1-charlottelund.netlify.app/",
    date: "17.12.2022",
  },
  {
    name: "Life Above the arctic circle",
    assignment: "Project Exam 1",
    description: "",
    image: blog_1,
    github_link: "https://github.com/chalund/Exam-1.git",
    netlify_link: "https://lifeabove.netlify.app/",
    date: "11.06.2023",
  },
  {
    name: "eBids",
    assignment: "Semester Project 2",
    description:
      "An auction site where users can add items to be bid on and bid on items other users have put up for auction",
    image: ebids_1,
    github_link: "https://github.com/chalund/SemesterProject-2.git",
    netlify_link: "https://ebids.netlify.app/",
    date: "17.12.2023",
  },
  {
    name: "ReBuy",
    assignment: "JavaScript Framework",
    description: "eCom store build with React",
    image: rebuy_1,
    github_link: "https://github.com/chalund/js-framework-ca.git",
    netlify_link: "https://rebuy-store.netlify.app/",
    date: "06.04.2024",
  },
  {
    name: "Holidaze",
    assignment: "Project Exam 2",
    description:
      "Holidaze is an accommodation booking web application created as the final exam for Frontend Development at Noroff",
    image: holidaze_1,
    github_link: "https://github.com/chalund/exam-2.git",
    netlify_link: "https://exam-charlottelund.netlify.app/",
    date: "20.05.2024",
  },
];

const sortedProjects = projects.slice().sort((a, b) => {
  const dateA = new Date(a.date.split(".").reverse().join("-"));
  const dateB = new Date(b.date.split(".").reverse().join("-"));
  return dateB - dateA;
});

export default sortedProjects;
