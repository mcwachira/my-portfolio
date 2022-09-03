import React, { useState } from 'react'
import Link from 'next/link'

import {
  NavbarMobileMenu, MobileMenuContainer , MobileMenu, NavbarMenuContainer, NavContainer, NavbarLogo, NavbarMenu, NavbarLinks, NavbarLink, ThemeToggler, SunIcon, MoonIcon, MenuButton
} from './Navbar.styles'
import { Sun, MoonStarsFill } from 'styled-icons/bootstrap'
const Navbar = () => {

  const [theme, setTheme] = useState(false)
  const [menu, ShowMenu]= useState(false)

const toggleMenu =() => {
  ShowMenu(!menu)
  console.log('clikced')

}

  const changeTheme = () => {
 setTheme(!theme)
  }
   
  return (
  <header>
      <NavbarMobileMenu active={menu}>
        <div styles={{
        float: 'left', width:'100%', padding:'1.25rem'
        }}>
      <div styles={{
          display: 'block', float: 'right', position: 'relative', top: '-1.75rem',
          marginTop: '1.5rem', height: '2rem'
        }}>
          <MenuButton
            aria-label="close menu button"
           
              onClick={() => ShowMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '2rem', height: '2rem', color: 'navy-green' }}

              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </MenuButton>
        </div>
        </div>

        <MobileMenuContainer >
          <MobileMenu >
            <NavbarLinks >
              <NavbarLink href='/projects'>Projects</NavbarLink>
              <NavbarLink href='/blog'>Blog</NavbarLink>
              <NavbarLink href='/Snippets'>Snippets</NavbarLink>
              <NavbarLink href='/newsletter'>NewsLetter</NavbarLink>
              <NavbarLink href='/contact'>Contact </NavbarLink>
            </NavbarLinks>

            <ThemeToggler onClick={() => changeTheme()}>
              {theme === true ? <MoonIcon size={30} /> : <SunIcon size={30} />}


            </ThemeToggler>

          </MobileMenu>
        </MobileMenuContainer>
        

      </NavbarMobileMenu>


      {/* Navbar tablet +  */}
      <NavbarMenuContainer>
        <NavContainer>
          <NavbarLogo>
            <NavbarLink href='/'>
              logo
            </NavbarLink>
          </NavbarLogo>

          <NavbarMenu>
            <NavbarLinks >
              <NavbarLink href='/projects'>Projects</NavbarLink>
              <NavbarLink href='/blog'>Blog</NavbarLink>
              <NavbarLink href='/Snippets'>Snippets</NavbarLink>
              <NavbarLink href='/newsletter'>NewsLetter</NavbarLink>
              <NavbarLink href='/contact'>Contact </NavbarLink>
            </NavbarLinks>

            <ThemeToggler onClick={() => changeTheme()}>
              {theme === true ? <MoonIcon size={30} /> : <SunIcon size={30} />}


            </ThemeToggler>

          </NavbarMenu>
          <MenuButton
            aria-label="Open menu button"
           
            onClick={() => ShowMenu(!menu)}

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />

            </svg>
          </MenuButton>

        </NavContainer>
        
      </NavbarMenuContainer>

     



  </header>
  )
}

export default Navbar