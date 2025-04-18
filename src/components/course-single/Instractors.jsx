import React from "react";

export default function Instractors({courseItem}) {
  return (
    <>
      {" "}
      <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        Instructor
      </h2>
      <div className="instructors-item style-2">
        <div className="image-wrapper">
          <img
            className="lazyload"
            data-src={courseItem.author_avatar}
            alt=""
            src={courseItem.author_avatar}
            width={520}
            height={521}
          />
        </div>
        <div className="entry-content">
          <h5 className="entry-title">
            <a href="#">{courseItem.author}</a>
          </h5>
          <p className="short-description">Professional QA Engineer</p>
          <p className="description">
          {courseItem.author_about}
          </p>
          <ul className="tf-social-icon flex items-center gap-10">
            <li>
              <a href={courseItem.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="flaticon-linkedin-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
