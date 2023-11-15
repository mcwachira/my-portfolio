import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {device } from '@/utils/devices'
import Post from '@/components/index'
import { getAllPosts } from '@/lib/posts'
import { CategoryList } from '@/components/index'
import styled from 'styled-components'
import { SortByDate } from '@/utils/sortByDate'
import { BlogPost } from '@/components/index'


const CategoryHeading = styled.h1`
          color:#0070f3;
          font-size:2.5rem;
          font-weight:bold;
          padding-bottom:1rem;
          border-bottom:4px solid #330;


          @media ${device.tablet}{
              font-size:3rem;
          color:#000;
          }

          
          `



const CategoryContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top:5rem;

         @media ${device.tablet}{
          flex-direction:row;
          }

`

const CategoryContent = styled.div`

width:100%;
margin:2rem auto;
@media ${device.tablet}{
width:60%;

}




`
const Category = styled.div`
display:none;

         @media ${device.tablet}{
display:flex;
width:20%;
margin:2rem auto;
         }

`

const CategoryName = ({posts, categoryName, categories}) => {
    /* (categoryName) */
  return (
      <CategoryContainer>
        
          
          Post in {categoryName}
        
        
          <CategoryContent>
              {posts.map((post, index) => (
                  <BlogPost key={index} post={post} />
              ))}
          </CategoryContent>
          <Category>
              <CategoryList categories={categories}></CategoryList>
          </Category>

         
    </CategoryContainer>
  )
}

export default CategoryName



const postsDirectory = path.join(process.cwd(), 'content/posts')
export const getStaticPaths = async () => {
    const fileNames = fs.readdirSync(postsDirectory)

    const categories = fileNames.map((fileName) => {

        const fullPath = path.join(postsDirectory, fileName)

        // combines the individual meta data with its slug
        const fileContent = fs.readFileSync(fullPath, 'utf-8')

        const { data: frontmatter } = matter(fileContent)

         //(frontmatter.category)
        return frontmatter.category

    })

     /* (categories) */

    const paths = categories.map((category) => ({

        //the params is necessary so as to show the specific posts based on the category
        params: {
            category_name: category.toLowerCase()
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}


export const getStaticProps = async({params:{category_name}}) => {
    (category_name)
    const posts = getAllPosts()

    const categories = posts.map((post) => post.frontmatter.category)
    

    //gives us a an array with non repeating values
    const uniqueCategories = [...new Set(categories)]
    // (uniqueCategories)

    const categoryPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === category_name)
 

    // console.log(uniqueCategories)
     /* (categories) */
    return {
        props: {
            posts: categoryPosts.sort(SortByDate),
            categoryName: category_name,
            categories: uniqueCategories
        }
    }
}