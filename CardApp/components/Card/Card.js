import './card.scss'
import React, { useState, useEffect } from 'react';

const Card = () => {

    const [flip, setFlip] = useState({ flipped: false });

    const flipCards = () => {
        setFlip({ flipped: !flip.flipped })
    }

    useEffect(() => {
        if (flip.flipped) {
            document.getElementById('creditCard').classList.replace('front', 'back')
        } else {
            document.getElementById('creditCard').classList.replace('back', 'front')
        }
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
                    <p>Cards number</p>
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
