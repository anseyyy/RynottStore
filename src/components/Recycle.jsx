import React from 'react'
import './ImageMarquee.css';
import { Link } from 'react-router-dom';


function Recycle() {
  return (
            <div className="marquee-wrapper w-100 d-flex flex-column justify-content-center align-items-center m-3 rounded me-5 ms-5">
    
                <div className=' recycle'>
                    <Link to={'/'} ><img className="recycle" src="./images/ewaste.png" alt="" /></Link>
                </div>
    
    
            </div>
        )
    }
    
export default Recycle