import React, { useState } from 'react';
import './App.css'; 
import Heroes from './Heroes';
import Buttons from './Buttons';

function SwitchHero({ onSelection, setTmp }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [activeHero, setActiveHero] = useState(Heroes[0].id);
    const slidesPerPage = 4;

    const handleNextSlide = () => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % Math.ceil(Heroes.length / slidesPerPage));
    };

    const handlePrevSlide = () => {
        setCurrentSlideIndex(prevIndex => (prevIndex === 0 ? Math.ceil(Heroes.length / slidesPerPage) - 1 : prevIndex - 1));
    };

    const handleHeroClick = (id) => {
        setActiveHero(id); 
    };

    const startIndex = currentSlideIndex * slidesPerPage;
    const endIndex = Math.min(startIndex + slidesPerPage, Heroes.length);

    return (
        <div className="container">
            <div className="btn-container">
                <Buttons handlePrevSlide = {handlePrevSlide} handleNextSlide = {handleNextSlide}/>
            </div>
            {Heroes.slice(startIndex, endIndex).map(hero => (
                <div
                    key={hero.id}
                    className={hero.id === activeHero ? 'slide active' : 'slide'}
                    style={{ backgroundImage: `url(${hero.image})` }}
                    onClick={() => handleHeroClick(hero.id)}
                >
                    <h3>{hero.name}</h3>
                </div>
            ))}
            <div className="btn-container"> 
                <button className="btn" onClick={() => { setTmp(activeHero); onSelection(); }}>Chose your Hero</button>
            </div>
        </div>
    );
}
 
export default SwitchHero;
