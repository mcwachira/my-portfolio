import React from 'react'
import { Snippet } from '@/components/index'
import styled from 'styled-components'
import { device } from '@/utils/devices'
import Link from 'next/link'
import fs, { readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CategoryList } from '@/components/index'


const SnippetsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top:5rem

`

const SnippetsCategory = styled.div`
 display: flex;
 align-items: center;
 gap:1rem;
 flex-wrap: wrap;



 `
const LanguageCategory = styled.h3`
 padding:.5rem .5rem;
 border-radius: 5px;
 background:#7864EA;
 font-size: 1.1rem;
border: 1px solid #0AC2C2;
color:#fff;
cursor:pointer;
 `

const NoteToSelf = styled.h1`
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

const SnippetsContent = styled.div`
width:100%;
margin:1rem auto;

@media ${device.tablet}{
width:80%;

}


`
const SnippetsContentHeading = styled.h2`
font-size:2.0rem;
text-align: center;
@media ${device.tablet}{
font-size:2.3rem;

}

`

const snippets = ({ posts, categories }) => {

  return (
    <SnippetsContainer>

   


      <SnippetsContent>
        <SnippetsContentHeading>
        Code Snippets </SnippetsContentHeading>
        <SnippetsCategory>


          {categories.map((category, index) => (

            <Link key={index} href={`/snippets/category/${category.toLowerCase()}`}>
              <LanguageCategory>
                {category}
              </LanguageCategory>


            </Link>
          ))}



        </SnippetsCategory>
        {posts.map((post, index) => (
          <Snippet key={index} post={post} />
        ))}
      </SnippetsContent>

    </SnippetsContainer>
  )
}

export default snippets


const postDirectory = path.join(process.cwd(), 'content/code-snippets')

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync(postDirectory)

const posts = fileNames.map((fileName) => {

  const slug = fileName.replace('.mdx', "")

  const fullPath = path.join(postDirectory, fileName);

  const content = readFileSync(fullPath, 'utf-8')

  const {data:frontmatter} = matter(content)
  return {
    frontmatter,
    slug
  }

})





  const categories = posts.map((post) => post.frontmatter.category)


  //gives us a an array with non repeating values
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      posts,
      categories: uniqueCategories
    }
  }
}



