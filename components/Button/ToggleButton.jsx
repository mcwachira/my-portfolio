import React, { useState, useEffect } from 'react'
import { ToggleBtn, SunIcon, MoonIcon } from './ToggleButton.style'
import styled from 'styled-components'


const ToggleThumb = styled.span`
position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform .25s ease-in-out;
   transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};

`


const ToggleButton = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme) //default theme is light
  const inactiveTheme = activeTheme === 'light' ? 'dark' : "light";


  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);


  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme])


  return (
    <ToggleBtn
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type='button'
      onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>

        <SunIcon size={20} />
      </span>
      <span aria-hidden={true}>

        <MoonIcon size={20} />
      </span>
    </ToggleBtn>
  )
}

export default ToggleButton