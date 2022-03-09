import React, { useEffect } from "react";
import $ from "jquery";

export default function MainFlex() {
  useEffect(() => {
    // Responsive Menu
    var headerTrigger = $(".header-trigger");
    headerTrigger.on("click", function () {
      $(".menu").toggleClass("active");
      $(".overlay").toggleClass("active");
    });

    var headerTrigger2 = $(".top-bar-trigger");
    headerTrigger2.on("click", function () {
      $(".header-top").toggleClass("active");
      $(".overlay").addClass("active");
      $(".overlay").removeClass("active");
    });

    // Overlay Event
    var over = $(".overlay");
    over.on("click", function () {
      $(".overlay").removeClass("overlay-color");
      $(".overlay").removeClass("active");
      $(".menu, .header-trigger").removeClass("active");
      $(".header-top").removeClass("active");
    });
    // Sticky Menu
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
    //Menu Dropdown
    $("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

    $(".menu li a").on("click", function () {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
      } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
      }
    });
  });

  return (
    <>
      <div className="overlay"></div>
      <div className="preloader">
        <div className="scene" id="scene">
          <input type="checkbox" id="andicator" />
          <div className="cube">
            <div className="cube__face cube__face--front">
              <i></i>
            </div>
            <div className="cube__face cube__face--back">
              <i></i>
              <i></i>
            </div>
            <div className="cube__face cube__face--right">
              <i></i> <i></i> <i></i> <i></i> <i></i>
            </div>
            <div className="cube__face cube__face--left">
              <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
            </div>
            <div className="cube__face cube__face--top">
              <i></i> <i></i> <i></i>
            </div>
            <div className="cube__face cube__face--bottom">
              <i></i> <i></i> <i></i> <i></i>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="header-bottom">
            <div className="header-bottom-area align-items-center">
              <div className="logo">
                <a href="/">
                  <img src="./assets/images/logo.png" alt="logo" />
                </a>
              </div>
              <ul className="menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/game">
                    Games{" "}
                    {/* <span className="badge badge--sm badge--base text-dark">
                      NEW
                    </span> */}
                  </a>
                </li>
                <li>
                  <a href="/faq">Faq</a>
                </li>
                <li>
                  <a href="/buy">Buy</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <button className="btn-close btn-close-white d-lg-none"></button>
              </ul>
              <div className="header-trigger-wrapper d-flex d-lg-none align-items-center">
                <div className="header-trigger me-4">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
