"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <li className={`navItem ${pathname === "/" ? "active" : ""}`} onClick={onNavigate}>
          <Link className="navLink" aria-current="page" href="/">
            Home
          </Link>
        </li>

        <li className={`navItem ${pathname === "/hotels" ? "active" : ""}`} onClick={onNavigate}>
          <Link className="navLink" aria-current="page" href="/hotels">
            Hotels
          </Link>
        </li>

        <li className={`navItem ${pathname === "/packages" ? "active" : ""}`} onClick={onNavigate}>
          <Link className="navLink" aria-current="page" href="/packages">
            Packages
          </Link>
        </li>

        <li
          className={`navItem ${pathname === "/destinations" ? "active" : ""}`}
          onClick={onNavigate}
        >
          <Link className="navLink" aria-current="page" href="/destinations">
            Destinations
          </Link>
        </li>

        <li className={`navItem ${pathname === "/tours" ? "active" : ""}`} onClick={onNavigate}>
          <Link className="navLink" aria-current="page" href="/tours">
            Tours
          </Link>
        </li>

        <li className="navItem">
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
              <Link className="navLink mb-2" aria-current="page" href="/contact">
                Transfer
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" aria-current="page" href="/contact">
                Car Rental
              </Link>
            </li>
          </ul>
        </li>

        <li className={`navItem ${pathname === "/contact" ? "active" : ""}`} onClick={onNavigate}>
          <Link className="navLink" aria-current="page" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
