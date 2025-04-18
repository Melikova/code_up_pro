import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Instructors from "@/components/instructors/Instructors";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Student List || CodeUp Pro",
  description: "CodeUp Pro",
};
export default function StudentListPage() {
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
                  
                  <h2 className="font-cardo fw-7">Our Students</h2>
                  <h6>
                  Meet Our Students: Skilled Professionals and Future Experts in QA and Software Testing
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
        <div className="tf-container">
        <div className="row align-items-center">
              {/* Left Column - Certificate Image */}
              <div className="col-md-6 text-center" style={{paddingTop: "30px", paddingBottom: "30px"}}>
                <img 
                  src="/images/certificate.png" 
                  alt="Certificate Preview" 
                  className="img-fluid rounded shadow"
                  width={500}
                />
              </div>

              {/* Right Column - Info Text */}
              <div className="col-md-6" style={{paddingTop: "30px", paddingBottom: "30px"}}>
                <h3 style={{marginBottom: "20px"}}>Digital Certification in Progress</h3>
                <p>
                  Our team is actively working on developing digital certifications for our students. 
                  This feature will allow you to showcase your achievements with a verified certificate, 
                  which can be shared via QR code on your CV and LinkedIn. Stay tuned for updates!
                </p>
              </div>
            </div>
        </div>
        </div>
        <Footer parentClass="footer has-border-top" />
      </div>
    </>
  );
}
