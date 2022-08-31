import styled from 'styled-components'
import { Sun, MoonStarsFill } from 'styled-icons/bootstrap'
import { device } from '../../utils/devices'
import Link  from '../Link'

export const NavbarContainer = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-between;
align-items: center;


//sticky navbar
 position: fixed;
  top: 0;
  width: 100%;


`

export const NavbarLogo = styled.div`
margin:auto;
font-size: 1.5rem;
color:#0070f3;

`

export const NavbarMenu = styled.div`
display: flex;
flex-direction: column;
 transform:translateX(-100vw);
 ${props => props.active && ({
     height:'100vh',
     width: '60vw',
    background: 'red',
    position: 'absolute',
  transform: 'translateX(0)',
        /* margin: auto; */
    })

}

@media ${device.tablet}{
margin:auto;
flex-direction: row;
justify-content: space-between;
   transform: translateX(0);
}


`


export const NavbarLinks = styled.div`
display: flex;
/* flex-direction: column;  */
font-size: 1.5rem;
color:#0070f3;


 ${props => props.active && ({
    
// flexDirection:'column',
marginTop:'1rem'

 })
 }

@media ${device.tablet}{
flex-direction: row;
justify-content: space-between;
align-items: center;
}


`
export  const NavbarLink  = styled(Link)`
font-size: 1.3rem;
/* padding:2rem 0; */

@media ${device.tablet}{
margin:0 1rem

}
`

export const ThemeToggler = styled.button`
margin:auto;
margin-left:5rem;
font-size:1.5rem;
outline: none;
border: none;


`
export const SunIcon = styled(Sun)`

size: 50;
color:#0070f3;
`
export const MoonIcon = styled(MoonStarsFill)`
size: 50;
color:#0070f3;
`
export const NavbarMenuButton= styled.div`
margin: auto;
display: block;

@media ${device.tablet}{
display: none;
}
`
export const NavbarMenuLine = styled.div`
/* top:10px;
right:20px; */
height:4px;
width: 30px;
margin:5px;
background-color: #0070f3;
cursor: pointer;
transition: transform .4s ease-in-out;



`

export const NavbarMenuLineOne = styled.div`
transform: rotate(0deg) translate(0 ,0);
${props => props.active && ({

        transform: 'rotate(-45deg) translate(- 5px,6px)',
    })

}

`
export const NavbarMenuLineTwo = styled.div`
opacity: inherit;
${props => props.active && ({

    opacity: '0',
    })

}

`

export const NavbarMenuLineThree = styled.div`
transform: rotate(0deg) translate(0 ,0);
${props => props.active && ({

        transform: 'rotate(45deg) translate(- 5px,6px)',
    })
}
`

