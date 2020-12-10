import common from "./common";
import skills from "./skills";
import generateSkills from "./skills";

export default [
  {
    src: "/images/skills.png",
    alt: "skills",
    label: "Skills",
    text: generateSkills(),
    direction: "left",
  },
  {
    src: "/images/home.png",
    alt: "projects",
    label: "Home",
    direction: "bottom",
  },
  {
    src: "/images/interests.png",
    alt: "interests",
    label: "Interests",
    text: common.interests,
    direction: "right",
  },
  {
    src: "/images/about-me.png",
    alt: "about-me",
    label: "About me",
    text: common.aboutMe,
    direction: "top",
  },
];
