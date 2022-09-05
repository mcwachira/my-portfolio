import React from 'react'
import { FooterContainer,FooterLogoColumn, FooterLogo, FooterLinksColumn, FooterContacts, FooterLinks,FooterLinksOne, FooterLinksTwo, FooterLink } from './Footer.styles'


const Footer = () => {
  return (
   <FooterContainer>
  
  <FooterLogoColumn>
    <FooterLogo>
                  <FooterLink href='/'>
                      Logo
                  </FooterLink>
    </FooterLogo>

    <p>
        hello world 
    </p>
  </FooterLogoColumn>

  <FooterLinksColumn>

  <div>
                  <h2>
                      Site
                  </h2>
                  <FooterLinks>
                     
                      <FooterLinksOne>
                          <FooterLink href='/blog'>Blog</FooterLink>
                          <FooterLink href='/projects'>Projects</FooterLink>
                          <FooterLink href='/Snippets'>Snippets</FooterLink>
                      </FooterLinksOne>

                      <FooterLinksTwo>
                          <FooterLink href='/Reading'>Reading </FooterLink>
                          <FooterLink href='/newsletter'>NewsLetter </FooterLink>
                      </FooterLinksTwo>

                  </FooterLinks>
  </div>
          </FooterLinksColumn> 


          <FooterContacts>
           <div>
                  <h2>
                      Contacts
                  </h2>
          



                      <h3>
                          Twitter
                      </h3>
                      <h3>
                          LinkedIn
                      </h3>
              </div>
                  </FooterContacts>
          
      

   </FooterContainer>
  )
}

export default Footer