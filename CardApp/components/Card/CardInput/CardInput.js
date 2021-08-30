import React, { useState } from 'react';

const CardInput = (props) => {
    const [cardNumber, setCardNumber] = useState();

    const handleCardInput = (e) => {
        setCardNumber(e.target.value);
        
        
    }
    return (
        <input onChange={handleCardInput} pattern={props.pattern} inputMode={props.inputMode}></input>
    )
}

export default CardInput;
