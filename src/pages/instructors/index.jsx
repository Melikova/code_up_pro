import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Instructors from "@/components/instructors/Instructors";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Instructor List || CodeUp Pro",
  description: "CodeUp Pro",
};
export default function InstructorListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">

        <Header />
        <div className="page-title basic">
          <div className="tf-container full">
            <div className="row">
              <div className="col-12">
                <div className="content text-center">
                  
                  <h2 className="font-cardo fw-7">Our Instructors</h2>
                  <h6>
                  Unlock Expert-Level Quality Assurance Training with Guidance from Professionals in the QA Field
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <Instructors />
        </div>
        <Footer parentClass="footer has-border-top" />
      </div>
    </>
  );
}
