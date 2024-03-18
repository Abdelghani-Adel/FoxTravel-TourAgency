"use client";

import { loaderActions } from "@/app/_redux/slices/loaderSlice";
import { useAppDispatch } from "@/app/_redux/store";
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
  // {
  //   title: "About",
  //   path: "/about",
  // },
];

type props = {
  onItemClick?: () => void;
};

const Navigation = (props: props) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const onNavigate = () => {
    dispatch(loaderActions.showLoadingOverlay());
    props.onItemClick && props.onItemClick();
  };

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
      </ul>
    </nav>
  );
};

export default Navigation;
