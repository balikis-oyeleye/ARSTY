import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ImageSlider = ({ slides }: slidesProp) => {
  const [index, setIndex] = useState(0)


  return (
    <div>
      <Image src={slides[index]} alt="slider" />
    </div>
  )
}

export default ImageSlider