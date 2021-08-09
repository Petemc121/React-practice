import React from 'react'
import Slides from './Slides'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Slider({renderImage, nextSlide, prevSlide}) {
    return (
        <div id="slider">
            <FontAwesomeIcon id="right" onClick={nextSlide} class="arrowIcons" icon={faArrowRight} />
            <FontAwesomeIcon id="left" onClick={prevSlide} class="arrowIcons" icon={faArrowLeft} />
            <Slides renderImage={renderImage} nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>
    )
}
