import React from 'react';
import "./Card.css"

const Card = (props) => {
    console.log(props)
    const { name, age, picture, address, time } = props.exercise
    return (
        <div className='card-container'>
            <img src={picture} alt="" />
            <div className='card-info '>
                <h3>{name}</h3>
                <p>address: {address}</p>
                <p>views: <strong>{age}</strong></p>
                <p>Time required: <strong>{time}</strong></p>
            </div>
            <button className='btn-add-to-list'>Add To list</button>
        </div>
    );
};

export default Card;