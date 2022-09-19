import React, {useMemo} from 'react'
import styled from 'styled-components'
import matter from 'gray-matter'
import Link from '@/components/Link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { getSinglePost, getAllPosts} from '../../lib/posts'
import { getMDXComponent } from "mdx-bundler/client";
import {device} from '@/utils/devices'
import SyntaxHighlighter from '@/utils/SyntaxHighlighter'
import { ArrowLeft } from 'styled-icons/bootstrap'


const BackButton = styled(Link)`
background-color: #0070f3;
/* padding:.5rem 1rem ; */
color:#0AC2C2;
`

const PostPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFE;
    /* background: rgb(255, 255, 254); */
    transition: background 350ms;
    margin:8rem auto;

`

const PostContainer = styled.div`
  width:100%;
    position: relative;
    margin:auto;
    flex: 1 1 0%;
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    padding: 0px 32px;
    /* letter-spacing:1px;
    line-height: 1rem; */
  
@media ${device.tablet}{
width:50%;
};

/* background-color: #fff; */

`
const PostTitle = styled.h1`
font-size: 3rem;
line-height: 3.2rem;
color:var(--color-text-secondary);
text-align: center;
margin: 3rem auto;

`
const PostTextContainer = styled.div`


`

const PostPage = ({frontmatter, code, slug}) => {

  (frontmatter.language)

  
    const Component =useMemo(() => {
      
      if(code){
        return getMDXComponent(code)
      }
      return (<div></div>)
    },[code])

  return (
    <PostPageContainer>


<PostContainer>
     
              <PostTitle>
          {frontmatter?.title} 
          
              </PostTitle>
              {/* <Image src={frontmatter.cover_image} alt={frontmatter.title} width={200} height={300}/> */}
        <BackButton href='/blog'> Go Back</BackButton>
              <PostTextContainer>

              {frontmatter.readingTime.text}
              {/* {frontmatter.wordCount}
              {frontmatter.slug} */}

          <Component  language={frontmatter.language} components={{
            pre:SyntaxHighlighter
          }}/> 
               
              </PostTextContainer>

</PostContainer>


 </PostPageContainer>
  )
}

export default PostPage


export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  // (post)
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
