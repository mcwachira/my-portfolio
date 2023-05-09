import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import {
  NavbarMobileMenu, MobileMenuContainer , MobileMenu, NavbarMenuContainer, NavContainer, NavbarLogo, NavbarMenu, NavbarLinks, NavbarLink, ThemeToggler, SunIcon, MoonIcon, MenuButton
} from './Navbar.styles'
import { Sun, MoonStarsFill } from 'styled-icons/bootstrap'
const ToggleButton = dynamic(() => import('../Button/ToggleButton'), {
  ssr: false
}
)


const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [menu, ShowMenu]= useState(false)

const toggleMenu =() => {
  ShowMenu(!menu)
  ('clikced')

}

//prevents hydration 
useEffect(() => {
  setMounted(true)
},[])
if(!mounted){
  return null
}

   
  return (
  <header>
      <NavbarMobileMenu active={menu}>
        {/* <div styles={{
        float: 'left', width:'100%', padding:'1.25rem'
        }}>
      <div styles={{
          display: 'block', float: 'right', position: 'relative', top: '-1.75rem',
          marginTop: '1.5rem', height: '2rem'
        }}> */}
        <MenuButton style={{
          display: 'block', float: 'right', position: 'relative',
          marginTop: '1.5rem' 
}}
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
        {/* </div>
        </div> */}

        <MobileMenuContainer>
          <MobileMenu>
            <NavbarLinks >
              <NavbarLink href='/projects'>Projects</NavbarLink>
              <NavbarLink href='/blog'>Blog</NavbarLink>
              <NavbarLink href='/snippets'>Snippets</NavbarLink>
              <NavbarLink href='/contact'>Contact </NavbarLink>
            </NavbarLinks>

            {/* {mounted && (<ThemeToggler aria-label='change theme' >
              {theme !== 'dark' ? <MoonIcon size={30} onClick={() => setTheme('dark')} /> : <SunIcon size={30} onClick={() => setTheme('light')} />}


            </ThemeToggler>)
            } */}


        <ToggleButton/>



          </MobileMenu>
        </MobileMenuContainer>
        

      </NavbarMobileMenu>


      {/* Navbar tablet +  */}
      <NavbarMenuContainer>
        <NavContainer>
          <NavbarLogo>
            <NavbarLink href='/'>
            <img src="" width='50px' height='50px' className='logo' />
            </NavbarLink>
          </NavbarLogo>

          <NavbarMenu>
            <NavbarLinks >
              <NavbarLink href='/projects'>Projects</NavbarLink>
              <NavbarLink href='/blog'>Blog</NavbarLink>
              <NavbarLink href='/snippets'>Snippets</NavbarLink>
              <NavbarLink href='/contact'>Contact </NavbarLink>
            </NavbarLinks>

         {/* { mounted &&  (<ThemeToggler >
              {theme !== 'dark' ? <MoonIcon size={30} onClick={() => setTheme('dark')} /> : <SunIcon size={30} onClick={() => setTheme('light')} />}


            </ThemeToggler>)
} */}
         <ToggleButton />
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