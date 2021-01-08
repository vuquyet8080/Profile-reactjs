import React, { Component } from "react";
import "./styles.css";
const AboutMe = () => {
  return (
    <section className="about-container ">
      <div className="container ">
        <div
          className="col-md-3 "
          data-scroll-reveal="enter from the left after .5s "
        >
          <div className="profile-image">
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext"></div>
                {/* <img src="Image_1.jpg"> */}
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                {/* <img src="Image_2 .jpg"> */}
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                {/* <img src="Image_3 .jpg"> */}
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                {/* <img src="Image_4 .jpg"> */}
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                {/* <img src="Image_5 .jpg"> */}
              </div>
              {/* <a className="prev" onclick="plusSlides(-1)">
                &#10094;
              </a> */}
              {/* <a className="next" onclick="plusSlides(1)">
                &#10095;
              </a> */}
            </div>
            <div>
              <span className="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
              <span className="dot" onclick="currentSlide(4)"></span>
              <span className="dot" onclick="currentSlide(5)"></span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 "
          data-scroll-reveal="enter from the right after .5s "
        >
          <article className="profile-details section-box ">
            <h2 className="title ">Summary</h2>
            <nav className="about-content ">
              I' m a student at NEU. A girl who is trying to create a better
              version of herself day by day, eager to learn and love beautiful
              things.{" "}
            </nav>
          </article>
        </div>
        <div
          className="col-md-3 "
          data-scroll-reveal="enter from the right after .5s "
        >
          <article className="profile-details section-box ">
            <h2 className="title ">Contact Info</h2>
            <address>
              <ul className="address-line ">
                <li>60B Nguyen Huy Tuong</li>
                <li>0868603909</li>
                <li>
                  <a href="https://myaccount.google.com/ ">Contact to work!</a>
                </li>
              </ul>
            </address>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
