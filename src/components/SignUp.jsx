import React from "react";
export default function MainFlex() {
  return <> <section className="inner-banner bg_img" style={{background:" url('assets/images/inner-banner/bg2.jpg') top"}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 col-xl-6 text-center">
        <h2 className="title text-white">Sign Up</h2>
        <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
          <li><a href="/">Home</a></li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    <section className="account-section overflow-hidden bg_img" style={{background:"url(assets/images/account/bg.jpg)"}}>
        <div className="container">
            <div className="account__main__wrapper">
                <div className="account__form__wrapper sign-up">
                    <div className="logo"><a href="/"><img src="assets/images/logo.png" alt="logo"/></a></div>
                    <form className="account__form form row g-4">
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="fname" className="input-pre-icon"><i className="las la-user"></i></div>
                                <input id="fname" type="text" className="form--control form-control style--two" placeholder="Frist Name" required/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="lname" className="input-pre-icon"><i className="las la-user"></i></div>
                                <input id="lname" type="text" className="form--control form-control style--two" placeholder="Last Name" required/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="country" className="input-pre-icon"><i className="las la-globe"></i></div>
                                <select className="form-select form--control style--two">
                                    <option>Bangladesh</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="input-group">
                                <span className="input-group-text text--base style--two">+80</span>
                                <input type="text" className="form--control form-control style--two" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="email" className="input-pre-icon"><i className="las la-envelope"></i></div>
                                <input id="email" type="email" className="form--control form-control style--two" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="username" className="input-pre-icon"><i className="las la-user"></i></div>
                                <input id="username" type="text" className="form--control form-control style--two" placeholder="Username" required/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="pass" className="input-pre-icon"><i className="las la-lock"></i></div>
                                <input id="pass" type="password" className="form--control form-control style--two" placeholder="Password" required/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="form-group">
                                <div for="pass" className="input-pre-icon"><i className="las la-lock"></i></div>
                                <input id="pass" type="password" className="form--control form-control style--two" placeholder="Confirm Password" required/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <button className="cmn--btn active w-100 btn--round" type="submit">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="account__content__wrapper" >
                    <div className="content text-center text-white">
                        <h3 className="title text--base mb-4">Welcome to Casinio</h3>
                        <p className="">Sign in your Account. Atque, fuga sapiente, doloribus qui enim tempora?</p>
                        <p className="account-switch mt-4">Already have an Account ? <a className="text--base ms-2" href="/signIn">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section> </>
}