import matter from 'gray-matter'
import fs from 'fs'
import path from 'path' 
import { sortByDate } from "@/utils/index"


const files = fs.readdirSync(path.join('posts'))


export  const getPosts = () => {
    const posts = files.map((fileName) => {

        const slug = fileName.replace(".md", "");

        const markDownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8')

        const { data: frontMatter } = matter(markDownWithMeta)

        return {
            slug,
            frontMatter

        }
    })

    return posts.sort(sortByDate)
}
