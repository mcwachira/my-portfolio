import styled from 'styled-components'
import Link from 'next/link'
const StyledLink = styled.a`

`
 const MyLink =  ({ route, params,href, children, className }) => {
    return (
        <Link route={route} params={params} href={href} passHref>

            <StyledLink className={className}>{children}</StyledLink>
        </Link>
    )
  
    }

// export default ({route, params , href, children ,className})=> (
// <Link route={route} params={params} href={href} passHref>
//     <StyledLink className={className}>
//     {children}
//     </StyledLink>
// </Link>
// )

export default MyLink