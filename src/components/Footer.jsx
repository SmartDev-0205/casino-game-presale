import React from "react";
export default function MainFlex() {
  return (
    <>
      <footer
        className="footer-section bg_img"
        style={{ background: "url(assets/images/footer/bg.jpg) center" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="footer-wrapper d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
              <div className="logo mb-3 mb-md-0">
                <a href="/">
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
              </div>
              <ul className="footer-links d-flex flex-wrap justify-content-center">
                <li>
                  <a href="/game">Games</a>
                </li>
                <li>
                  <a href="/termscondition">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex flex-wrap justify-content-center align-items-center text-center">
              <p className="copyright text-white">
                Copyrights &copy; 2021 All Rights Reserved by{" "}
                <a href="#0" className=" text--base ms-2">
                  Viserlab
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="shapes">
          <img
            src="assets/images/footer/shape.png"
            alt="footer"
            className="shape1"
          />
        </div>
      </footer>{" "}
    </>
  );
}
