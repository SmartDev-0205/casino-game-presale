import React from "react";
export default function MainFlex() {
  return (
    <>
      {" "}
      <section
        className="inner-banner bg_img"
        style={{ background: "url('assets/images/inner-banner/bg2.jpg') top" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6 text-center">
              <h2 className="title text-white">Game Details</h2>
              <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Game Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
