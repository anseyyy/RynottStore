import React from 'react'
import './ImageMarquee.css';


const cards = [
    { img: '/images/offer1.jpg' },
    { img: '/images/offer2.jpg' },
    { img: '/images/offer3.jpg' },
    { img: '/images/offer4.jpg' },
    { img: '/images/offer5.jpg' },
    { img: '/images/offer6.jpg' }
];


function BankOffers() {
    return (
        <div className="marquee-wrapper  w-100 d-flex flex-column justify-content-center align-items-center m-3 rounded me-5 ms-5">

            
            <h5 className="fw-bold mb-3 text-white">Exciting Bank Offers For You</h5>

            <div className="marquee-track">
                {cards.map((card, index) => (
                    <div className="marquee-card" key={index}>
                        <img src={card.img} alt={card.label} loading="lazy" />
                    </div>
                ))}

                
                {cards.map((card, index) => (
                    <div className="marquee-card" key={`copy-${index}`}>
                        <img src={card.img} alt={card.label} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BankOffers