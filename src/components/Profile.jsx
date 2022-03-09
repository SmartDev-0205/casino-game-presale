export default function MainFlex() {
  return (
    <>
      <section
        class="inner-banner bg_img"
        style={{ background: "url('assets/images/inner-banner/bg2.jpg') top" }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-xl-6 text-center">
              <h2 class="title text-white">Profile</h2>
              <ul class="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      c
      <section class="profile-section padding-top padding-bottom">
        <div class="container">
          <div class="profile-edit-wrapper">
            <div class="row gy-5">
              <div class="col-xl-4">
                <div class="profile__thumb__edit text-center custom--card">
                  <div class="card--body">
                    <div class="thumb">
                      <img
                        src="assets/images/account/user.png"
                        alt="testimonial"
                      />
                    </div>
                    <div class="profile__info">
                      <h4 class="name">Demo User</h4>
                      <p class="username">@demouser123</p>
                      <input
                        type="file"
                        class="form-control d-none "
                        id="update-photo"
                      />
                      <label
                        class="cmn--btn active btn--md mt-3"
                        for="update-photo"
                      >
                        Update Profile Picture
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-8">
                <div class="custom--card card--lg">
                  <div class="card--body">
                    <div class="row gy-3">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="fname" class="form-label">
                            First Name
                          </label>
                          <input
                            id="fname"
                            type="text"
                            class="form-control form--control style-two "
                            placeholder="testuser"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="lname" class="form-label">
                            Last Name
                          </label>
                          <input
                            id="lname"
                            type="text"
                            class="form-control form--control style-two "
                            placeholder="testuser"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="uname" class="form-label">
                            Username
                          </label>
                          <input
                            id="text"
                            type="uname"
                            class="form-control form--control style-two "
                            placeholder="testuser"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="email" class="form-label">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            class="form-control form--control style-two "
                            placeholder="testuser@gmail.com"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="country" class="form-label">
                            Country
                          </label>
                          <select
                            name=""
                            id=""
                            class="form-select form--select form--control style-two"
                          >
                            <option value="">Bangladesh</option>
                            <option value="">India</option>
                            <option value="">English</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="number" class="form-label">
                            Phone Number
                          </label>
                          <div class="input-group">
                            <span class="input-group-text text--base">
                              +192
                            </span>
                            <input
                              id="number"
                              type="tel"
                              class="form-control form--control style-two "
                              placeholder="ex. +09 3195 1452"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="addr" class="form-label">
                            Address
                          </label>
                          <input
                            id="addr"
                            type="text"
                            class="form-control form--control style-two "
                            placeholder="Uttara"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="zip" class="form-label">
                            Zip Code
                          </label>
                          <input
                            id="zip"
                            type="text"
                            class="form-control form--control style-two "
                            placeholder="1230"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label class="form-label" for="about">
                            About You
                          </label>
                          <textarea
                            class="form-control form--control style-two pt-3"
                            placeholder="I'm a Front-end Web Developer. ...."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col">
                        <button class="cmn--btn active mt-3">
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
