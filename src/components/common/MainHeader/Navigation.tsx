import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navList">
        <li className="navItem active">
          <Link className="navLink" aria-current="page" href="/">
            Home
          </Link>
        </li>

        <li className="navItem">
          <Link className="navLink active" aria-current="page" href="#">
            Destications
          </Link>
        </li>

        <li className="navItem dropdown">
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
        </li>

        <li className="navItem">
          <Link className="navLink" href="#">
            Contact
          </Link>
        </li>

        <li className="navItem">
          <Link className="navLink" href="#">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
