import CourseSingle from "@/components/course-single/CourseSingle";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import { allCourses } from "@/data/courses";
import React from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "API Testing - Postman Automation || CodeUp Pro",
  description: "CodeUp Pro || API Testing - Postman Automation",
};
export default function CourseSinglePage1() {
  let params = useParams();
  const courseItem =
    allCourses.filter((elm) => elm.id == params.id)[0] || allCourses[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">
        <Header /> 
        <div className="main-content pt-0">
          <CourseSingle courseItem={courseItem} />
        </div>
        <Footer parentClass="footer has-border-top" />
      </div>
    </>
  );
}
