"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigate from "../../ui/Navigate";

type props = {
  onItemClick?: () => void;
};

const Navigation = (props: props) => {
  const pathname = usePathname();
  const onNavigate = () => {
    props.onItemClick && props.onItemClick();
  };

  return (
    <nav className="navigation">
      <ul className="navList">
        <li
          className={`navItem ${pathname === "/" ? "active" : ""}`}
          onClick={onNavigate}
        >
          <Navigate className="navLink" aria-current="page" href="/">
            Home
          </Navigate>
        </li>

        <li
          className={`navItem ${pathname === "/hotels" ? "active" : ""}`}
          onClick={onNavigate}
        >
          <Navigate className="navLink" aria-current="page" href="/hotels">
            Hotels
          </Navigate>
        </li>

        <li
          className={`navItem ${pathname === "/packages" ? "active" : ""}`}
          onClick={onNavigate}
        >
          <Navigate className="navLink" aria-current="page" href="/packages">
            Packages
          </Navigate>
        </li>

        <li
          className={`navItem ${pathname === "/tours" ? "active" : ""}`}
          onClick={onNavigate}
        >
          <Navigate className="navLink" aria-current="page" href="/tours">
            Tours
          </Navigate>
        </li>

        {/* <li className="navItem">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Transportation
          </a>
          <ul className="dropdown-menu p-2 bgDarkGray">
            <li className="navItem">
              <Navigate className="navLink mb-2" aria-current="page" href="/contact">
                Transfer
              </Navigate>
            </li>
            <li className="navItem">
              <Navigate className="navLink" aria-current="page" href="/contact">
                Car Rental
              </Navigate>
            </li>
          </ul>
        </li> */}

        <li
          className={`navItem ${pathname === "/contact" ? "active" : ""}`}
          onClick={onNavigate}
        >
          <Navigate className="navLink" aria-current="page" href="/contact">
            Contact
          </Navigate>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
