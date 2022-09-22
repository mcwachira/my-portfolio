import styled from 'styled-components'


export const FormContainer = styled.div`
background: #EFF6FF;
/* height:30vh; */
display: grid;
grid-template-columns: auto;
width:100%;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
gap:4rem;






`
export const FormCta = styled.div`
width:100%;
margin:auto;
display: flex;
flex-direction: column;
align-self: flex-start;
justify-content: center;
align-items: center;

`



export const TalkButton = styled.button`
background-color: #10B981;
color:#fff;
font-size:1rem;
border-radius:10px



`

export const Form = styled.form`
width:100%;
margin:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: flex-start;


`

export const FormText = styled.h2`
color:#374151;
font-size:2.5rem;
line-height: 2.6rem;

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

export const InputField = styled.input`
  width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #10B981;
    margin: 0 0 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
    background: none;
   color: var(   --color-text-form) !important;
    &:focus{
         outline: 0;
    border: 1px solid  #10B981;
    }


`

export const TextArea = styled.textarea`
  width: 100%;
    border: none;
    outline: none;
    outline: none;
    border-bottom: 1px solid #10B981;
    margin: 0 0 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
      background: none;
         color: var(   --color-text-form);
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