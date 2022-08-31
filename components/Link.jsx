import styled from 'styled-components'
import Link from 'next/link'
const StyledLink = styled.a`



`

export default ({route, params , href, children ,className})=> (
<Link route={route} params={params} href={href} passHref>
    <StyledLink className={className}>
    {children}
    </StyledLink>
</Link>
)