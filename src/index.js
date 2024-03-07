import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photo="unsplash.jpg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
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
  <ul></ul>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
