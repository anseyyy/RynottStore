import React from 'react'
import './ImageMarquee.css';

function LatestLanch() {
    return (
        <div className="marquee-wrapper w-100 d-flex flex-column justify-content-center align-items-center m-3 rounded me-5 ms-5">


            <h5 className="fw-bold mb-3 text-white">Latest Launches</h5>

            <div className="latest-launch-container">
                <div className="latest-card">
                    <img src="/images/oneplus15.png" alt="Latest Launch 1" />
                </div>
                <div className="latest-card">
                    <img src="/images/oppox9.png" alt="Latest Launch 2" />
                </div>
            </div>


        </div>
    )
}

export default LatestLanch