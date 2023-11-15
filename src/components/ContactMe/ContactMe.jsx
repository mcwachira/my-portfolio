import React, {useState} from 'react'
import { FormContainer, TalkButton, Form, FormTitle, FormText, FormTextParagraph, InputField, FieldSet, TextArea, SubmitButton, FormCta, ErrorMessage, SuccessMessage } from './ContactMe.styles'

const ContactMe  =() => {
    //state for the contact fields 
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    //form validation state
    const [error, setError] = useState({})

    //setting button text on form submission
    const [buttonText, setButtonText] = useState('send')

    //error and successfully messages state
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showFailureMessage, setShowFailureMessage] = useState(false)

    //validating our form states

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }

        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setError({ ...tempErrors });
        console.log("errors", error);
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let isValidForm = handleValidation()

        if (isValidForm) {
            setButtonText('Sending')

            const res = await fetch('/api/SendMail', {
                body: JSON.stringify({
                    email: email,
                    fullName: fullname,
                    subject: subject,
                    message: message,

                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',

            });
            const { error } = await res.json();
            if (error) {
                console.log(error)
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");

                //reset the forms
                setFullname("")
                setEmail("")
                setSubject("")
                setMessage("")
                return
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
            setFullname("")
            setEmail("")
            setSubject("")
            setMessage("")
        }

        console.log(fullname, email, subject, message);
    }
    return (
        <FormContainer>
         

            <FormCta>
            <div>
                    <TalkButton>

                        Let&lsquo;s Talk
                    </TalkButton>
            </div>
              

                    <FormText>
                        Lets talk about your projects.
                    </FormText>

                    <FormTextParagraph>
                        Fill the form and send in your queries. I will respond as soon as I can. Alternatively, You can reach out to me at my email address.
                    </FormTextParagraph>
            </FormCta>
     
                <Form method="post" onSubmit={handleSubmit}>

                <FormTitle>
                        Send A Message
                    </FormTitle>

                    <FieldSet>
                        <InputField className='text-white' placeholder="Full Name" name="full Name" type="text" tabIndex="1" value={fullname} autoFocus onChange={(e) => setFullname(e.target.value)} />
                 
                    </FieldSet>
                {error?.fullname && (
                    <ErrorMessage>
                        Full Name Cannot be Empty
                    </ErrorMessage>
                )}

                    <FieldSet>
                        <InputField className='text-white' placeholder="Your Email Address" name="email" type="email" tabIndex="2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                
                    </FieldSet>
                  
                {error?.email && (
                    <ErrorMessage>
                        Email Cannot be Empty
                    </ErrorMessage>
                )}
                    <FieldSet>
                        <InputField className='text-white' placeholder="subject" name="subject" type="text" tabIndex="1" autoFocus value={subject} onChange={(e) => setSubject(e.target.value)} />
                    
                   
                    </FieldSet>
                {error?.subject && (
                    <ErrorMessage>
                        Subject Cannot be Empty
                    </ErrorMessage>
                )}
                    <FieldSet>
                        <TextArea placeholder="Type your message here...." tabIndex="5" name="textarea" value={message} onChange={(e) => setMessage(e.target.value)}></TextArea>
               
                    </FieldSet>


                {error?.message && (
                    <ErrorMessage>
                        Text Area Cannot be Empty
                    </ErrorMessage>
                )}
                    <FieldSet>
                        <SubmitButton name="submit" type="submit" id="contact-submit" >Send</SubmitButton>
                    </FieldSet>

                    <div>

                    {showSuccessMessage && (
                        <SuccessMessage>
                            Thankyou! Your Message has been delivered.
                        </SuccessMessage>
                    )}
                    {showFailureMessage && (
                        <ErrorMessage>
                            Oops! Something went wrong, please try again.
                        </ErrorMessage>
                    )}
                    </div>
                </Form>
          
        </FormContainer>)
}

export default ContactMe