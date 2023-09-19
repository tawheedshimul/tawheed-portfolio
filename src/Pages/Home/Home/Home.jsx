import React from 'react'
import Hero from '../Hero/Hero';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import Feauture from '../Feauture/Feauture';
import ProjectCard from '../ProjectCard/ProjectCard';
import Loader from '../../Loader/Loader';

function Home() {
    return (
        <div>
            <Hero></Hero>
            {/* <CarouselComponent></CarouselComponent> */}
            <ProjectCard></ProjectCard>
            <Feauture></Feauture>
            <Loader></Loader>
        </div>
    )
}

export default Home;