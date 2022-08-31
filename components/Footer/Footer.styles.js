import styled from 'styled-components'
import { device } from '../../utils/devices'
import Link from '../Link'


export const FooterContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
background:#0070f3;
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
export const FooterLink = styled(Link)`
font-size: 1.3rem;
padding:.5rem 0;

@media ${device.tablet}{
margin:0 1rem

}
`

export const FooterContacts = styled.div`
display:flex;
flex-direction: column;

@media ${device.tablet}{
/* justify-content: space-between; */
}
`
