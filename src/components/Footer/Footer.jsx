import React from 'react'
import Image from 'next/image'
import { FooterContainer,FooterLogoColumn, FooterLogo, FooterLinksColumn, FooterContacts, FooterLinks,FooterLinksOne, FooterLinksTwo, FooterLink } from './Footer.styles'
import styled from 'styled-components'
import { Twitter, LinkedinSquare, Github, Instagram } from 'styled-icons/boxicons-logos'
import { Blog } from 'styled-icons/icomoon'

const SocialLinks = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
gap: 2rem;
font-size: 1.25rem;
line-height: 1.75rem;
margin-top: 1rem;

`


const BlueTwitter = styled(Twitter)`
 color: var(--color-social-logo);
`
const BlueLinkedIn = styled(LinkedinSquare)`
 color: var(--color-social-logo);
`
const BlueGithub = styled(Github)`
 color: var(--color-social-logo);
`


 
const Footer = () => {
  return (
   <FooterContainer>
  
  <FooterLogoColumn>
    <FooterLogo>
                  <FooterLink href='/'>
                      <img src="" width='50px' height='50px' className='logo' />
                  </FooterLink>
    </FooterLogo>

 
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
          


{/* 
                      <h3>
                      <a href="https://twitter.com/mc_wachira/" target="_blank" rel='noreferrer'>
                          Twitter
                      </a>
                     
                      </h3>
                      <h3>
                      <a href="https://www.linkedin.com/in/maina-wachira/" target="_blank" rel='noreferrer'>
                          LinkedIn
                      </a>
                   
                      </h3> */}
                  <SocialLinks>

                      <li>
                          <a href="https://twitter.com/mc_wachira/" target="_blank" rel='noreferrer'>
                              <BlueTwitter size='40' />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/maina-wachira/" target="_blank" rel='noreferrer'>
                              <BlueLinkedIn size='40' />
                          </a>
                      </li>
                      <li>
                          <a href="https://github.com/mcwachira" target="_blank" rel='noreferrer'>
                              <BlueGithub size='40' />
                          </a>
                      </li>
                
                  </SocialLinks>
              </div>
                  </FooterContacts>
          
      

   </FooterContainer>
  )
}

export default Footer
