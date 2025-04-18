import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header id="header_main" className="header">
      <div className="header-inner">
        <div className="header-inner-wrap">
          <div className="header-left flex-grow">
            <a
              className="mobile-nav-toggler mobile-button d-lg-none flex"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            />
            <div id="site-logo">
              <Link to={`/`} rel="home">
              <span style={{fontWeight: "800", fontSize: "22px"}}>Code<span style={{color: "#E27447"}}>Up</span> Pro </span>
                {/* <img
                  id="logo-header"
                  alt=""
                  src="/images/logo/logo.svg"
                  width={123}
                  height={36}
                /> */}
              </Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="main-menu">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            <a
              className="d-lg-none flex"
              href="#canvasSearch"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
            >
            </a>
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
