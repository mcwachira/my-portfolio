import styled from 'styled-components'
import { device } from '../../utils/devices'
import MyLink from '../Link'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'


export const PostCard = styled(MyLink)`
padding: 1.5rem;
width:100%;
background:#FFEFFD;
border: 1px solid #eaeaea;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 0.55rem;
padding: 1.5rem;
transition:all .3s ease-in-out;

&:hover,
&:active{
    border-bottom: 5px solid  #0AC2C2;
    transform: translateY(-1rem);
    color: #0AC2C2;
}
`



export const PostCardTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:.9rem;
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
gap:.5rem;


@media ${device.tablet}{
    justify-content: space-around;
align-items: center;
flex-direction: row;
}
`

export const PostBody = styled.div`
margin:1rem;



`

export const PostHeading = styled.h2`
font-size: 1.5rem;
color:#0070f3;

`
export const PostExcerpt = styled.p`
font-size: 1.2rem;
color:#000;

`
export const PostLink = styled(MyLink)`
display:flex;
color: transparent;
align-items: center;

margin-top: 1rem;
font-size: 1rem;
transition: color 0.15s ease;



`

export const LinkArrow = styled(ArrowRight)`
margin-left: .5rem;


`