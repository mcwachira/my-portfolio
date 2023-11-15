import React, {useMemo} from 'react'
import styled from 'styled-components'
import { getAllPosts, getSinglePost } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import {device} from '@/utils/devices'
import {CH} from '@code-hike/mdx/components'
import MdxImage from '@/utils/MdxImage';
import Link from 'next/link'
import Image from 'next/legacy/image';

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
width:70%;
};

/* background-color: #fff; */

`
const PostTitle = styled.h1`
font-size: 2.5rem;
line-height: 2.7rem;
width:100%;
color:#000;
/* text-align: center; */
margin: 3rem 0;
  color: var(--color-text-secondary);

`

const PostTextContainer = styled.div`

`
const PostTextHeader = styled.div`
display: flex;
width:100%;
margin-top:1rem;

justify-content:space-between;
`

const PostPage = ({slug, source, frontmatter}) => {

/* 
    const Component  =useMemo(() => {

        if(source){
            return (    <MDXRemote {...source} />)
        }
        return (<div></div>)
 
        /* img:(props) => (
            <Image {...props} layout='responsive' loading='lazy' placeholder='blur'/>
        ) */

/* }  ,[source]) */

    //console.log(frontmatter)
    return (

 <PostPageContainer      title={frontmatter.title}
 description={frontmatter.excerpt}
 date={frontmatter.date}
 type={frontmatter.article}>


<PostContainer>
<BackButton href='/blog'> Go Back</BackButton> 
              <PostTitle>
          {frontmatter?.title} 
          
              </PostTitle>
        <Image src={frontmatter.cover_image} alt={frontmatter.title} width={1000} height={600}/>
     
              <PostTextContainer>
          <PostTextHeader>
       
           Read: {frontmatter.readingTime.text} 
                
              Date :{frontmatter.date}  
          </PostTextHeader>
      

     
          
          <MDXRemote {...source}  language={frontmatter.language} components={{
            // pre:SyntaxHighlighter,
            img:MdxImage,
            CH
          }}/> 
              </PostTextContainer>

</PostContainer>


 </PostPageContainer>

/* <Image src={frontmatter.cover_image} alt={frontmatter.title} width={1000} height={400}/> */
/* <MdxImage src={frontmatter.cover_image} alt={frontmatter.title} layout='responsive'  objectFit='contain'  />
<main>

</main> */

    )
}

export default PostPage

export const getStaticProps = async ({params}) => {
   
    console.log(params)
    const post = await getSinglePost(params.slug)
    console.log(post)

    return {
        props:{
            ...post
        }
    }
}

export const getStaticPaths = async() => {
    const paths = getAllPosts().map(({slug}) => ({params:{slug}}))
    // console.log(paths)


    return {
        paths,
        fallback:false,
    }
}