import { getPosts } from "@/lib/posts"
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
import CategoryList from "@/components/CategoryList"
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import Post from "@/components/Post"
import { POSTS_PER_PAGE } from '@/config/index'
export default function BlogPage({ posts , numPages, currentPage , categories}) {

    return (
        <Layout>
        <div className="flex justify-between">
            <div className="w-3/4 mr-10">
                    <h1
                        className="text-5xl border-b-4 p-5 font-bold">
                        Blog
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}


                    </div>
                    <Pagination currentPage={currentPage} numPages={numPages} />

            </div>
                <div className="w-1/4">
                    <CategoryList categories={categories}/>
                </div>
        </div>

           
        </Layout>
    )
}


export const getStaticPaths = async() => {
    const files = fs.readdirSync(path.join('posts'))
   
            console.log(files.length)
    const numPages = Math.ceil(files.length/POSTS_PER_PAGE)
 
    let paths = [];
    for(let i = 1 ; i<=numPages; i++){
        paths.push({
            //generate paths 
            params: { page_index: i.toString() }
        })

      
    }
    //returns an array of object having params
    console.log(paths)
 
    return {
        paths,
        fallback:false

    }
}

//always return an object with getStaticProps
export const getStaticProps = async ({params}) => {
    //checks the page index and if it does not exist it set to one.
    const page = parseInt((params && params.page_index) || 1)

    const files = fs.readdirSync(path.join('posts'))

    const posts =getPosts()

    const categories = posts.map((post) => post.frontMatter.category)



const uniqueCategories = [...new Set(categories)]
console.log(uniqueCategories)
    //gets the number of pages
    const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

    const pageIndex = page -1
    
    const orderedPosts = posts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) *POSTS_PER_PAGE)


    return {
        props: {
            posts: orderedPosts,
            numPages,
            currentPage:page,
            categories:uniqueCategories
        }
    }
}