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
              <h2 class="title text-white">Change Passord</h2>
              <ul class="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Change Passord</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="dashboard-section padding-top padding-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="dashboard-sidebar">
                <div class="close-dashboard d-lg-none">
                  <i class="las la-times"></i>
                </div>
                <div class="dashboard-user">
                  <div class="user-thumb">
                    <img src="assets/images/top/item1.png" alt="dashboard" />
                  </div>
                  <div class="user-content">
                    <span>Welcome</span>
                    <h5 class="name">Munna Ahmed</h5>
                    <ul class="user-option">
                      <li>
                        <a href="#0">
                          <i class="las la-bell"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i class="las la-pen"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i class="las la-envelope"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="user-dashboard-tab">
                  <li>
                    <a href="/dashboard" class="active">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/deposit-log">Deposit History</a>
                  </li>
                  <li>
                    <a href="/withdraw-log">Withdraw History</a>
                  </li>
                  <li>
                    <a href="/trx-log">Transection History</a>
                  </li>
                  <li>
                    <a href="/profile">Account Settings</a>
                  </li>
                  <li>
                    <a href="/change-pass">Security Settings</a>
                  </li>
                  <li>
                    <a href="#0">Sign Out</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="user-toggler-wrapper d-flex align-items-center d-lg-none">
                <h4 class="title m-0">User Dashboard</h4>
                <div class="user-toggler">
                  <i class="las la-sliders-h"></i>
                </div>
              </div>
              <div class="custom--card section-bg">
                <div class="card--body section-bg p-sm-5 p-3">
                  <div class="reset-header mb-5 text-center">
                    <div class="icon">
                      <i class="las la-lock"></i>
                    </div>
                    <h3 class="mt-3">Reset Password</h3>
                    <p>Enter your current password and new password</p>
                  </div>
                  <form autocomplete="off">
                    <div class="form-group mb-3">
                      <label class="form-label" for="password">
                        Current Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        class="form-control form--control"
                        name="current_password"
                        required=""
                        autocomplete="off"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label class="form-label" for="password">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        class="form-control form--control"
                        name="password"
                        required=""
                        autocomplete="off"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label class="form-label" for="confirm_password">
                        Confirm Password
                      </label>
                      <input
                        id="password_confirmation"
                        type="password"
                        class="form-control form--control"
                        name="password_confirmation"
                        required=""
                        autocomplete="off"
                      />
                    </div>

                    <div class="form-group mt-4">
                      <button type="submit" class="cmn--btn active w-100">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
