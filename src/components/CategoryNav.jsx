
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faMobileScreenButton,faTv,faLaptop,faWind,faHeadphones,faPerson} from '@fortawesome/free-solid-svg-icons';

const categories = [
  { label: 'All Products', icon: faCartShopping, path: '/allproducts' },
  { label: 'Mobiles', icon: faMobileScreenButton, path: '/mobiles' },
  { label: 'Televisions', icon: faTv, path: '/tv' },
  { label: 'Laptops', icon: faLaptop, path: '/laptop' },
  { label: 'Air Purifiers', icon: faWind, path: '/airpurifiers' },
  { label: 'Headphones & Earphones', icon: faHeadphones, path: '/headphone' }, 
  { label: 'Grooming', icon: faPerson, path: '/grooming' },
];

function CategoryNav() {
  return (
    <div className="category-nav w-100 d-flex justify-content-center align-items-center m-3 rounded me-5 ms-5">

        
      {categories.map(({ label, icon, path, highlight }) => (
        <Link to={path} className={`category-item ${highlight ? 'highlight' : ''}`} key={label}>
          <FontAwesomeIcon icon={icon} className="category-icon" />
          <span className="category-label">{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default CategoryNav;