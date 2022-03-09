import React from "react";
export default function MainFlex() {
    return <>
        <section className="inner-banner bg_img" style={{ background: "url('assets/images/inner-banner/bg2.jpg') top" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-xl-6 text-center">
                        <h2 className="title text-white">Contact Page</h2>
                        <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                            <li><a href="/">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="contact-section padding-top padding-bottom">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <div className="contact-info-wrapper">
                                <h3 className="title mb-3 mb-lg-4">Contact Information</h3>
                                <ul className="contact-info-list m-0">
                                    <li><a href="mailto:demo@gmail.com"> <i className="las la-map-marker-alt"></i> <span>12/A Kingfisher Road <br /> Medino Washington, NY 10012, USA</span></a></li>
                                    <li><a href="tel:238754"> <i className="las la-phone-volume"></i> <span>+47 8519-9415 1515</span>a</a></li>
                                    <li><a href="tel:238754"> <i className="las la-phone-volume"></i> <span>+47 8519-9415 1515</span>a</a></li>
                                    <li><a href="mailto:demo@gmail.com"> <i className="las la-envelope"></i> <span>testuser@gmail.com</span></a></li>
                                    <li><a href="mailto:demo@gmail.com"> <i className="las la-envelope"></i> <span>testuser@gmail.com</span></a></li>
                                </ul>
                                <ul className="social-links mt-4">
                                    <li><a href="#0"><i className="lab la-facebook-f"></i></a></li>
                                    <li><a href="#0"><i className="lab la-twitter"></i></a></li>
                                    <li><a href="#0"><i className="lab la-instagram"></i></a></li>
                                    <li><a href="#0"><i className="lab la-vimeo"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form className="contact-form">
                                <h3 className="title mb-3">Get In Touch</h3>
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fname" className="form-label">First Name <span className="text--danger">*</span></label>
                                            <input id="fname" type="text" className="form-control form--control"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lname" className="form-label">Last Name <span className="text--danger">*</span></label>
                                            <input id="lname" type="text" className="form-control form--control"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email Address <span className="text--danger">*</span></label>
                                            <input id="email" type="text" className="form-control form--control"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">Phone Number <span className="text--danger">*</span></label>
                                            <input id="phone" type="text" className="form-control form--control"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="msg" className="form-label">Your Message <span className="text--danger">*</span></label>
                                            <textarea id="msg" className="form-control form--control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button className="cmn--btn active">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> </>
}