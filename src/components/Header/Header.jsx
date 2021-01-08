import React from "react";
import "./styles.css";
const Header = () => {
  return (
    <header className="header">
      <div classNameName="container ">
        <article className="site-title ">
          <h1 className="site-name ">I’m Tran Huong Giang</h1>
        </article>
        <h3 className="site-slogan ">A girl eager to learn new things.</h3>

        <nav className="normal-wrapper ">
          <div className="icon-outer ">
            <div className="icon-circle ">
              <i className="fa fa-facebook "></i>
            </div>
            <a href="https://www.facebook.com/huonggiangtran22/ ">Facebook</a>
            <p>Checkout my Facebook to know me better!</p>
          </div>

          <div className="icon-outer ">
            <div className="icon-circle ">
              <i className="fa fa-instagram "></i>
            </div>
            <a href="https://www.instagram.com/huonggiang.me/?hl=vi ">
              Instagram
            </a>
            <p>Checkout my Instagram to meet my real personality.</p>
          </div>

          <div className="icon-outer ">
            <div className="icon-circle ">
              <i className="fa fa-google "></i>
            </div>
            <a href="https://myaccount.google.com/ ">Google</a>
            <p>Contact to work!</p>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
