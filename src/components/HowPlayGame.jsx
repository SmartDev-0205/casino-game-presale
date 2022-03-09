import React from "react";
export default function MainFlex() {
  return (
    <>
      <section
        className="how-section padding-top padding-bottom bg_img"
        style={{ background: "url(assets/images/how/bg2.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="section-header__title">How to Play Game</h2>
                <p>
                  A casino is a facility for certain types of gambling. Casinos
                  are often built combined with hotels, resorts.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-user-plus"></i>
                  <div className="badge badge--lg badge--round radius-50">
                    01
                  </div>
                </div>
                <div className="how-item__content">
                  <h4 className="title">Sign Up First & Login</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-id-card"></i>
                  <div className="badge badge--lg badge--round radius-50">
                    02
                  </div>
                </div>
                <div className="how-item__content">
                  <h4 className="title">Complete you Profile</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-dice"></i>
                  <div className="badge badge--lg badge--round radius-50">
                    03
                  </div>
                </div>
                <div className="how-item__content">
                  <h4 className="title">Choose a Game & Play</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
