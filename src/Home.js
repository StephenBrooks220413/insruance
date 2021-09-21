import React from "react";

export default function Home() {
    return (
      <>
        <div className="main">
          <div className="container text-center">
            <h1 className="display-1 text-white">
              Affordable Insurance
            </h1>
            <a href="mailto:somemail@mail.com" className="btn btn-lg btn-info">MORE INFO</a>
          </div>
        </div>
        <div className="space">
          <div className="container mt-5 mb-5 text-center">
            <div className="row text-content">
              <div className="col-md mt-3">
                <div className="row">
                  <div className="col-md p-3 mt-3">
                    <h3 class="display">Auto Insurance</h3>
                    Affordable Insurance made 
                    for the American family. 
                    Simple and effective for 
                    every problem.
                  </div>
                  <div className="col-md p-3 mt-3">
                    <h3 class="display">Life / Health Insurance</h3>
                    Unexpected happens everyday, and something will 
                    make an impact. A policy can insure that you 
                    are prepared.
                  </div>
                  <div className="col-md p-3 mt-3">
                    <h3 class="display">Home / Renter Insurance</h3>
                    Protect your assets with a 
                    policy that keeps checking 
                    on your family.
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md text-start">
                <h1 className="display-4">Analysis</h1>
                <p className="text-content">
                Checking your coverages is a matter of knowing your policy and 
                what you have. When is comes time to use your insurance, don't 
                you want the peace of mind and know exactly what you get from it?
                Contact me today for a free policy review and a quote.
                </p>
                <a href="mailto:krammer439298@gmail.com" className="btn btn-info btn-lg">MORE INFO</a>
              </div>
              <div className="col-md mt-3">
              <img 
                  src="https://www.forbes.com/advisor/wp-content/uploads/2021/07/Insurance.png" 
                  className="img-fluid" 
                  alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-3 mb-5">
          <br />
          <h1 className="display-3">Making The Choice
          <img src="https://www.miltonps.org/application/files/8015/7021/3773/calendar.jpg" className="img-book" alt="calendar" />
          </h1>
          <hr className="hr"/>
          <p className="text-content">
            Making a choice has always been a family matter, and always 
            in need of a licensed professional to help with those choices.
            Ther are a number of ways to buy policies today without speaking
            to an agent for sure, but the agent would help with an analysis 
            and show  options that you may not have realized.
          </p>
          <a href="https://calendly.com/stephenbrooks/15min" className="btn btn-info btn-lg">Book With Me</a>

          <br /><br />
        </div>
      </>
    );
}

