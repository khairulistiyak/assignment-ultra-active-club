import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import "./Cards.css"

const Cards = () => {

    const [exercises, setExercises] = useState([])


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='cards-all-container'>
            <div cards->
                <Header></Header>

                <div className='cards-container'>
                    <div className='card'>
                        {exercises.map(exercise => <Card exercise={exercise}></Card>)}
                    </div>
                </div>
            </div>
            <div>
                <Profile></Profile>
            </div>
        </div >
    );
};

export default Cards;