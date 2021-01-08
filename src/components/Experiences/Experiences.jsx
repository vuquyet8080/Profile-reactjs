import React from "react";
import "./styles.css";
const Experiences = () => {
  return (
    <section
      id="experiences "
      className="experiences-container "
      data-scroll-reveal="enter from the bottom over .5s "
    >
      <div className="section-heading ">
        <h2 className="section-title ">Experiences</h2>
      </div>
      <div className="container ">
        <div className="">
          <div className="experience-items ">
            <article
              className="experience-item "
              data-scroll-reveal="enter from the bottom over .5s "
            >
              <div
                className="name-designation "
                data-scroll-reveal="enter from the left after .5s "
              >
                <h3 className="designation ">Fulltime study</h3>
                <p className="name-of-org ">NEU</p>
              </div>
              <div className="stay-time light-violet ">
                <p>
                  01/2019
                  <br /> -<br /> Present
                </p>
              </div>
              <div
                className="comments "
                data-scroll-reveal="enter from the right after .5s "
              >
                <ul>
                  <li>
                    <span className="bold ">Accomplishments</span>: Learn so
                    hard. Improved teamwork and communication skills.
                  </li>
                  <li>
                    <span className="bold ">Technologies</span>: ....
                  </li>
                </ul>
              </div>
            </article>
            <article
              className="experience-item "
              data-scroll-reveal="enter from the bottom over .5s "
            >
              <div
                className="name-designation "
                data-scroll-reveal="enter from the left after .5s "
              >
                <h3 className="designation ">Developer</h3>
                <p className="name-of-org ">somewhere</p>
              </div>
              <div className="stay-time light-yellow ">
                <p>
                  06/2019
                  <br /> -<br /> Present
                </p>
              </div>
              <div
                className="comments "
                data-scroll-reveal="enter from the right after .5s "
              >
                <ul>
                  <li>
                    <span className="bold ">Accomplishments</span>: Learned so
                    hard. Improved teamwork and communication skills.
                  </li>
                  <li>
                    <span className="bold ">Technologies</span>: ....
                  </li>
                </ul>
              </div>
            </article>
            <div
              className="experience-item "
              data-scroll-reveal="enter from the bottom over .5s "
            >
              <article
                className="name-designation "
                data-scroll-reveal="enter from the left after .5s "
              >
                <h3 className="designation ">Work</h3>
                <p className="name-of-org ">somewhere</p>
              </article>
              <article className="stay-time light-green ">
                <p>
                  10/2020
                  <br /> -<br /> present
                </p>
              </article>
              <article
                className="comments "
                data-scroll-reveal="enter from the right after .5s "
              >
                <ul>
                  <li>
                    <span className="bold ">Accomplishments</span>: Learned so
                    hard. Improved teamwork and communication skills.
                  </li>
                  <li>
                    <span className="bold ">Technologies</span>: ....
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
