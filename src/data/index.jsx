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
      "Rainy days is the very first project created. Rainydays is an online shop selling mens and woman’s rain jackets. Its been a cross course project with updating styles and adding APIs",
    image: rainydays_1,
    github_link:
      "https://github.com/chalund/Rainydays-cross-course-project-.git",
    netlify_link: "https://cute-kringle-2228a8.netlify.app/",
    date: "19.11.2022",
  },
  {
    name: "Community Science Museum",
    assignment: "Semester Project 1",
    description:
      "Semester Project 1 involved building a website for a children's museum, showcasing skills acquired in the first semester. Developed using HTML and CSS",
    image: CSM_1,
    github_link: "https://github.com/chalund/Semesterproject-1.git",
    netlify_link: "https://semesterproject-1-charlottelund.netlify.app/",
    date: "17.12.2022",
  },
  {
    name: "Life Above the arctic circle",
    assignment: "Project Exam 1",
    description:
      "For the first-year exam, I crafted a personal blog utilizing WordPress as a headless CMS. Developed with HTML, CSS, and JS.",
    image: blog_1,
    github_link: "https://github.com/chalund/Exam-1.git",
    netlify_link: "https://lifeabove.netlify.app/",
    date: "11.06.2023",
  },
  {
    name: "eBids",
    assignment: "Semester Project 2",
    description:
      "Semester project 2 , developing an auction site that empowers users to list items for auction and participate in bidding for desired items. Developed with bootstrap as a frameworks",
    image: ebids_1,
    github_link: "https://github.com/chalund/SemesterProject-2.git",
    netlify_link: "https://ebids.netlify.app/",
    date: "17.12.2023",
  },
  {
    name: "ReBuy",
    assignment: "JavaScript Framework",
    description:
      "Rebuy is a modern e-commerce web application built as a course assignment for JavaScript frameworks at Noroff. It is developed using ReactVite and Tailwind CSS.",
    image: rebuy_1,
    github_link: "https://github.com/chalund/js-framework-ca.git",
    netlify_link: "https://rebuy-store.netlify.app/",
    date: "06.04.2024",
  },
  {
    name: "Holidaze",
    assignment: "Project Exam 2",
    description:
      "Holidaze is an accommodation booking web application created as the final exam for Frontend Development at Noroff. Built with ReactVite and Tailwind CSS.",
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
