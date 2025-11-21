import React from 'react';
import './ImageMarquee.css';

const hotItems = [
  {
    title: 'Pixel 9a 5G',
    image: '/images/pixel9a.png',
    price: '₹49,999',
    offerPrice: '₹44,999*',
    note: '*Inclusive of all Offers'
  },
  {
    title: 'QLED TVs',
    image: '/images/tv.png',
    price: 'Starting at ₹4,490*',
    offerPrice: '',
    note: '*Bank Offers Available'
  },
  {
    title: 'Bestselling Laptops',
    image: '/images/laptop.png',
    price: 'Starting at ₹23,990*',
    offerPrice: '',
    note: '*Inclusive of all Offers'
  },
  {
    title: 'Single Door Refrigerators',
    image: '/images/fridge.png',
    price: 'Starting at ₹4,090*',
    offerPrice: '',
    note: '*Additional Exchange Benefits'
  }
];

function WhatsHot() {
  return (
    <div className="whats-hot-container w-100 d-flex flex-column justify-content-center align-items-center m-3 rounded me-5 ms-5">
      <h4 className="section-title">What's Hot</h4>
      <div className="hot-items-grid">
        {hotItems.map((item, index) => (
          <div className="hot-card" key={index}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <h5 className="hot-title">{item.title}</h5>
            <p className="hot-price">
              {item.offerPrice ? (
                <>
                  <span className="strike">{item.price}</span> <span className="highlight">{item.offerPrice}</span>
                </>
              ) : (
                item.price
              )}
            </p>
            <p className="hot-note">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatsHot;