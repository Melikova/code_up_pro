"use clieent";

import { useEffect } from "react";

export default function About({ about }) {
  useEffect(() => {
    const loadMoreParagraph = () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");

      if (showMoreItems.length > 0) {
        showMoreItems.forEach((item) => {
          const showMoreBtn = item.querySelector(".btn-show-more-decs");
          const hideBtn = item.querySelector(".btn-hide-decs");
          const paragraph = item.querySelector(".showmore-paragraph");

          if (showMoreBtn && hideBtn && paragraph) {
            // Show more paragraph
            showMoreBtn.addEventListener("click", function () {
              paragraph.style.height = paragraph.scrollHeight + "px";
              hideBtn.style.display = "inline-block";
              showMoreBtn.style.display = "none";
            });

            // Hide paragraph
            hideBtn.addEventListener("click", function () {
              paragraph.style.height = "0px";
              showMoreBtn.style.display = "inline-block";
              hideBtn.style.display = "none";
            });
          }
        });
      }
    };

    loadMoreParagraph();

    // Cleanup event listeners when the component unmounts
    return () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");
      showMoreItems.forEach((item) => {
        const showMoreBtn = item.querySelector(".btn-show-more-decs");
        const hideBtn = item.querySelector(".btn-hide-decs");

        if (showMoreBtn && hideBtn) {
          showMoreBtn.removeEventListener("click", function () {});
          hideBtn.removeEventListener("click", function () {});
        }
      });
    };
  }, []);

  return (
    <>
      <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        About This Course
      </h2>
      <p className="fw-4 fs-15">
        Join us in this comprehensive course designed to take you from an absolute beginner in API testing to mastering automation with Postman and integrating it with GitHub Actions for Continuous Integration (CI) pipelines. This course will guide you through all the necessary steps, tools, and techniques to ensure your API testing process is efficient, automated, and integrated into modern DevOps workflows.
        <br /><br />
      </p>
      <div
        className="showmore-paragraph"
        style={{
          display: "block",
          height: "0px",
          overflow: "hidden",
          transition: "0.4s",
        }}
      >
        <p className="fw-4 fs-15">
        {about}
        </p>
      </div>
      <div className="more-text">
        <p className="btn-show-more-decs fw-5">
          Show More <i className="icon-arrow-bottom" />
        </p>
        <p className="btn-hide-decs fw-5 hidden">
          Hide <i className="icon-arrow-top" />
        </p>
      </div>
    </>
  );
}
