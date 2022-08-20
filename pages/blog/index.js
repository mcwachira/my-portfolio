import Layout from '../../components/Layout'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import Link from "next/link"
import Post from "../../components/Post"
import { sortByDate } from '../../utils'
export default function BlogPage({ posts }) {
  console.log(posts)
  return (
    <Layout>

      <h1 className="text-5xl border-b-4 p-5 font-bold">
       Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}


      </div>

 
    </Layout>
  )
}



//always return an object with getStaticProps
export const getStaticProps = async () => {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((fileName) => {

    const slug = fileName.replace(".md", "");

    const markDownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8')

    const { data: frontMatter } = matter(markDownWithMeta)

    return {
      slug,
      frontMatter

    }
  })


  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}