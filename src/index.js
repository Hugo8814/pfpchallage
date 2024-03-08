import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skills: "HTML",
    level: "advanced",
    color: "orangeRed",
  },
  {
    skills: "CSS",
    level: "advanced",
    color: "blue",
  },
  {
    skills: "JavaScript,",
    level: "advanced",
    color: "yellow",
  },
  {
    skills: "SASS",
    level: "advanced",
    color: "pink",
  },
  {
    skills: "React",
    level: "noob",
    color: "lightBlue",
  },
  {
    skills: "github",
    level: "mid",
    color: "red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photo="unsplash.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function SkillList({ skill }) {
  skill = skills;
  console.log(skill);

  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skills} {...skill} />
      ))}
    </ul>
  );
}
function Skill(props) {
  console.log(props);
  const icon =
    props.level === "advanced" ? " 💪" : props.level === "mid" ? " 👍" : " 👶";
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.skills}
      {icon}
    </li>
  );
}

function Avatar(props) {
  // Add this line to log the photo path
  return <img className="avatar" src={props.photo} alt="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>hugo pereira</h1>
      <p>
        fullstack developer web developer and Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iure maiores eos veritatis. Unde illo
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
