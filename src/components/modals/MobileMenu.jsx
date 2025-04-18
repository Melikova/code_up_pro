import { menuItems } from "@/data/menu";
import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function MobileMenu() {
  const { pathname } = useLocation();
  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href != "#") {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href != "#") {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <>
      {/* Offcanvas for Mobile Menu */}
      <div
        className="offcanvas offcanvas-start mobile-menu"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            {[...menuItems].map((item, index) => (
              <li
                className={`list-group-item ${
                  item.noActive ? "disabled-active-menu" : ""
                }`}
                key={index}
              >
                {item.subItems ? (
                  <>
                    <a
                      href="#!"
                      className={`submenu-toggle collapsed ${
                        isMenuActive(item) ? "activeMenu" : ""
                      }`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#menu${index}`}
                    >
                      {item.title}
                    </a>
                    <ul id={`menu${index}`} className="list-group collapse">
                      {item.subItems.map((subItem, subIndex) => (
                        <li className="list-group-item" key={subIndex}>
                          {subItem.subItems ? (
                            <>
                              <a
                                href="#!"
                                className={`submenu-toggle collapsed  ${
                                  isMenuActive(subItem) ? "activeMenu" : ""
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#submenu${index}-${subIndex}`}
                              >
                                {subItem.title}
                              </a>
                              <ul
                                id={`submenu${index}-${subIndex}`}
                                className="list-group collapse"
                              >
                                {subItem.subItems.map(
                                  (subSubItem, subSubIndex) => (
                                    <li
                                      className="list-group-item"
                                      key={subSubIndex}
                                    >
                                      <Link
                                        className={` nav-link-mobile  ${
                                          isMenuActive(subSubItem)
                                            ? "activeMenu"
                                            : ""
                                        }`}
                                        to={subSubItem.href}
                                      >
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </>
                          ) : (
                            <Link
                              className={` nav-link-mobile  ${
                                isMenuActive(subItem) ? "activeMenu" : ""
                              }`}
                              to={subItem.href}
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    className={`nav-link-mobile   ${
                      isMenuActive(item) ? "activeMenu" : ""
                    }`}
                    to={item.href}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
