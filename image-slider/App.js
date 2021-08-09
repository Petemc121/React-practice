import Slider from './Slider'
import React, {useState} from 'react'
import bjj1 from './bjj1.jpg'
import bjj2 from './bjj2.jpg'
import bjj3 from './bjj3.jpg'

function App() {

    const [currentSlide, setSlide] = useState(0);
   

    const nextSlideHandler = () => {
        if (currentSlide == 2)
        {
        setSlide(0);
        } else 
        if(currentSlide < 2)
        {
            setSlide(currentSlide + 1);
        }

    }

    const renderImageHandler = () => {
        const imageArray = [bjj1, bjj2, bjj3];
        return imageArray[currentSlide ]
    }

    const prevSlideHandler = () => {

    }


return (
    <div>
        <Slider renderImage={renderImageHandler} prevSlide={prevSlideHandler} nextSlide={nextSlideHandler} />
    </div>
    
)
}

export default App;
