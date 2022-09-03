import styled from 'styled-components'
import { Sun, MoonStarsFill } from 'styled-icons/bootstrap'
import { device } from '../../utils/devices'
import Link  from '../Link'

export const NavbarMobileMenu = styled.div`
background-color: navy;
position: fixed; 
right:0;
z-index: 60; 
padding-top: 1.25rem;
top :-1rem ;
transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; 
transition-duration: 500ms; 
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
width: 20rem; 
height: 100%; 
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
transform: translateX(100%);
 ${props => props.active && ({
    transform: 'translateX(0)',


    })
 }

@media ${device.tablet}{
    display: none;
/* display: flex;
justify-content: space-between;
align-items: center;
//sticky navbar
 position: fixed;
  width: 100%; */

}

`

export const MobileMenuContainer = styled.div`

overflow: hidden; 
display: flex; 
margin-top: 1.25rem; 
flex-direction: column;
position: relative; 
padding-left: 2.5rem;
padding-right: 2.5rem; 
padding-top: 0; 
height: 70%; 


`
export const MobileMenu = styled.div`
display: flex; 
margin:1rem auto;
flex-direction: column; 
align-items: flex-start;
`

export const NavbarMenuContainer = styled.div`
position: fixed; 
z-index: 50; 
padding-top: 1.25rem;
top :-1rem ;
display: flex; 
width: 100%; 
margin:0 auto;
background: navy;
color:#fff;


`
export const NavContainer = styled.div`
display: flex; 
padding-top: 1.25rem;
padding-bottom: 1.25rem; 
margin-left: 1.25rem;
margin-right: 1.25rem; 
justify-content: space-between; 
align-items: center;
width: 100%; 


`
export const NavbarLogo = styled.div`
/* margin:auto; */
font-size: 1.5rem;
color:#0070f3;

`

export const NavbarMenu = styled.div`
display:none;
@media ${device.tablet}{
  display: flex;
  flex-direction: row;
margin-left: 2.5rem; 
font-size: 0.875rem;
line-height: 1.25rem; 
align-items: center; 
}


`


export const NavbarLinks = styled.div`
display: flex;
flex-direction: column;

@media ${device.tablet}{
    
flex-direction: row;


}
`


export  const NavbarLink  = styled(Link)`
font-size: 1.3rem;
margin:1rem 0;
/* display: flex;  */
align-items: center; 
/* & :hover{
    text-decoration:underline;
} */
@media ${device.tablet}{

margin:0 1rem


}
`

export const ThemeToggler = styled.button`
/* margin:auto; */
/* margin-left:5rem; */

font-size:1.5rem;
outline: none;
border: none;
margin-top: 5rem;
@media ${device.tablet}{

margin-top: 0;


}



`
export const SunIcon = styled(Sun)`

size: 50;
color:#0070f3;
`
export const MoonIcon = styled(MoonStarsFill)`
size: 50;
color:#0070f3;


`

export const MenuButton= styled.div`
width:2rem;
height:2rem;
color:navy-green;
cursor: pointer;

/* margin: auto;
display: block; */

@media ${device.tablet}{
display: none;
}
`
// `
// export const NavbarMenuLine = styled.div`
// /* top:10px;
// right:20px; */
// height:4px;
// width: 30px;
// margin:5px;
// background-color: #0070f3;
// cursor: pointer;
// transition: transform .4s ease-in-out;



// `

// export const NavbarMenuLineOne = styled.div`
// transform: rotate(0deg) translate(0 ,0);
// ${props => props.active && ({

//         transform: 'rotate(-45deg) translate(- 5px,6px)',
//     })

// }

// `
// export const NavbarMenuLineTwo = styled.div`
// opacity: inherit;
// ${props => props.active && ({

//     opacity: '0',
//     })

// }

// `

// export const NavbarMenuLineThree = styled.div`
// transform: rotate(0deg) translate(0 ,0);
// ${props => props.active && ({

//         transform: 'rotate(45deg) translate(- 5px,6px)',
//     })
// }
// `

