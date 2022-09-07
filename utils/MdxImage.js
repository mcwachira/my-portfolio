import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'


const ImageContainer = styled.div`
display: flex;
align-items: center;
margin:1rem auto;

`
const MdxImage = ({alt, src, width, height }) => {
  return (
    <ImageContainer>
        <Image src={src} alt={alt} layout='fill' width={width} height={height} objectFit='contain'/>
    </ImageContainer>
  )
}


MdxImage.defaultProps = {
  src:'',
  alt:'',
  width:0,
  height:0,

}
export default MdxImage
