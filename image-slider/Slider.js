import React from 'react'
import Slides from './Slides'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Slider({renderImage, navigateImages, nextSlide, prevSlide}) {
    return (
        <div id="slider">
             <button id="right" class="arrowButtons">
            <FontAwesomeIcon  onClick={nextSlide} class="arrowIcons" icon={faArrowRight} />
            </button>
            <button id="left" class="arrowButtons">
            <FontAwesomeIcon  onClick={prevSlide} class="arrowIcons" icon={faArrowLeft} />
            </button>
            <Slides renderImage={renderImage} nextSlide={nextSlide} prevSlide={prevSlide} />
            <div class="circleCon">
            <button id="0" onClick={navigateImages} class="circles"></button>
            
            <button id="1" onClick={navigateImages} class="circles"></button>
            <button id="2" onClick={navigateImages} class="circles"></button>
            </div>
        </div>
    )
}
