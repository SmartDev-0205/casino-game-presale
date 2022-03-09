import React from "react";
export default function MainFlex() {
  return (
    <>
    <section
        className="inner-banner bg_img"
        style={{background:" url('assets/images/inner-banner/bg2.jpg') top"}}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6 text-center">
              <h2 className="title text-white">User Dashboard</h2>
              <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="dashboard-section padding-top padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="dashboard-sidebar">
                <div className="close-dashboard d-lg-none">
                  <i className="las la-times"></i>
                </div>
                <div className="dashboard-user">
                  <div className="user-thumb">
                    <img src="assets/images/top/item1.png" alt="dashboard" />
                  </div>
                  <div className="user-content">
                    <span className="fs-sm">Welcome</span>
                    <h5 className="name">Munna Ahmed</h5>
                    <ul className="user-option">
                      <li>
                        <a href="#0">
                          <i className="las la-bell"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="las la-pen"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="las la-envelope"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="user-dashboard-tab">
                  <li>
                    <a href="/dashboard" className="active">
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
            <div className="col-lg-9">
              <div className="user-toggler-wrapper d-flex align-items-center d-lg-none">
                <h4 className="title m-0">User Dashboard</h4>
                <div className="user-toggler">
                  <i className="las la-sliders-h"></i>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                <div className="col-lg-6 col-xl-4 col-md-6 col-sm-10">
                  <div className="dashboard__card">
                    <div className="dashboard__card-content">
                      <h2 className="price">$3750</h2>
                      <p className="info">TOTAL BALANCE</p>
                      <a href="#0" className="view-btn">
                        View All
                      </a>
                    </div>
                    <div className="dashboard__card-icon">
                      <i className="las la-wallet"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6 col-sm-10">
                  <div className="dashboard__card">
                    <div className="dashboard__card-content">
                      <h2 className="price">$4550</h2>
                      <p className="info">TOTAL DEPOSIT</p>
                      <a href="#0" className="view-btn">
                        View All
                      </a>
                    </div>
                    <div className="dashboard__card-icon">
                      <i className="las la-wallet"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6 col-sm-10">
                  <div className="dashboard__card">
                    <div className="dashboard__card-content">
                      <h2 className="price">$2500</h2>
                      <p className="info">TOTAL WITHDRAW</p>
                      <a href="#0" className="view-btn">
                        View All
                      </a>
                    </div>
                    <div className="dashboard__card-icon">
                      <i className="las la-money-check"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 row gy-4 justify-content-center">
                <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                  <div className="game-item">
                    <div className="game-inner">
                      <div className="game-item__thumb">
                        <img src="assets/images/game/item2.png" alt="game" />
                      </div>
                      <div className="game-item__content">
                        <h4 className="title">Roulette</h4>
                        <p className="invest-info">Invest Limit</p>
                        <p className="invest-amount">$10.49 - $1,000</p>
                        <a href="#0" className="cmn--btn active btn--md radius-0">
                          Play Now
                        </a>
                      </div>
                    </div>
                    <div className="ball"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                  <div className="game-item">
                    <div className="game-inner">
                      <div className="game-item__thumb">
                        <img src="assets/images/game/item1.png" alt="game" />
                      </div>
                      <div className="game-item__content">
                        <h4 className="title">Zero To Ninty</h4>
                        <p className="invest-info">Invest Limit</p>
                        <p className="invest-amount">$10.49 - $1,000</p>
                        <a href="#0" className="cmn--btn active btn--md radius-0">
                          Play Now
                        </a>
                      </div>
                    </div>
                    <div className="ball"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6 col-sm-6">
                  <div className="game-item">
                    <div className="game-inner">
                      <div className="game-item__thumb">
                        <img src="assets/images/game/item3.png" alt="game" />
                      </div>
                      <div className="game-item__content">
                        <h4 className="title">Number Buy</h4>
                        <p className="invest-info">Invest Limit</p>
                        <p className="invest-amount">$10.49 - $1,000</p>
                        <a href="#0" className="cmn--btn active btn--md radius-0">
                          Play Now
                        </a>
                      </div>
                    </div>
                    <div className="ball"></div>
                  </div>
                </div>
              </div>
              <div className="table--responsive--md mt-5">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Transection ID</th>
                      <th>Transection Type</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #481XV93NCKD0
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Withdraw
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $150.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #V93N481XCKD0
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Deposit
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $500.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #1XCKD0V93N48
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Deposit
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $350.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #V981XCKD03N4
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Withdraw
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $250.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #481XV93NCKD0
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Deposit
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $150.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #V93N481XCKD0
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Withdraw
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $500.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #1XCKD0V93N48
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Deposit
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $350.50
                      </td>
                    </tr>
                    <tr>
                      <td className="trx-id" data-label="Transection ID">
                        #V981XCKD03N4
                      </td>
                      <td className="trx-type" data-label="Transection Type">
                        Withdraw
                      </td>
                      <td className="date" data-label="Date">
                        12 Mar, 21 at 12:30 AM
                      </td>
                      <td className="amount" data-label="Amount">
                        $250.50
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
