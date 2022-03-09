import React from "react";
export default function MainFlex() {
  return <>   <section className="about-section padding-top padding-bottom overflow-hidden">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="about-content">
          <div className="section-header">
            <h2 className="section-header__title">About The Casino</h2>
            <p>
              A casino is a facility for certain types of gambling.
              Casinos are often built near or combined with hotels,
              resorts, restaurants, retail shopping, cruise ships, and
              other tourist attractions. Some casinos are also known for
              hosting live entertainment, such as stand-up comedy,
              concerts, and sports.
            </p>
          </div>
          <a href="/about" className="cmn--btn active">
            Know More
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="aobut-thumb section-thumb">
          <img
            src="assets/images/about/thumb.png"
            alt="about"
            className="ms-lg-5"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="shapes">
    <img
      src="assets/images/about/shape.png"
      alt="about"
      className="shape shape1"
    />
  </div>
</section> </>
}