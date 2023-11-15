import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Twitter, LinkedinSquare ,Github, Instagram} from 'styled-icons/boxicons-logos'
import { Blog } from 'styled-icons/icomoon'
import { getAllPosts } from '@/lib/posts'
import {device} from '@/utils/devices'
import ContactMe from '@/components/ContactMe/ContactMe'
import Navbar from '@/components/Navbar/Navbar'
//import dynamically

const  ToggleButton  = dynamic(() =>import( '@/components/Button/ToggleButton'),{
  ssr:false
}
)

const TopContainer = styled.div`
display: flex;
height: 40vh;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right: auto;
margin-left: auto;
text-align: center;
margin-top:5rem;

@media ${device.tablet}{
height: 70vh;
}

`
const Title = styled.h1`
margin: 0 1rem;
margin-top:1.5rem;
font-size:1.1rem;
color:var(--color-text-primary);

@media ${device.mobileL}{
font-size:1.7rem;
}
@media ${device.tablet}{
font-size:2rem;
color:#000;
}



@media ${device.tablet}{
font-size:2.5rem;
color:#000;
}
@media ${device.laptop}{
font-size:3rem;
color:#000;
}

`
const TitleSpan = styled.span`
color:#0070f3

`

const Motto = styled.p`
font-weight: 300;
font-size:.9rem;
width: 100%;
color:var(--color-text-primary);

@media ${device.mobileL}{
font-size:1.3rem;
}
@media ${device.tablet}{
font-size:1.6rem;

}
@media ${device.laptop}{
font-size:1.8rem;

}

`
const SocialLinks = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
gap: 2rem;
font-size: 1.25rem;
line-height: 1.75rem;
margin-top: 1rem;

`
const BlueBlog = styled(Blog)`
 color: var(--color-social-logo);
`

const BlueTwitter = styled(Twitter)`
 color: var(--color-social-logo);
`
const BlueLinkedIn = styled(LinkedinSquare)`
 color: var(--color-social-logo);
`
const BlueGithub = styled(Github)`
 color: var(--color-social-logo);
`

const BlueInstagram = styled(Instagram)`
 color: var(--color-social-logo);
`
const BodyContainer = styled.div`
width: 100%;
margin:auto;
display:grid;
gap:1rem;
margin:2rem auto;
/* background: #EAEEF4; */

@media ${device.tablet}{
grid-template-columns: repeat(2, 1fr);
};
@media ${device.laptop}{
grid-template-columns: repeat(3, 1fr);
}
`
const PostHeading = styled.h2`
color:var(--color-text-secondary);
font-size:1.7rem;
margin-left:1rem;
font-weight:bold;
padding-bottom:1rem;
border-bottom:4px solid  var(--color-text-primary);


@media ${device.tablet}{
font-size:3rem;
}


`
const ContactContainer = styled.div`
background: var(--color-bg-tertiary);
width:100%;


@media ${device.tablet}{
  height:100vh;
}

`

//importing the post component dynamically o improve speed
const Post = dynamic(() => import('@/components/Post/Post.component'), {ssr:false});
/* const ContactMe = dynamic(() => import('@/components/ContactMe/ContactMe'), {
  ssr:false,

    loading: () => (
    <p className="loadingText subtitle-4">
      Contact us Loading, please wait...
    </p>
  ),

});  */
export default function Home({posts}) {


  return (
    <div>
      <Head>
        <title>Mcwachira&#8216;s Blog and Portfolio site</title>
        <meta name="description" content="personal website blog and portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopContainer>
        <Title>
          Hi I&#8216;m  <TitleSpan>Charles Wachira</TitleSpan>
          <Motto>
            Fullstack Software developer helping Startup&#8216; s build Software using Javascript.
          </Motto>
        </Title>

        <SocialLinks>
         
        <li>
            <a href="https://twitter.com/mc_wachira/" target="_blank" rel='noreferrer'>
              <BlueTwitter size='40' />
       </a>
        </li>
          <li>
            <a href="https://www.linkedin.com/in/maina-wachira/" target="_blank" rel='noreferrer'>
              <BlueLinkedIn size='40'/>
            </a>
          </li>
          <li>
            <a href="https://github.com/mcwachira" target="_blank" rel='noreferrer'>
              <BlueGithub size='40' />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel='noreferrer'>
              <BlueInstagram size='40' />
            </a>
          </li>
        </SocialLinks>
      </TopContainer>
     
 

      <PostHeading>
        Latest Posts
      
      </PostHeading>
      <BodyContainer>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}

      </BodyContainer>

      <ContactContainer>
        <ContactMe />
      </ContactContainer>
      
    </div>
  )
}


export function getStaticProps() {
  const posts = getAllPosts().slice(0, 6)
console.log(posts)
  return {
    props:{
      posts
    }
  }
}