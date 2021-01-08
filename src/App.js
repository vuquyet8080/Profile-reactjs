import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skill />
      <Experiences />
      <Education />
    </div>
  );
}

export default App;
