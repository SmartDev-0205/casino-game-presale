import React from "react";
export default function MainFlex() {
  return <> 

<section
        className="banner-section bg_img overflow-hidden"
        style={{ background: "url(assets/images/banner/bg.png) center" }}
      >
        <div className="container">
          <div className="banner-wrapper d-flex flex-wrap align-items-center">
            <div className="banner-content">
              <h1 className="banner-content__title">
                Play <span className="text--base">Online Casino</span> & Win 
                <span style={{color:"red"}}>$LShiba</span> Unlimited
              </h1>
              <p className="banner-content__subtitle">
                PLAY CASINO AND EARN CRYPTO IN ONLINE. THE ULTIMATE ONLINE
                CASINO PLATFORM.
              </p>
              <div className="button-wrapper">
                <a href="game" className="cmn--btn active btn--lg">
                  <i className="las la-play"></i> Play Game
                </a>
                <a href="/buy" className="cmn--btn btn--lg">
                  Buy LShiba
                </a>
              </div>
              <img
                src="assets/images/banner/card.png"
                alt=""
                className="shape1"
              />
            </div>
            <div className="banner-thumb">
              <img src="assets/images/banner/thumb.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>
   </>
}