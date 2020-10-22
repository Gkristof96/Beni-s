import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ArrowButton from './ArrowButton'
import Search from './Search'

const Hero = () => {
    return (
        <>
            <section className='hero-section'>
                <img className='background-container' src='images/background.png' alt='background' />
                <div className='hero-container'>
                    <div className='content'>
                        <h1>
                            Nullam rhoncus enim ut quam elementum
                        </h1>
                        <p>
                            Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.
                        </p>
                        <div className='btn-container'>
                            <ArrowButton icon={<BsArrowLeft/>} />
                            <ArrowButton icon={<BsArrowRight/>} />
                        </div>
                        
                    </div>
                    <Search />
                </div>
            </section>
        </>
    )
}

export default Hero
