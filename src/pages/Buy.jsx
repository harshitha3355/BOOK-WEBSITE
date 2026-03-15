import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subtitle from '../components/Subtitle';
import BuyCard from '../components/BuyCard';
import buy from '../data/buy';
import './Buy.css';

function Buy(){
    return(
        <>
            <Header/>
            <Subtitle heading={'Shop Now'}/>
            <div className="buy-section">
                {buy.map((item) => (
                    <BuyCard key={item.id} buy={item} />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Buy;