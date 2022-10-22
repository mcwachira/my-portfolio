import styled from 'styled-components'
import { device } from '../../utils/devices'
import MyLink from '../Link'

export const FooterContainer = styled.div`
font-size:13px;
/* line-height:23px; */
    background: var(--color-bg-primary);
  color: var(--color-text-primary);
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
border-top:1px solid  #999;
padding-top: 2rem;
display:flex;
flex-direction: column;
margin-top: 20rem;



@media ${device.tablet}{
flex-direction: row;
justify-content: space-between;
margin-top: 5rem;

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
margin:auto;
   flex-direction: row;
gap:1rem;

@media ${device.tablet}{
 
justify-content: space-between;

}
`
