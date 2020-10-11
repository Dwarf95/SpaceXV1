import React, { useEffect, useState  } from 'react'
import raketa from './assets/images/raketa_bg.png';
import Navbar from './Navbar';
import { get } from './api';

export default function Home() {
    const [company, setCompany] = useState(null);
    useEffect(() => {
        get('info').then((res) =>{
            setCompany(res.data);
        }).catch((err) =>{
            console.log("Damn! Error...", err);
        })
    }, [])
    return (
        <>
        <Navbar />
        <div className="container-fluid bg-primary-dark-sky h-100vh d-flex justify-content-center align-items-center position-relative" >
            <img src={raketa} alt="spacex" width="50%" className="home-image position-absolute"/>
            <div className="d-flex flex-column justify-content-center align-items-center position-absolute main-counter-wrapper">
                <h5 className="text-white f-size-3">SPACEFUN</h5>
                <span className="text-white">“I... a universe of atoms, an atom in the universe.”</span>
            </div>
        </div>
        </>
    )
}
