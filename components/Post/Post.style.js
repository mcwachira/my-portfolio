import styled from 'styled-components'
import { device } from '../../utils/devices'
import MyLink from '../Link'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'


export const PostCard = styled.div`
padding:.9rem;
width:100%;
background: var(--color-bg-card);
border: 1px solid #eaeaea;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 0.55rem;
transition:all .3s ease-in-out;

&:hover,
&:active{
    border-bottom: 5px solid  #0AC2C2;
    transform: translateY(-1rem);
    color: #0AC2C2;
}

@media ${device.tablet}{
padding: 1.5rem;
}
`



export const PostCardTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:.9rem;
flex-wrap:wrap;
color:var(--color-card-logo-color);


/* gap:.5rem; */
@media ${device.tablet}{
    justify-content: space-around;
align-items: center;
flex-direction: row;
}



`
export const PostCardTopChild = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
gap:.3rem;


@media ${device.tablet}{
    justify-content: space-around;
align-items: center;
flex-direction: row;
gap:.5rem;
}
`

export const PostBody = styled.div`
/* margin:1rem; */


`

export const PostHeading = styled.h2`
font-size: 1.2rem;
color:var(--color-text-secondary);

@media ${device.tablet}{
font-size: 1.5rem;


}


`
export const PostExcerpt = styled.p`
font-size: 1rem;
color:#000;
@media ${device.tablet}{
font-size: 1.2rem;

}


`
export const PostLink = styled.div`
display:flex;
text-align: center;
cursor:pointer;
font-size: 1rem;
transition: color 0.15s ease;



`

export const LinkArrow = styled(ArrowRight)`
margin-left: .5rem;
 color: #0AC2C2;


`