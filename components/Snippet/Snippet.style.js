import styled from 'styled-components'
import { device } from '../../utils/devices'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'


export const SnippetCard = styled.div`
width:100%;
/* height:.5rem; */
background:#DCCCFF;
border: 1px solid #0AC2C2;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 3rem;
color:#000;
/* padding: .5rem; */
margin:3rem auto ;
transition:all .3s ease-in-out;

&:hover,
&:active{
    border-bottom: 5px solid  #0AC2C2;
    transform: translateY(-1rem);
    /* color: #0AC2C2; */
}

`



export const SnippetBody = styled.div`
margin:.5rem;



`

export const SnippetHeading = styled.h2`
font-size: 1.5rem;



`
export const SnippetExcerpt = styled.p`
font-size: 1.2rem;



`
export const SnippetLink = styled(Link)`
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