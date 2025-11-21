import React from 'react'
import { Link } from 'react-router-dom';
import './ImageMarquee.css';




const slides = [
    {
        title: 'iOS 26 now available',
        subtitle: 'How to download, eligibility, features',
        description: 'Liquid Glass finally comes to your iPhone',
        image: '/images/samsug.jpg',
        buttonText: 'Read Now',
        link: '/updates/ios26'
    },
    {
        title: 'Pixel 9a 5G Launch',
        subtitle: 'Experience blazing speed and AI features',
        description: 'Now available with ₹5,000 off',
        image: '/images/pixel9.jpg',
        buttonText: 'Explore',
        link: '/products/pixel3a'
    },
    {
        title: 'QLED TVs Mega Sale',
        subtitle: 'Starting at ₹4,490*',
        description: 'Bank offers and exchange benefits',
        image: '/images/oppo.png',
        buttonText: 'Shop Now',
        link: '/products/qled'
    },
    {
        title: 'Bestselling Laptops',
        subtitle: 'Smart performance for every need',
        description: 'Starting at ₹23,990*',
        image: '/images/realme.jpg',
        buttonText: 'Browse',
        link: '/products/laptops'
    }
];



function DeviceDetails() {
    return (

            <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#promoCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="promo-slide d-flex align-items-center justify-content-between">
                                <div className="promo-text">
                                    <h2>{slide.title}</h2>
                                    <h5>{slide.subtitle}</h5>
                                    <p>{slide.description}</p>
                                    <Link to={slide.link} className="btn btn-success">
                                        {slide.buttonText}
                                    </Link>
                                </div>
                                <div className="promo-image">
                                    <img src={slide.image} alt={slide.title} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default DeviceDetails