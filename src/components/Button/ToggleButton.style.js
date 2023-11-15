import styled from 'styled-components'
import {SunFill,  MoonStarsFill } from 'styled-icons/bootstrap'
import { device } from '../../utils/devices'




export const ToggleBtn = styled.button`
  --toggle-width: 70px;
  --toggle-height: 32px;
  --toggle-padding: 3px;
position: relative;
display: flex;
align-items: center;
justify-content: space-around;
font-size:1.5rem;
line-height:1;
width:var(--toggle-width);
height: var(--toggle-height);
padding: var(--toggle-padding);
border: 0;
border-radius: calc(var(--toggle-width)/2);
background: var(--color-bg-toggle);
cursor: pointer;
 &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  }
/* background:#1e90ff; */
/* transition: background 0.25s ease-in-out; */

@media ${device.tablet}{
    margin-left: 5rem;

margin-left:5rem;
}
`


export const ToggleThumb = styled.span`
position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;

`


    
export const SunIcon = styled(SunFill)`


color:#222;

color:#FFFF00;
`
export const MoonIcon = styled(MoonStarsFill)`

color:#222;

color:#FFFF00;


`