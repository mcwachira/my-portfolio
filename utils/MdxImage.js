import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'


const ImageContainer = styled.span`
display: flex;
position: relative;
align-items: center;
margin:1rem auto;
/* left: 0px;
 top: 0px; */

`
const MdxImage = ({alt, src, width, height }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} layout='fill' width={width} height={height} objectFit='contain' blurDataURL="URL"
        placeholder="blur" />
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
