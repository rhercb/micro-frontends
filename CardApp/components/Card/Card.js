import './card.scss'
import React, { useState, useEffect } from 'react';
import CardInput from './CardInput/CardInput';

const Card = () => {

    const [flip, setFlip] = useState({ flipped: false });

    const flipCards = () => {
        setFlip({ flipped: !flip.flipped })
    }

    useEffect(() => {
        // if (flip.flipped) {
        //     document.getElementById('creditCard').classList.replace('front', 'back')
        // } else {
        //     document.getElementById('creditCard').classList.replace('back', 'front')
        // }
    }, [flip.flipped])

    // Event to enter card number
    // Event for expr date
    // Card holder name

    // Signature
    // CVC

    return (
        <>
            <div className="card front" id="creditCard" onClick={flipCards}>
                <div className="card__front">
                    <CardInput pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" inputMode="numeric"/>
                    <p>Cards expiration date</p>
                    <p>Cards holder</p>
                </div>
                <div className="card__back">
                    <p>Signature</p>
                    <p>CVC</p>
                </div>
            </div>
        </>
    )
}

export default Card;
