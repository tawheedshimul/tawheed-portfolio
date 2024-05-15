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
            <ProjectCard/>
            {/* <Feauture></Feauture> */}
            <div className='h-24'>

            </div>
        </div>
    )
}

export default Home;