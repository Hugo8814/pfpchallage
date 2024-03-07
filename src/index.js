import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skill="React" emoji="👶" color="lightBlue" />
      <Skill skill="HTML" emoji="💪" color="orangeRed" />
      <Skill skill="css" emoji="💪" color="blue" />
      <Skill skill="Sass" emoji="💪" color="pink" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="GIT" emoji="👍" color="red" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
      {props.emoji}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
