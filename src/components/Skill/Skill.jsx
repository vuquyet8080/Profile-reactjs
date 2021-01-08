import React from "react";
import "./styles.css";
const Skill = () => {
  return (
    <section
      id="skills "
      className="Skill-container"
      data-scroll-reveal="enter from the bottom over .5s "
    >
      <div className="section-heading ">
        <h2 className="section-title ">SKILLS</h2>
      </div>
      <div className="container ">
        <div className="skills-container ">
          <article
            className="col-md-4 "
            data-scroll-reveal="enter from the left after .5s "
          >
            <div className="section-box ">
              <h2 className="box-title ">Programming languages</h2>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML, CSS</li>
              </ul>
            </div>
          </article>
          <article
            className="col-md-4 "
            data-scroll-reveal="enter from the right after .5s "
          >
            <div className="section-box ">
              <h2 className="box-title ">Database</h2>
              <ul>
                <li>MySQL</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
          </article>
          <article
            className="col-md-4 "
            data-scroll-reveal="enter from the right after .5s "
          >
            <div className="section-box ">
              <h2 className="box-title ">Foreign Language</h2>
              <li> there are st in here </li>
              <li> there are st in here </li>
              <li> there are st in here </li>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Skill;
