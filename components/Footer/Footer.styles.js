import styled from 'styled-components'
import { device } from '../../utils/devices'
import MyLink from '../Link'

export const FooterContainer = styled.div`
font-size:13px;
line-height:23px;
color:#0a0c10;
padding-top: 2rem;
width:100%;
display:flex;
flex-direction: column;
background:#F0F3F7;
color:#0070f3;
@media ${device.tablet}{
flex-direction: row;
justify-content: space-between;

}

`

export const FooterLogoColumn = styled.div`
margin:auto;
display:flex;
flex-direction: column;

`
export const FooterLogo = styled.div`
font-size: 1.5rem;

`

// export const Footer

export const FooterLinksColumn = styled.div`
display:flex;
margin:auto;
gap:5rem;
@media ${device.tablet}{
flex-direction: row;
justify-content: space-between;
}

`

export const FooterLinks =styled.div`
display:flex;
gap:5rem;
/* flex-direction: column; */


@media ${device.tablet}{
    /* flex-direction: row; */
justify-content: space-between;
}

`
export const FooterLinksOne = styled.div`
display:flex;
flex-direction: column;

/* margin:auto; */
@media ${device.tablet}{

}

`
export const FooterLinksTwo = styled.div`
display:flex;
flex-direction: column;

/* margin:auto; */
@media ${device.tablet}{

}

`
export const FooterLink = styled(MyLink)`
font-size: 1.1rem;
padding:.5rem 0;

@media ${device.tablet}{
margin:0 1rem

}
`

export const FooterContacts = styled.div`
display:flex;
flex-direction: column;
gap:1rem;

@media ${device.tablet}{
    flex-direction: row;
justify-content: space-between;

}
`
