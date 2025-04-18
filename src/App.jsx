import { useEffect } from "react";
import "./styles/styles.scss";
import "swiper/css/effect-fade";

import { tabs } from "@/utlis/tabs";

import MobileMenu from "@/components/modals/MobileMenu";
import BackToTop from "@/components/common/BackToTop";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollToToBehaviour";
import WOW from "./utlis/wow";
import CourseSinglePage from "./pages/course-single";
import InstructorListPage from "./pages/instructors";
import StudentListPage from "./pages/students";
import CoursesPage from "./pages/courses";
import PageNotFoundPage from "./pages/page-not-found";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
      // setTimeout(() => {
      //   import("../utlis/mmenu").then(() => {
      //     // Module is imported, you can access any exported functionality if
      //     new window.Mmenu(document.querySelector("#menu"));
      //   });
      // }, 200);
    }
  }, []);
  useEffect(() => {
    tabs();
    const collapseTitles = document.querySelectorAll(".tf-collapse-title");
    const collapseTitem = document.querySelectorAll(".tf-collapse-item");
    collapseTitem.forEach((elm) => {
      const content = elm.querySelector(".tf-collapse-content");
      if (elm.classList.contains("collapsed")) {
        content.style.height = "0px";
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });

    const clickHandler = function (event) {
      const parentItem = event.target.closest(".tf-collapse-item");
      const content = parentItem.querySelector(".tf-collapse-content");
      parentItem.classList.toggle("collapsed");

      if (parentItem.classList.contains("collapsed")) {
        content.style.transition = "0.5s";
        content.style.height = "0px";
      } else {
        content.style.transition = "0.5s";
        content.style.height = content.scrollHeight + "px";
      }
    };

    collapseTitles.forEach((title) => {
      title.addEventListener("click", clickHandler);
    });

    return () => {
      collapseTitles.forEach((title) => {
        title.removeEventListener("click", clickHandler);
      });
    };
  }, [pathname]);

  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (header) {
        if (currentScrollY > 250) {
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            header.style.top = "-100px";
          } else {
            // Scrolling up
            header.style.top = "-100px";
          }
        } else {
          // Below 250px
          header.style.top = "-100px";
        }

        lastScrollY.current = currentScrollY;
      }
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Dynamically import bootstrap when the route changes
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap:", err);
      });
  }, [pathname]); // Runs every time the route changes

  return (
    <>
        <Routes>
          <Route path="/"> 
            <Route index element={<CoursesPage />} />
            <Route path="course-single/:id" element={<CourseSinglePage />}/>
            <Route path="instructor-list" element={<InstructorListPage />} />
            <Route path="student-list" element={<StudentListPage />} />
            <Route path="page-not-found" element={<PageNotFoundPage />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Route>
        </Routes>
      <BackToTop />
      <MobileMenu />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
