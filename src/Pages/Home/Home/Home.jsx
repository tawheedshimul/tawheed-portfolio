import React from 'react'
import Hero from '../Hero/Hero';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import Feauture from '../Feauture/Feauture';
import ProjectCard from '../ProjectCard/ProjectCard';
import Banner from '../Banner/Banner';


function Home() {
    return (
        <div>
            <Banner/>
            {/* <Hero></Hero> */}
            {/* <CarouselComponent></CarouselComponent> */}
            <ProjectCard></ProjectCard>
            <Feauture></Feauture>
        </div>
    )
}

export default Home;