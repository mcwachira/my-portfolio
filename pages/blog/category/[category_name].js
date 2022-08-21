
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link"
import Layout from "@/components/Layout"
import Post from "@/components/Post"
import { getPosts } from "@/lib/posts"
import CategoryList from '@/components/CategoryList'
export default function CategoryPage({ posts, categoryName , categories}) {

    return (
     <Layout>
    
        <div className="flex justify-between">
            <div className="w-3/4 mr-10">
                    <h1 className="text-5xl border-b-4 p-5 font-bold">
                        Posts in {categoryName}
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}


                    </div>
                  
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
    const categories = files.map((fileName) => {

        const markDownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8')
        
        const {data:frontMatter} =matter(markDownWithMeta)
        

        return frontMatter.category
    })
    console.log(categories)
    
    const paths= categories.map((category) => ({
        params:{

            category_name:category.toLowerCase()
        }
    }))

    return {
        paths:paths,
        fallback:false
    }
}

//always return an object with getStaticProps
export const getStaticProps = async ({params:{category_name}}) => {


    const files = fs.readdirSync(path.join('posts'))

    const posts = getPosts()


    const categories = posts.map((post) => post.frontMatter.category)



    const uniqueCategories = [...new Set(categories)]
    console.log(uniqueCategories)
    //filter by category
    const CategoryPosts = posts.filter(post => post.frontMatter.category.toLowerCase() ===category_name)
  console.log(CategoryPosts)

    return {
        props: {
            posts: CategoryPosts,
            categoryName:category_name,
            categories:uniqueCategories
        }
    }
}