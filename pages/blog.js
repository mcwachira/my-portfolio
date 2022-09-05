import React from 'react'
import { getAllPosts } from '@/lib/posts'
import { BlogPost } from '@/components/index'
import styled from 'styled-components'
import {device}from '@/utils/devices'


const BlogContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top:5rem

`

const BlogCategory = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

`

const NoteToSelf =styled.h1`
    text-align: center;
font-size:1.7rem;
line-height:2rem;

@media ${device.tablet}{


font-size: 2.0rem;
line-height:2.2rem;
padding:1rem 10rem;

}

margin:2rem;
& > span{
color:#0070f3;
}
`

const BlogContent = styled.div`
width:80%;
margin:2rem auto;


`
const BlogContentHeading = styled.h2`
font-size:2.0rem;
text-align: center;
@media ${device.tablet}{
font-size:2.3rem;

}

`

const blog = ({posts}) => {
    console.log(posts)
  return (
    <BlogContainer>

    <NoteToSelf>
              I&#8216;m <span>Still Learning.
                 
              </span>  </NoteToSelf>

              
              <BlogContent>
              <BlogContentHeading>All Posts</BlogContentHeading>
              {posts.map((post, index) => (
                  <BlogPost key={index} post={post} />
              ))}
              </BlogContent>
       
    </BlogContainer>
  )
}

export default blog



export const getStaticProps = async () => {

    const posts =  getAllPosts()

    console.log(posts)

    return {
        props:{
            posts
        }
    }
}



