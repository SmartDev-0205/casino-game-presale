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
      <section className="testimonial-section padding-top padding-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6">
              <div className="section-header text-center">
                <h2 className="section-header__title">
                  What Casino Players Say
                </h2>
                <p>
                  A casino is a facility for certain types of gambling. Casinos
                  are often built combined with hotels, resorts.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-slider">
          <Carousel responsive={responsive} infinite={true}>
              <div className="single-slide">
                <div
                  className="testimonial-item bg_img"
                  style={{
                    background: "url(assets/images/testimonial/bg.png) center",
                  }}
                >
                  <div className="testimonial-inner">
                    <div className="testimonial-item__content">
                      <div className="quote-icon">
                        <i className="las la-quote-left"></i>
                      </div>
                      <p>
                        Ducimus ullam omnis eius unde ipsa minus excepturi
                        pariatur! Vel sint cumque expedita eveniet commodi asp
                        voluptas recusandae voluptatem, accusantium in.
                      </p>
                    </div>
                    <div className="thumb-wrapper">
                      <div className="thumb">
                        <img src="assets/images/top/item1.png" alt="top" />
                      </div>
                      <div className="content">
                        <h6 className="name">Suraiya Nesa</h6>
                        <span className="designation">Top Pocker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div
                  className="testimonial-item bg_img"
                  style={{
                    background: "url(assets/images/testimonial/bg.png) center",
                  }}
                >
                  <div className="testimonial-inner">
                    <div className="testimonial-item__content">
                      <div className="quote-icon">
                        <i className="las la-quote-left"></i>
                      </div>
                      <p>
                        Ducimus ullam omnis eius unde ipsa minus excepturi
                        pariatur! Vel sint cumque expedita eveniet commodi asp
                        voluptas recusandae voluptatem, accusantium in.
                      </p>
                    </div>
                    <div className="thumb-wrapper">
                      <div className="thumb">
                        <img src="assets/images/top/item2.png" alt="top" />
                      </div>
                      <div className="content">
                        <h6 className="name">Munna Ahmed</h6>
                        <span className="designation">Top Pocker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div
                  className="testimonial-item bg_img"
                  style={{
                    background: " url(assets/images/testimonial/bg.png) center",
                  }}
                >
                  <div className="testimonial-inner">
                    <div className="testimonial-item__content">
                      <div className="quote-icon">
                        <i className="las la-quote-left"></i>
                      </div>
                      <p>
                        Ducimus ullam omnis eius unde ipsa minus excepturi
                        pariatur! Vel sint cumque expedita eveniet commodi asp
                        voluptas recusandae voluptatem, accusantium in.
                      </p>
                    </div>
                    <div className="thumb-wrapper">
                      <div className="thumb">
                        <img src="assets/images/top/item3.png" alt="top" />
                      </div>
                      <div className="content">
                        <h6 className="name">Rafuj Raihan</h6>
                        <span className="designation">Top Pocker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div
                  className="testimonial-item bg_img"
                  style={{
                    background: "url(assets/images/testimonial/bg.png) center",
                  }}
                >
                  <div className="testimonial-inner">
                    <div className="testimonial-item__content">
                      <div className="quote-icon">
                        <i className="las la-quote-left"></i>
                      </div>
                      <p>
                        Ducimus ullam omnis eius unde ipsa minus excepturi
                        pariatur! Vel sint cumque expedita eveniet commodi asp
                        voluptas recusandae voluptatem, accusantium in.
                      </p>
                    </div>
                    <div className="thumb-wrapper">
                      <div className="thumb">
                        <img src="assets/images/top/item2.png" alt="top" />
                      </div>
                      <div className="content">
                        <h6 className="name">Fahad Foiz</h6>
                        <span className="designation">Top Pocker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Carousel>
          </div>
        </div>
        <div className="shapes">
          <img
            src="assets/images/why/shape.png"
            alt="why"
            className="shape shape1"
          />
        </div>
      </section>{" "}
    </>
  );
}
