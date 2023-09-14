import React from 'react'
import Hero from '../Hero/Hero';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import Feauture from '../Feauture/Feauture';

function Home() {
    return (
        <div>
            <Hero></Hero>
            <CarouselComponent></CarouselComponent>
            <Feauture></Feauture>
        </div>
    )
}

export default Home;