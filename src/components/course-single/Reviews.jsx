import React from "react";

export default function Reviews({reviews}) {
  const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5);
  
  return (
    <>
      <div className="review-title flex justify-between items-center">
        <div className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
          Review
        </div>
      </div>
      <div>
      {shuffledReviews.slice(0, 2).map((reviews, index) => (
        <div className="review-item" key={index}>
          <div className="avatar">
            <img
              className=" ls-is-cached lazyloaded"
              data-src={reviews.image}
              alt=""
              src={reviews.image}
              width={101}
              height={100}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="comment-box">
            <h5 className="author-name">
              {reviews.author} 
            </h5>
            <div className="ratings">
              <div className="total">{reviews.date}</div>
              <span className="tf-social-icon">
                <a href={reviews.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="flaticon-linkedin-1" />
                </a>
              </span>
            </div>
            <p className="comment">
            {reviews.text}
            </p>
          </div>
        </div>
      ))}
      </div>
      {/* <a href="#" className="tf-btn style-third w-100">
        View More Reviews
        <i className="icon-arrow-top-right" />
      </a> */}
    </>
  );
}
