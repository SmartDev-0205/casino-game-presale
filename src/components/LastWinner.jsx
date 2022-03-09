import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MainFlex() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      {" "}
      <section
        className="top-section padding-top padding-bottom bg_img"
        style={{ background: "url(assets/images/top/bg.png) center" }}
      >
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-4">
              <h3 className="part-title mb-4">Latest Winner</h3>
              <div className="top-investor-slider">
              <Carousel responsive={responsive}
                autoPlay={ true }
                autoPlaySpeed={2000}
                arrows={false}
                infinite={true}>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item1.png" alt="top" />
                    <p className="amount">$150</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Munna Ahmed</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item2.png" alt="top" />
                    <p className="amount">$270</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Fahad Bin</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item3.png" alt="top" />
                    <p className="amount">$52000</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Rafuj Raiha</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item1.png" alt="top" />
                    <p className="amount">$150</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Munna Ahmed</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item3.png" alt="top" />
                    <p className="amount">$50</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Rafuj Raihan</h6>
                  </div>
                </div>
                </Carousel>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cla-wrapper text-center">
                <h3 className="title mb-4">
                  WIN !!! & <br /> Get million dollars
                </h3>
                <a href="#0" className="cmn--btn active btn--md radius-0">
                  Play Now
                </a>
                <div className="thumb">
                  <img src="assets/images/top/bg2.png" alt="top" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3 className="part-title mb-4">Top Investor</h3>
              <div className="top-investor-slider">
              <Carousel responsive={responsive}
                autoPlay={ true }
                autoPlaySpeed={2000}
                arrows={false}
                infinite={true}>

                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item1.png" alt="top" />
                    <p className="amount">$150</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Munna Ahmed</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item2.png" alt="top" />
                    <p className="amount">$270</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Fahad Bin</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item3.png" alt="top" />
                    <p className="amount">$52000</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Rafuj Raiha</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item1.png" alt="top" />
                    <p className="amount">$150</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Munna Ahmed</h6>
                  </div>
                </div>
                <div className="investor-item">
                  <div className="investor-item__thumb">
                    <img src="assets/images/top/item3.png" alt="top" />
                    <p className="amount">$50</p>
                  </div>
                  <div className="investor-item__content">
                    <h6 className="name">Rafuj Raihan</h6>
                  </div>
                </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
