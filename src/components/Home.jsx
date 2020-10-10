import React from 'react'
import raketa from './assets/images/raketa_bg.png';
import Navbar from './Navbar';

export default function Home() {
    return (
        <>
        <Navbar />
        <div className="container-fluid bg-primary-dark-sky h-100vh d-flex justify-content-center align-items-center position-relative" >
            <img src={raketa} alt="spacex" width="50%" className="home-image position-absolute"/>
            <div className="d-flex flex-column justify-content-center align-items-center position-absolute main-counter-wrapper">
                <h5 className="text-white f-size-3">NEXT LAUNCH</h5>
                <h1 className="text-white f-size-5">00:00:00</h1>
            </div>
        </div>
        </>
    )
}
