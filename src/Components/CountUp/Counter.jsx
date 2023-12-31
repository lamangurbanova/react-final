import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import './style.css'

const Counter = () => {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });

  return (
    <>
    <div className="countUp py-5">
      <div className="container">
        <div className="row w-100 pb-3">
          <div className="mb-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="countUp-item">
                  <h2 className="header d-flex align-items-center justify-content-center">
                  <CountUp enableScrollSpy end={230} duration={5}></CountUp>
                  </h2>
                  <h4 className="subheader">
                  Pastry Shops
                  </h4>
              </div>
          </div>
          <div className="mb-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="countUp-item">
                  <h2 className="header d-flex align-items-center justify-content-center">
                  <CountUp  enableScrollSpy end={26} duration={5}></CountUp>
                  </h2>
                  <h4 className="subheader">
                  Candies Collections
                  </h4>
              </div>
          </div>
          <div className=" mb-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="countUp-item">
                  <h2 className="header d-flex align-items-center justify-content-center">
                  <CountUp  enableScrollSpy end={14} duration={5}></CountUp>
                  </h2>
                  <h4 className="subheader">
                  Years of Experience
                  </h4>
              </div>
          </div>
          <div className="mb-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="countUp-item">
                  <h2 className="header d-flex align-items-center justify-content-center">
                  <CountUp  enableScrollSpy end={80} duration={5}></CountUp>
                  </h2>
                  <h4 className="subheader">
                  Creative Pastry Chefs

                  </h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Counter