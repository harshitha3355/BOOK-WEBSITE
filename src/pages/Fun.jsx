import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FunCard from '../components/FunCard';
import Subtitle from '../components/Subtitle';
import fun from '../data/fun'; 
import './Fun.css';

function Fun() {
    return (
        <>
            <Header />
            <Subtitle heading={'Fun Quizzes and Challenges'}/>
            <div className="fun-section">
                {fun.map((item) => (
                    <FunCard key={item.id} fun={item} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Fun;