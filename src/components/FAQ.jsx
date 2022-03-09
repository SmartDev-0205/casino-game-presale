import React, { useEffect } from "react";
import $ from "jquery";

export default function MainFlex() {
  useEffect(() => {
    $(".faq-item__title").on("click", function (e) {
      var element = $(this).parent(".faq-item");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find(".faq-item__content").removeClass("open");
        element.find(".faq-item__content").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children(".faq-item__content").slideDown(300, "swing");
        element
          .siblings(".faq-item")
          .children(".faq-item__content")
          .slideUp(300, "swing");
        element.siblings(".faq-item").removeClass("open");
        element
          .siblings(".faq-item")
          .find(".faq-item__content")
          .slideUp(300, "swing");
      }
    });
  });

  return (
    <>
      {" "}
      <section className="faq-section padding-top padding-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6">
              <div className="section-header text-center">
                <h2 className="section-header__title">
                  Frequently Asked Questions
                </h2>
                <p>
                  A casino is a facility for certain types of gambling. Casinos
                  are often built combined with hotels, resorts.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-wrapper row justify-content-between">
            <div className="col-lg-6">
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
              <div className="faq-item mb-2 mb-lg-0">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-item__title">
                  <h5 className="title">
                    01. How do I create Casine Account ?
                  </h5>
                </div>
                <div className="faq-item__content">
                  <p>
                    Autem ut suscipit, quibusdam officia, perferendis odio neque
                    eius similique quae ipsum dolor voluptas sequi recusandae
                    dolorem assumenda asperiores deleniti numquam iste fugit
                    eligendi voluptates aliquam voluptate. Quas, magni excepturi
                    ab, dolore explicabo .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shapes">
          <img
            src="assets/images/faq/shape.png"
            alt="faq"
            className="shape shape1"
          />
        </div>
      </section>{" "}
    </>
  );
}
