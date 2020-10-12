import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { get } from "../api";

export default function ListCapsules() {
  const [capsules, setCapsules] = useState([]);
  useEffect(() => {
    get("capsules")
      .then((res) => {
        setCapsules(res.data);
      })
      .catch((err) => {
        console.log("Damn! Error...", err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary-dark-sky h-100vh-exact position-relative d-flex flex-column">
        <p className="text-white border-bottom border-white mb-4 mt-5 ml-4 mr-4">ALL CAPSULES</p>
        <div className="card-group mt-5">
          {capsules.map((item) => (
            <div
              className="card-deck card-columns col-auto mb-5"
              style={{ width: "25em" }}
              key={item.capsule_serial}

            >
              <div className="container-fluid">
                <div
                  className="card special-card bg-transparent text-white border border-white"
                >
                  <div className="card-body">
                    <h5 className="card-title border-bottom border-white text-uppercase">
                      {item.capsule_id}
                    </h5>
                    <p className="card-text">{item.details}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <p className="card-text">
                      <small className="text-white">
                        Capsule status: <span className="text-danger-custom">{item.status}</span>
                      </small>
                    </p>
                      <a href="/" className="text-white">See more</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
