import React, { useState } from "react";
import Learn from "./Learn";
import RequireMents from "./RequireMents";
import About from "./About";
import Instractors from "./Instractors";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";

export default function CourseSingle1({ courseItem }) {
  if (courseItem.id !== 1 && courseItem.id !== 4) {
    return (
      <section className="section-page-title page-title style-4">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <ul className="breadcrumbs breadcrumbs flex items-center justify-start gap-10 mb-60">
                  <li>
                    <Link to={`/`} className="flex">
                      <i className="icon-arrow-left" /> 
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`} className="flex">
                      Back to All Courses
                    </Link>
                  </li>
                </ul>
                <h2 className="font-cardo fw-7">{courseItem.title}</h2>
                <p className="except">This course is in the preparation stage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="section-page-title page-title style-4">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <ul className="breadcrumbs breadcrumbs flex items-center justify-start gap-10 mb-60">
                  <li>
                    <Link to={`/`} className="flex">
                      <i className="icon-arrow-left" /> 
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`} className="flex">
                      Back to All Courses
                    </Link>
                  </li>
                </ul>
                <h2 className="font-cardo fw-7">{courseItem.title}</h2>
                <p className="except">
                  Learn: API Testing | HTTP request methods | JSON | PostBot | Assertions | Postman CLI | Newman | CI/CD Pipeline | GitHub Actions
                </p>
                <div className="author-item">
                  <div className="author-item-img">
                    <img
                      alt=""
                      src={courseItem.author_avatar}
                      width={101}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <span className="text-1">By </span>
                    <a href="#">{courseItem.author}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-page-course">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-single-inner">
                <div className="page-desc show-more-desc-item">
                  <About about={courseItem.about_hidden} />
                </div>
                <div className="page-learn">
                  <Learn />
                </div>
                <div className="page-requirement">
                  <RequireMents />
                </div>
                <div className="page-instructor">
                  <Instractors courseItem={courseItem} />
                </div>
                <div className="review-wrap">
                  <Reviews reviews={courseItem.reviews}/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-course course-single-v1">
                <div className="widget-video">
                  <img
                    className="lazyload"
                    data-src={courseItem.imgSrc}
                    alt=""
                    src={courseItem.imgSrc}
                    width={520}
                    height={380}
                  />
                </div>
                <div className="sidebar-course-content">
                  <div className="course-price">
                    <div className="price">
                      <h3 className="fw-5">{courseItem.currency + " " + courseItem.discounted_price}</h3>
                      <h6 className="fs-15">{courseItem.currency + " " + courseItem.price}</h6>
                    </div>
                    <p className="sale-off">
                      {courseItem.price && courseItem.discounted_price
                        ? `${Math.round(((courseItem.price - courseItem.discounted_price) / courseItem.price) * 100)}% OFF`
                        : ""}</p>
                  </div>
                  <a className="tf-btn add-to-cart" href="#">
                    Download The Syllabus
                    <i className="icon-arrow-top-right" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" className="tf-btn buy-now" href="https://docs.google.com/forms/d/e/1FAIpQLScf_I168nQWGYO2Ou7uP1Pchtn1TyfLtnedbrXnQFJ1hX0znw/viewform?usp=sharing">
                  Reserve Your Spot
                    <i className="icon-arrow-top-right" />
                  </a>
                  <h6 className="course-text">3-Day Money-Back Guarantee</h6>
                </div>
                <div className="course-social">
                  <h6 className="fw-5">for more info Contact Us</h6> 
                  <ul>
                    <li className="course-social-item">
                      <a href="https://wa.me/994553554355" target="_blank" rel="noopener noreferrer">
                        <i className="flaticon-send" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="https://www.instagram.com/code_up_pro/" target="_blank" rel="noopener noreferrer">
                        <i className="flaticon-instagram" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="https://www.linkedin.com/in/mhmelikova/" target="_blank" rel="noopener noreferrer">
                        <i className="flaticon-linkedin-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
