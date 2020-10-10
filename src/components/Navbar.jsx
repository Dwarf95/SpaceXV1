import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-dark-sky text-white border-bottom border-white">
      <a className="navbar-brand text-white" href="/">
        Navbar w/ text
      </a>
      <button
        className="navbar-toggler text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <span className="navbar-text">Navbar text with an inline element</span>
      </div>
    </nav>
  );
}
