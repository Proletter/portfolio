const skills =
  " Numpy, Scikitlearn, Pandas packages, Django, Nameko, Bottle, ExpressJS, ReactJS, " +
  "Data analysis, Data Mining, Data Cleaning, Data Modeling, Data Visualization using Tableau, " +
  "RestAPI, SQL, MongoDB, Linux, Git, Docker, Redux, FastAPI, Celery, Redis, " +
  "VanillaJS, Heroku, AWS";

const colors = [
  "#F2EEBF",
  "#DEE4B9",
  "",
  "#C6F2C6",
  "#CAD5CF",
  "#C6E8FF",
  "#ECDFEC",
  "",
  "#FAEAEC",
  "#F2EEBF",
  "",
  "",
  "#CAD5CF",
  "#C6F2C6",
  "#DEE4B9",
  "",
  "#C6E8FF",
  "#ECDFEC",
  "#FAEAEC",
  "",
  "#FFE4B5",
  "#FFFAFA",
  "#FFEBCD",
];

const generateSkills = () => {
  var rendered = [];
  const skillsList = skills.split(",");
  skillsList.forEach((skill, index) => {
    rendered.push(
      <span key={index} style={{ color: colors[index] }}>
        {skill}
      </span>
    );
  });

  return rendered;
};

export default generateSkills;
