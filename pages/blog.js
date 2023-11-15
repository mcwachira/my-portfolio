import React from 'react'
import { getAllPosts } from '@/lib/posts'
import { BlogPost } from '@/components/index'
import styled from 'styled-components'
import {device}from '@/utils/devices'
import Link from '@/components/Link'
import { CategoryList } from '@/components/index'


const BlogContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top:5rem

`

const BlogCategory = styled.div`
 display: flex;
 align-items: center;
 gap:1rem;
 flex-wrap: wrap;



 `
 const LanguageCategory = styled.h3`
 padding:.5rem .5rem;
 border-radius: 5px;
 background:#BFFFF0;
 font-size: 1.1rem;
 color:var(--color-text-secondary);
border: 1px solid #0AC2C2;
cursor:pointer;
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
width:100%;
margin:1rem auto;

@media ${device.tablet}{
width:80%;

}


`
const BlogContentHeading = styled.h2`
font-size:2.0rem;
text-align: center;
@media ${device.tablet}{
font-size:2.3rem;

}

`

const blog = ({posts, categories}) => {

  return (
    <BlogContainer>

    <NoteToSelf>
              I&#8216;m <span>Still Learning.
                 
              </span>  </NoteToSelf>


              <BlogContent>
              <BlogContentHeading>All Posts</BlogContentHeading>
              <BlogCategory>


                  {categories.map((category, index) => (
                  
                <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                          <LanguageCategory>
                              {category}
                          </LanguageCategory> 
                 

                </Link>
            ))}
                     

                
              </BlogCategory>
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

  
/* console.log(posts) */

    const categories = posts.map((post) => post.frontmatter.category)


    //gives us a an array with non repeating values
    const uniqueCategories = [...new Set(categories)]
    /* console.log(uniqueCategories) */

    return {
        props: {
            posts,
            categories: uniqueCategories
        }
    }
}



