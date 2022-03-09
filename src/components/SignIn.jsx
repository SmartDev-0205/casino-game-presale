import React from "react";
export default function MainFlex() {
  return <><section className="inner-banner bg_img" style={{background: "url('assets/images/inner-banner/bg2.jpg') top"}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 col-xl-6 text-center">
        <h2 className="title text-white">Sign In</h2>
        <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
          <li><a href="/">Home</a></li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    <section className="account-section overflow-hidden bg_img" style={{background:"url(assets/images/account/bg.jpg)"}}>
        <div className="container">
            <div className="account__main__wrapper">
                <div className="account__form__wrapper">
                    <div className="logo"><a href="/"><img src="assets/images/logo.png" alt="logo"/></a></div>
                    <form className="account__form form row g-4">
                        <div className="col-12">
                            <div className="form-group">
                                <div for="username" className="input-pre-icon"><i className="las la-user"></i></div>
                                <input id="username" type="text" className="form--control form-control style--two" placeholder="Username" required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <div for="pass" className="input-pre-icon"><i className="las la-lock"></i></div>
                                <input id="pass" type="password" className="form--control form-control style--two" placeholder="Password" required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <button className="cmn--btn active w-100 btn--round" type="submit">Sign In</button>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between mt-5">
                            <div className="form--check d-flex align-items-center">
                                <input id="check1" type="checkbox" checked />
                                <label for="check1">Remember me</label>
                            </div>
                            <a href="#0" className="forgot-pass d-block text--base">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
                <div className="account__content__wrapper" >
                    <div className="content text-center text-white">
                        <h3 className="title text--base mb-4">Welcome to Casinio</h3>
                        <p className="">Sign in your Account. Atque, fuga sapiente, doloribus qui enim tempora?</p>
                        <p className="account-switch mt-4">Don't have an Account yet ? <a className="text--base ms-2" href="/signUp">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>  </>
}