import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Courses from "@/components/courses/Courses";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Courses || CodeUp pro",
  description: "CodeUp Pro",
};
export default function CoursesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">
        <Header />
        <div className="main-content pt-0">
          <Courses />
        </div>
        <Footer parentClass="footer has-border-top" />
      </div>
    </>
  );
}
