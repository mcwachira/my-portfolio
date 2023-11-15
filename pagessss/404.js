import styled from 'styled-components'
import Link from 'next/link'
import {device} from '@/utils/devices'



 const  NotFoundContainer = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;
 width:100%;
 height: 100vh;
 color:#333;
 
 `

const FourOFour = () => {



    return (

<NotFoundContainer>
<h2>
       Thanks for checking out my website The page you are looking for is still in development. 
</h2>

<p>
    Go back home <Link href='/'>Home</Link>
</p>
</NotFoundContainer>

    )
}

export default FourOFour;

