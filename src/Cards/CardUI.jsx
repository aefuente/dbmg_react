import React from 'react';
import img1 from '../assets/stock-photo-mountains-under-mist-in-the-morning-amazing-nature-scenery-form-kerala-god-s-own-country-tourism-1725825019.jpeg';
import './card-style.css';
const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="Image 1" className="card-img-top"/>
            </div>
        <div className="card-body text-dark">
            <h4 className="card-title">Card Title</h4>
            <p className ="card-text text-secondary">
                Some very subtle bullshit.
            </p>
            <a href="#" className="btn btn-outline-success"> Go Anywhere</a>
        </div>
        </div>
        
    );
}

export default Card;
