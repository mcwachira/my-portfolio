import styled from 'styled-components'
import { device } from '../../utils/devices'
import Link from '../Link'


export const PostCard = styled.div`
width:100%;
background:#FFEFFD;
border-radius: 10px;
display: flex;
flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem


`

export const PostCardTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:1.2rem;



`

export const PostBody = styled.div`
margin-top:.5rem;
`

export const PostLink = styled(Link)`
font-size: 1.5rem;
color:#0070f3;

&:hover{
    /* font-weight: bold; */
    text-decoration: underline;
}
`