"use client";

import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const nav = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Hotels",
    path: "/hotels",
  },
  {
    title: "Packages",
    path: "/packages",
  },
  {
    title: "Destinations",
    path: "/destinations",
  },
  {
    title: "Tours",
    path: "/tours",
  },
  // {
  //   title: "Flights",
  //   path: "/flights",
  // },
  {
    title: "Cars",
    path: "/cars",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "About",
    path: "/about",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const onNavigate = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <nav className="navigation">
      <ul className="navList">
        {nav.map((link, i) => (
          <li
            key={i}
            className={`navItem ${pathname === link.path ? "active" : ""}`}
            onClick={onNavigate}
          >
            <Link className="navLink" aria-current="page" href={link.path}>
              {link.title}
            </Link>
          </li>
        ))}

        {/* <li className="navItem dropdown">
          <button
            className="nav-link dropdown-toggle"
            id="categories"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="categories">
            <li>
              <Link className="dropdown-item" href="#">
                Hotel
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Tour
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Activity
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Holiday Rentals
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Car
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Cruise
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Flights
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
