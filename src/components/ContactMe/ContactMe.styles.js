import styled from 'styled-components'
import { device } from '../../utils/devices'

export const FormContainer = styled.div`
width:90%;
display: flex;
flex-direction: column;
gap:1rem;
margin:0px auto;
margin-bottom: 1rem;


@media ${device.laptop}{
flex-direction: row;
gap:2rem;

}


`
export const FormCta = styled.div`
width:90%;
display: flex;
flex-direction: column;
margin:auto;
justify-items: center;
align-self: center;



@media ${device.laptop}{
margin-left: 5rem;
width:100%;
}


`



export const TalkButton = styled.button`
outline: none;
border: none;
background-color: #10B981;
color:#fff;
font-size:1.5rem;
font-weight: bold;
border-radius:10px;
margin-top: 2rem;
margin-left:1rem;
padding:.5rem;
@media ${device.tablet}{
margin:2rem;
}





`
export const FormText = styled.h2`
color:var( --color-text-tertiary);
font-size:1.8rem;
line-height: 2.1rem;
width:100%;

@media ${device.tablet}{
font-size:2.5rem;
line-height: 2.6rem;
}


`

export const FormTitle = styled.h2`
margin-top:2rem;
color:var( --color-text-tertiary);
font-size:1.8rem;
line-height: 2.1rem;
`


export const FormTextParagraph = styled.p`
color:var( --color-text-tertiary);
`

export const FieldSet = styled.div`
border: medium none !important;
    margin: 0 0 10px;
    margin-left:20px;
    margin-right: 20px;
    display: flex;
    min-width: 90%;
    padding: 0;
    width: 90%;
     /* color: #fff; */

`


export const Form = styled.form`
width:90%;
margin:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* align-self: flex-start; */
background: var( --color-bg-primary);
box-shadow: 8px 5px 5px 6px rgba(0,0,0,0.21);
-webkit-box-shadow: 8px 5px 5px 6px rgba(0,0,0,0.21);
-moz-box-shadow: 8px 5px 5px 6px rgba(0,0,0,0.21);
@media ${device.laptop}{
    margin:5rem auto;
margin-right: 5rem;
width:100%;
}

`

export const InputField = styled.input`
  width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #10B981;
    margin: 0 0 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    /* margin-top: 2rem; */
    background: none;
   color: var(    --color-text-tertiary) !important;
    &:focus{
         outline: 0;
    border: 1px solid  #10B981;
    }


`
export const ErrorMessage = styled.p`

margin-top: -1rem;
font-size:.9rem;
color:red;
`
export const SuccessMessage = styled.p`
font-size:.9rem;
color:red;
`


export const TextArea = styled.textarea`
  width: 100%;
    border: none;
    outline: none;margin-left: -16rem;
    outline: none;
    border-bottom: 1px solid #10B981;
    margin: 0 0 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
      background: none;
           color: var(--color-text-form) !important;
  height: 100px;
    max-width: 100%;
    resize: none;
       &:focus{
         outline: 0;
    border: 1px solid  #10B981;
    }

`


export const SubmitButton = styled.button`

    /* width: 50%; */
    margin: 1rem auto;
    border: none;
    background: var(--color-bg-toggle);
    color: var(--color-text-primary);
    padding:1rem 3rem;
    font-size: 1.3rem;
    border-radius: 5px;
    text-align: center;
    cursor:pointer;
    &:hover{
          -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
    }

    &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}


`