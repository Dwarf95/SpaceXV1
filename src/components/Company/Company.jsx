import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { get } from "../api";
import elonmusk from "../assets/images/ElonMusk.jpg";

export default function Company() {
  const [company, setCompany] = useState([]);
  const [address, setAddress] = useState([]);
  const [website, setWebsite] = useState([]);
  const [flickr, setFlickr] = useState([]);
  const [twitter, setTwitter] = useState([]);
  const [elonTwitter, setElonTwitter] = useState([]);
  useEffect(() => {
    get("info")
      .then((res) => {
        setCompany(res.data);
        const address = [
          res.data.headquarters.address,
          res.data.headquarters.city,
          res.data.headquarters.state,
        ];
        const website = [res.data.links.website];
        const flickr = [res.data.links.flickr];
        const twitter = [res.data.links.twitter];
        const elonTwitter = [res.data.links.elon_twitter];
        setAddress(address.join(", "));
        setWebsite(website);
        setFlickr(flickr);
        setTwitter(twitter);
        setElonTwitter(elonTwitter);
      })
      .catch((err) => {
        console.log("Damn! Error...", err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="jumbotron jumbo-img mb-0"></div>
      <div className="container-fluid bg-primary-dark-sky h-100vh-exact position-relative d-flex flex-column">
        <div className="container d-flex flex-column flex-lg-row flex-md-row justify-content-between align-items-center mt-5 mb-5 pt-5 pb-5 border-bottom border-white">
          <div className="w-45 d-flex flex-column">
            <p className="text-white text-left">{company.summary}</p>
            <p className="text-white text-left">
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span className="ml-2">{address}</span>
            </p>
            <p className="text-white text-left">
              Visit {company.name} website:{" "}
              <a className="ml-2 text-danger-custom" href={website}>
                {company.name}
              </a>
            </p>
            <div className="d-flex">
              <span className="min-span-width text-white">Founder:</span>
              <p className="text-white text-left">{company.founder}</p>
            </div>
            <div className="d-flex">
              <span className="min-span-width text-white">CEO:</span>
              <p className="text-white text-left">{company.ceo}</p>
            </div>
            <div className="d-flex">
              <span className="min-span-width text-white">CTO:</span>
              <p className="text-white text-left">{company.cto}</p>
            </div>
            <div className="d-flex">
              <span className="min-span-width text-white">COO:</span>
              <p className="text-white text-left">{company.coo}</p>
            </div>

            <div className="d-flex">
              <span className="min-span-width text-white">CTO PROPULSION:</span>
              <p className="text-white text-left">{company.cto_propulsion}</p>
            </div>

            <div className="d-flex flex-row">
              <p className="text-white text-left">
                <a
                  href={flickr}
                  className="text-white"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Flickr"
                >
                  <i className="fab fa-flickr f-size-2"></i>
                </a>
              </p>
              <p className="text-white text-left ml-3">
                <a
                  href={twitter}
                  className="text-white"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Twitter"
                >
                  <i className="fab fa-twitter-square f-size-2"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center position-relative h-100 w-45">
            <img
              src={elonmusk}
              className="elon-img"
              data-toggle="tooltip"
              data-placement="left"
              title="By Duncan.Hull - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=76353307"
              alt="elon"
              width="70%"
            />
            <div className="d-flex flex-column follow-elon align-items-center mt-3">
              <h4 className="text-white">Follow Elon</h4>
              <a
                href={elonTwitter}
                className="text-white"
                data-toggle="tooltip"
                data-placement="right"
                title="Elon Musk"
              >
                <i className="fab fa-twitter-square f-size-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column flex-lg-row flex-md-row justify-content-between align-items-center  mb-5 pt-5 pb-5">
          <div className="w-45 d-flex flex-column">
            <div className="d-flex">
                <span className="min-span-width text-white">Since:</span>
                <p className="text-white text-left">{company.founded}.</p>
              </div>
              <div className="d-flex">
                <span className="min-span-width text-white">No. of employees:</span>
                <p className="text-white text-left">{company.employees}</p>
              </div>
              <div className="d-flex">
                <span className="min-span-width text-white">No. of vehicles:</span>
                <p className="text-white text-left">{company.vehicles}</p>
              </div>
              <div className="d-flex">
                <span className="min-span-width text-white">No. of launch sites:</span>
                <p className="text-white text-left">{company.launch_sites}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
