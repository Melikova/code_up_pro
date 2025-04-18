import React from "react";
import { Link } from "react-router-dom";
import { courses } from "@/data/courses";


export default function Courses() { 
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    let truncated = text.slice(0, limit); 
    let lastSpaceIndex = truncated.lastIndexOf(" "); // Find last space
    return truncated.slice(0, lastSpaceIndex) + " ...";
  };
  return (
    <section className="flat-about ">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="heading-content ">
              <div className="widget box-sub-tag wow fadeInUp">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Best Quality</p>
                </div>
              </div>
              <h2 className="font-cardo wow fadeInUp">
                CodeUp Pro: Your gateway to mastering Quality Assurance Engineering, designed for learners ready to excel in software testing.
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="content-right wow fadeInUp" data-wow-delay="0.1s">
              <p>
              Discover a world of opportunities with expertly designed Quality Assurance Engineering courses that empower you to succeed.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "90px" }}>
          <div className="col-12">
            <div className="list grid-list-items-4">
              {courses.slice(0, 4).map((elm, i) => (
                <div
                  key={i}
                  className="course-item style-2 has-bg hover-img h240 wow fadeInUp"
                  data-wow-delay={elm.wowDelay}
                >
                  <div className="features image-wrap">
                    <img
                      className="lazyload"
                      alt=""
                      src={elm.imgSrc}
                      width={640}
                      height={481}
                    />
                  </div>
                  <div className="content">
                    <h5 className="fw-5 line-clamp-2">
                      {(elm.id === 1 || elm.id === 4) ? (
                        <Link to={`/course-single/${elm.id}`}>
                          {elm.title}
                        </Link>
                      ) : (
                        elm.title
                      )}
                    </h5>
                    <div className="ratings">
                      <div className="number">{truncateText(elm.about, 190)}</div>
                    </div>
                    <div className="author">
                      By: 
                      <a href="/instructor-list" className="author">
                        {elm.author}
                      </a>
                    </div>
                    <div className="bottom">
                      <div className="h5 price fw-5">{elm.currency + " " + elm.discounted_price}</div>
                      {(elm.id === 1 || elm.id === 4) ? (
                        <Link
                          to={`/course-single/${elm.id}`}
                          className="tf-btn-arrow"
                        >
                          <span className="fw-5 ">More Info</span>
                          <i className="icon-arrow-top-right" />
                        </Link>
                        ) : (
                          <span className="fw-5 ">Soon</span>
                      )}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
