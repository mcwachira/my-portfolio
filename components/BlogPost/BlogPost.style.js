import styled from 'styled-components'
import { device } from '../../utils/devices'
import MyLink from '../Link'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'


export const BlogPostCard = styled(MyLink)`
width:100%;
/* height:.5rem; */
background:#BFFFF0;
border: 1px solid #0AC2C2;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 3rem;
/* padding: .5rem; */
margin:3rem auto ;
transition:all .3s ease-in-out;

/* &:hover,
&:active{
    border: 5px solid  #0AC2C2;
    transform: translateY(-1rem);
    color: #0AC2C2;
} */
`



export const BlogPostBody = styled.div`
margin:.5rem;



`

export const BlogPostHeading = styled.h2`
font-size: 1.5rem;
color:#0070f3;

`
export const BlogPostExcerpt = styled.p`
font-size: 1.2rem;
color:#000;

`
export const BlogPostLink = styled(MyLink)`
display:flex;
align-items: center;
margin-left: 2rem;

font-size: 1rem;
transition: color 0.15s ease;
`

export const LinkArrow = styled(ArrowRight)`
margin-left: .5rem;
color:#000;
font-size:1rem;


`