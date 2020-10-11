import React from "react";

export default function NotFound() {
  return (
    <div className="container-fluid bg-primary-dark-sky h-100vh-exact d-flex flex-column justify-content-center align-items-center position-relative">
      <div class="scene">
        <div class="wrapper">
          <div class="globe">
            <span class="ring"></span>
            <span class="ring"></span>
            <span class="ring"></span>
            <span class="ring"></span>
            <span class="ring"></span>
            <span class="ring"></span>
            <span class="ring"></span>

            <span class="ring"></span>
            <span class="ring"></span>
            <span class="ring"></span>
          </div>
        </div>
      </div>
      <h3 className="text-danger-custom">DEFCON 1</h3>
      <h4 className="text-white">YOU SEEM TO BE LOST, CAPTAIN</h4>
      <a className="btn btn-outline-light mt-4" href="/">SAFE ROUTE</a>
    </div>
  );
}
