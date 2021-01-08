import React from "react";
import "./styles.css";
const Education = () => {
  return (
    <section
      id="education "
      className="education-container"
      data-scroll-reveal="enter from the bottom over .5s "
    >
      <div className="section-heading ">
        <h2 className="section-title ">Education</h2>
      </div>
      <div className="container ">
        <div className="">
          <div className="education-items ">
            <div
              className="col-md-12 "
              data-scroll-reveal="enter from the top after .5s "
            >
              <article className="education-item ">
                <div className="edu-time light-green ">
                  <p>
                    2019
                    <br />-<br /> 2023
                  </p>
                </div>
                <div className="edu-title ">
                  <p className="edu-session ">
                    Data science in Economics and Business
                  </p>
                  <p className="edu-inst ">NEU, Hanoi</p>
                </div>
                <div className="edu-comments ">
                  <ul>
                    <li>Degree grade: </li>
                  </ul>
                </div>
              </article>
              <article className="education-item ">
                <div className="edu-time light-blue ">
                  <p>
                    2018
                    <br /> -
                    <br /> 2015
                  </p>
                </div>
                <div className="edu-title ">
                  <p className="edu-session ">Ha Giang gifted high school</p>
                  <p className="edu-inst ">Ha Giang</p>
                </div>
                <div className="edu-comments ">
                  <ul>
                    <li>
                      Excellent student of 2/6 semesters (GPA≥ 8.5). Good
                      student of 4/8 semester (GPA ≥ 8.0).
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
