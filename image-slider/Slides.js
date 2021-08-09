import React from 'react'

export default function Slides({renderImage}) {
    return (
        <div>
          <img id='slideImg' src={renderImage()}></img>
        </div>
    )
}
