import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-dark-sky text-white">
      <a className="navbar-brand text-white" href="/">
        SpaceFun
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
            <a className="nav-link text-white" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/capsules">
              Capsules
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Cores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Landing Pads
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Missions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Payloads
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Rockets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/spacex">
              SpaceX
            </a>
          </li>
        </ul>
        <h6 className="text-white position-creds">Created by <a href="https://www.linkedin.com/in/lazar-stankovic-44a199177/" className="text-danger-custom">Lazar Stanković</a> &copy; 2020</h6>
      </div>
    </nav>
  );
}
