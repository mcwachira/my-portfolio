import React, {useMemo} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getSinglePost, getAllPosts} from '../../lib/posts'
import { getMDXComponent } from "mdx-bundler/client";
import {device} from '@/utils/devices'
import SyntaxHighlighter from '@/utils/SyntaxHighlighter'
import MdxImage from '@/utils/MdxImage';
import Image from 'next/image'
import Mern from '../../assets/posts/mern.png'
import Layout from '@/components/Layout';

const BackButton = styled(Link)`
/* background-color: #0070f3; */
font-size:1.2rem;
/* padding:.5rem 1rem ; */
color:#0AC2C2;
`

const PostPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  color: var(--color-text-primary);
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
color:#000;
text-align: center;
margin: 3rem auto;
  color: var(--color-text-secondary);

`
const PostTextContainer = styled.div`

`
const PostTextHeader = styled.div`
margin-top:1rem;
display: flex;
justify-content:space-around
`
const PostPage = ({frontmatter, code, slug}) => {

 
 
 
  console.log(frontmatter.cover_image)

  
    const Component =useMemo(() => {
      
      if(code){
        return getMDXComponent(code)
      }
      return (<div></div>)
    },[code])

  return (


    <PostPageContainer      title={frontmatter.title}
 description={frontmatter.excerpt}
 date={frontmatter.date}
 type={frontmatter.article}>


<PostContainer>
     
              <PostTitle>
          {frontmatter?.title} 
          
              </PostTitle>
        <Image src={frontmatter.cover_image} alt={frontmatter.title} width={1000} height={400}/>
     
              <PostTextContainer>
          <PostTextHeader>
            <BackButton href='/blog'> Go Back</BackButton>
            {frontmatter.readingTime.text}
             {/*{frontmatter.wordCount} */}
            {/* {frontmatter.slug}  */}
          </PostTextHeader>
      

          <Component  language={frontmatter.language} components={{
            pre:SyntaxHighlighter,
            img:MdxImage
          }}/> 
               
              </PostTextContainer>

</PostContainer>


 </PostPageContainer>

  
  )
}

export default PostPage


export const getStaticProps = async ({ params }) => {
  //console.log(params)
  const post = await getSinglePost(params.slug)
  // (post)
  /* console.log(post) */
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async() => {
  const paths =  getAllPosts().map(({ slug }) => ({ params: { slug } }));
  console.log(paths)

  return {
    paths,
    fallback: false,
  };
};
