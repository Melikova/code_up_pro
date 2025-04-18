import React, { useState } from "react";
import { Link } from "react-router-dom";

import { instructors } from "@/data/instructors";
export default function Instructors() {
  const [sorted, setSorted] = useState(instructors);

  return (
    <>
      <div className="tf-spacing-10 pb-0">
        <div className="tf-container"></div>
      </div>
      <section className="section-instructor page-instructor tf-spacing-4 pt-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="grid-layout-4">
                {sorted.map((instructor, index) => (
                  <div
                    key={index}
                    className="instructors-item hover-img style-column wow fadeInUp"
                    data-wow-delay={instructor.delay}
                  >
                    <div className="image-wrap">
                      <img
                        className="lazyload"
                        data-src={instructor.avatar}
                        alt=""
                        src={instructor.avatar}
                        width={520}
                        height={521}
                      />
                    </div>
                    <div className="entry-content">
                      <h6 className="entry-title">
                          {instructor.name}
                      </h6>
                      <p className="short-description">
                        {instructor.description}
                      </p>
                      
                      <p className="description">
                        {instructor.about}
                      </p>
                      <div className="ratings">
                        <div className="number">
                        <ul className="tf-social-icon flex items-center gap-10">
                          <li style={{fontWeight: "800"}}>Contact via</li>
                          <li>
                            <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer">
                              <i className="flaticon-linkedin-1" />
                            </a>
                          </li>
                        </ul>
                        {/* <Link to={instructor.linkedin} target="_blank" rel="noopener noreferrer">
                          Contact via <i className="flaticon-linkedin-1" />
                        </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
