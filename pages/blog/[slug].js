import React, {useMemo} from 'react'
import styled from 'styled-components'
import matter from 'gray-matter'
import Link from '@/components/Link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { getSinglePost, getAllPosts} from '../../lib/posts'
import { getMDXComponent } from "mdx-bundler/client";



const BackButton = styled(Link)`
background-color: #0070f3;
padding:1rem 2rem ;

`

const PostContainer = styled.div`
width:100%;
margin-top:5rem;
background-color: #fff;

`
const PostTitle = styled.h1`
font-size: 3rem;
color:#000;
text-align: center;
margin-top: 3rem;

`
const PostTextContainer = styled.div`
margin-top:2rem;

`

const PostPage = ({frontmatter, code, slug}) => {


  
    const Component =useMemo(() => {
      
      if(code){
        return getMDXComponent(code)
      }
      return <div/>
    },[code])

  return (
 <>
<BackButton href='/blog'> Go Back</BackButton>

<PostContainer>
              {/* <PostTitle>
          {frontmatter?.title} 
              </PostTitle>
              <Image src={frontmatter.cover_image} alt={frontmatter.title} width={200} height={300}/> */}

              <PostTextContainer>

          <Component /> 
               
              </PostTextContainer>

</PostContainer>



pages/posts/[slug].js </>
  )
}

export default PostPage


export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  console.log(post)
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
