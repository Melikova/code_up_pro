import React from "react";

export default function Learn() {
  return (
    <>
      {" "}
      <h2 className="learn-head text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        What you'll learn
      </h2>
      <div className="learn-inner ">
        <ul className="learn-list">
          <li className="item">
            <i className="flaticon-check" />
            Introduction to APIs and API Testing
          </li>
          <li className="item">
            <i className="flaticon-check" />
            Getting Started with Postman
          </li>
          <li className="item">
            <i className="flaticon-check" />
            Creating Automated API Tests
          </li>
          <li className="item">
            <i className="flaticon-check" />
            Postman Collections and Environments
          </li>
        </ul>
        <ul className="learn-list">
          <li className="item">
            <i className="flaticon-check" />
            Advanced Postman Features
          </li>
          <li className="item">
            <i className="flaticon-check" />
            Integrating Postman with GitHub Actions:
          </li>
          <li className="item">
            <i className="flaticon-check" />
            Real-World Project
          </li>
          <li className="item">
            <i className="flaticon-check" />
            Earn Certification that is Proof of your Competence
          </li>
        </ul>
      </div>
    </>
  );
}
