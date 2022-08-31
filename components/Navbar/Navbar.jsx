import React, { useState } from 'react'
import Link from 'next/link'

import {
  NavbarContainer, NavbarLogo, NavbarMenu,NavbarLinks, NavbarLink, ThemeToggler, SunIcon, MoonIcon, NavbarMenuButton, NavbarMenuLine, NavbarMenuLineOne ,
NavbarMenuLineTwo ,
NavbarMenuLineThree,
} from './Navbar.styles'
import { Sun, MoonStarsFill } from 'styled-icons/bootstrap'
const Navbar = () => {

  const [theme, setTheme] = useState(false)
  const [menu, ShowMenu]= useState(false)

const toggleMenu =() => {
  ShowMenu(!menu)

}

  const changeTheme = () => {
 setTheme(!theme)
  }
   
  return (
  <>
<NavbarContainer>
<NavbarLogo>
          <NavbarLink href='/'>
            logo
          </NavbarLink>
</NavbarLogo>
   
        <NavbarMenu active={menu}>
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
       
       
        <NavbarMenuButton onClick={() => toggleMenu()}>
          <NavbarMenuLine>
            <NavbarMenuLineOne active={menu} />
          </NavbarMenuLine>
          <NavbarMenuLine>
            <NavbarMenuLineTwo active={menu} />
          </NavbarMenuLine>
          <NavbarMenuLine>
            <NavbarMenuLineThree active={menu} />
          </NavbarMenuLine>


        </NavbarMenuButton>
</NavbarContainer>



  </>
  )
}

export default Navbar