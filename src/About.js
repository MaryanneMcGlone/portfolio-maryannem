import React from "react";
import Navbar from "./Nav/Navbar";
import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h3>Welcome! Thank you for coming!</h3>
              <h1>Hi, I'm Maryanne</h1>
              <h2>Front-end Developer based in the US</h2>
              <div className="about-paragraphs">
                <p>
                  By day, I am the business manager of a Law Firm. After 5 pm, I
                  am a Front-end Developer, coding my way into new lands. I have
                  always held a passion for languages, but coding has taken this
                  love to a new level. I studied Linguistics and French in
                  college. After I graduated in 2015, I taught English abroad.
                  In coding, I have discovered a new understanding of
                  Applications and Web Development. My next goal is to become a
                  Full-stack Developer.
                </p>
                <p>
                  My current role presented a need to Manage Marketing and
                  online business listings. I filled this need for the business
                  by learning SEO, Web Development, and Design. I could not be
                  happier that I took the opportunity to learn to code. I am
                  thrilled with the projects I have created. Learning to code
                  has given me much insight into Marketing, Web Applications,
                  and Design.
                </p>
                <a href="myWork.js" className="btn btn-branding">
                  See my Projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="images/Maryanne.png"
              className="Maryanne-pic"
              alt="Maryanne M."
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col d-none d-lg-block">
            <img
              src="/images/mapleTrees.png"
              className="img-fluid p-2 shadow rounded"
              alt="Maple Trees project preview"
            />
          </div>
          <div className="col d-none d-lg-block">
            <img
              src="/images/weatherAppC.png"
              className="img-fluid p-2 shadow rounded"
              alt="weather project preview"
            />
          </div>
          <div className="col d-none d-lg-block">
            <img
              src="/images/lonelyBat-books.png"
              className="img-fluid p-2 shadow rounded"
              alt="Lonely Bat books project review"
            />
          </div>
        </div>
      </div>
      <div id="contact">
        <h4 className="text-center text-muted">Email Me</h4>
        <a
          href="mailto:maryanne.mcglone@gmail.com"
          className="email-link"
          title="email Maryanne"
        >
          Contact Me
        </a>
      </div>
      <div className="container footer">
        <footer>
          <div className="contact-box d-flex justify-content-between mb-5 d-none d-md-flex">
            <div>
              <h4 className="mb-2">Work Inquiry</h4>
              <p className="text-muted">Let's Work Together</p>
            </div>
            <div>
              <a
                href="http://www.linkedin.com/in/maryanne-mcglone-0083b955/"
                target="_blank"
                className="btn btn-branding"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-2">
            <a
              href="mailto:maryanne.mcglone@gmail.com"
              className="email-link"
              title="email Maryanne"
            >
              maryanne.mcglone@gmail.com
            </a>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a
              href="http://www.linkedin.com/in/maryanne-mcglone-0083b955/"
              target="_blank"
              title="LinkedIn profile"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/inksp0ts09"
              target="_blank"
              title="GitHub profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <p className="text-center mt-4">
            This project was coded by Maryanne, and it is{" "}
            <a
              href="https://github.com/inksp0ts09/portfolio-maryannem"
              target="_blank"
            >
              open-sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
