import React, {useState} from 'react'
import { FormContainer, TalkButton,Form ,  FormText, InputField, FieldSet, TextArea, SubmitButton, FormCta  } from './ContactMe.styles'

const ContactMe  =() => {
    //state for the contact fields 
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    //form validation state
    const [errors, setErrors] = useState({})

    //setting button text on form submission
    const [buttonText, setButtonText] = useState('send')

    //error and successfully messages state
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showFailureMessage, setShowFailureMessage] = useState(false)

    //validating our form states

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullName.length <= 0) {
            tempErrors["fullName"] = true;
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

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let isValidForm = handleValidation()

        if (isValidForm) {
            setButtonText('Sending')

            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({
                    email: email,
                    fullName: fullName,
                    number: number,
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
                return
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }

        console.log(fullName, email, subject, message);
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

                    <p>
                        Fill the form and send in your queries. I will respond as soon as I can. Alternatively, You can reach out to me at my email address.
                    </p>
            </FormCta>
     
                <Form method="post" onSubmit={handleSubmit}>

                    <h1 className='text-3xl  pt-5 text-center font-semibold text-white'>
                        Send A Message
                    </h1>

                    <FieldSet>
                        <InputField className='text-white' placeholder="full Name" name="full Name" type="text" tabIndex="1" required autoFocus onChange={(e) => setFullName(e.target.value)} />
                    </FieldSet>

                    <FieldSet>
                        <InputField className='text-white' placeholder="Your Email Address" name="email" type="email" tabIndex="2" required onChange={(e) => setEmail(e.target.value)} />
                    </FieldSet>
                  

                    <FieldSet>
                        <InputField className='text-white' placeholder="subject" name="subject" type="text" tabIndex="1" required autoFocus onChange={(e) => setSubject(e.target.value)} />
                    </FieldSet>
                    <FieldSet>
                        <TextArea placeholder="Type your message here...." tabIndex="5" name="textarea" required onChange={(e) => setMessage(e.target.value)}></TextArea>
                    </FieldSet>
                    <FieldSet>
                        <SubmitButton name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</SubmitButton>
                    </FieldSet>
                </Form>
          
        </FormContainer>)
}

export default ContactMe