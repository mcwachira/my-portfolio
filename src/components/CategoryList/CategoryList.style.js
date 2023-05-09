import styled from "styled-components";

export const CategoryContainer = styled.div`

width:100%;
background:#FFEFFD;
border: 1px solid #eaeaea;
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 1.25rem; 
color:#111;

`

export const CategoryTitle = styled.h2`
font-size: 1.3rem;


`
export const CategoryItems = styled.ul`
border-top-width: 1px; 
border-color: gray;
`

export const CategoryItem = styled.li`
list-style: none;
padding: 1rem; 
cursor: pointer; 
`