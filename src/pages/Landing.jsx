import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import CategoryNav from '../components/CategoryNav';
import BankOffers from '../components/BankOffers';
import LatestLanch from '../components/LatestLanch';
import Recycle from '../components/Recycle';
import WhatsHot from '../components/WhatHot';
import DeviceDetails from '../components/DeviceDetails';



function Landing() {
    return (
        <div>



            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="3000">
                        <Link to="/products/vivo">
                            <img src="/images/VivoX200FE.png" className="d-block w-100" alt="Vivo X200FE" />
                        </Link>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <Link to="/products/samsung">
                            <img src="/images/SamsungMonitors.png" className="d-block w-100" alt="Samsung Monitors" />
                        </Link>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <Link to="/products/oneplus">
                            <img src="/images/OneplusNeckbands.png" className="d-block w-100" alt="Oneplus Neckbands" />
                        </Link>
                    </div>



                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <div className='d-flex justify-content-center align-items-center '>
                <CategoryNav />
            </div>

            <div className='d-flex justify-content-center align-items-center '>
                <BankOffers />
            </div>

            <div className='d-flex justify-content-center align-items-center '>
                <LatestLanch />
            </div>

            <div className='d-flex justify-content-center align-items-center '>
                <Recycle />
            </div>

            <div className='d-flex justify-content-center align-items-center '>
                <WhatsHot />
            </div>




            <div>
                <DeviceDetails/>

            </div>



            




        </div>
    );
}

export default Landing;