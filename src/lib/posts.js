import  path from 'path'
import {glob, globSync, Glob} from 'glob'
import fs from 'fs'
import matter from 'gray-matter'
import { sortByDate } from '@/utils/sortByDate'
import readingTime from 'reading-time'
import {serialize} from 'next-mdx-remote/serialize'
import imageSize from 'rehype-image-size'

//syntax highlighting
import { remarkCodeHike } from "@code-hike/mdx"
import theme from "shiki/themes/solarized-dark.json"


//plugins

import remarkToc from 'remark-toc'  //generates table of content
import rehypeFormat  from 'rehype-format' //make html in markdown more readable
import rehypeSlug from 'rehype-slug' //add id attributes to headings without ids
import rehypeCodeTitles from 'rehype-code-titles' //parsing code blocks and adding titles to code blocks 
import rehypeAutolinkHeadings from 'rehype-autolink-headings' // it adds l;inks from headings back to themselves
import remarkMdxImages from 'remark-mdx-images' //change images to javascript imports using mdx



//get posts path

const ROOT = process.cwd()
const postsDirectory = path.join(ROOT, 'content/posts')


//public path
const PUBLIC_PATH  = path.join(ROOT, 'public')


//array to store all our file paths
const blogFiles = [];
//function to get all posts in the subdirectory method one


// const readTargetDir = (directory) => { 
//     //console.log(directory)
//     fs.readdirSync(directory).forEach((file) => {

//         //console.log(file)
//         const absoluteFilePath = path.join(directory, file)
//         //.isDirectory() checks if path is a file or directory
//         //console.log(absoluteFilePath)
//         if(fs.statSync(absoluteFilePath).isDirectory()){
//             return readTargetDir(absoluteFilePath)
//         }else{
//             return blogFiles.push(absoluteFilePath)
//         }
//     })
// }
// readTargetDir(postsDirectory)

//  //console.log(blogFiles)

//function to get all posts in the subdirectory method two
// const getFilesRecursively = (directory) => {
//     const filesInDirectory = fs.readdirSync(directory)
//     for(const file of filesInDirectory){
//         const absolute = path.join(directory, file) ;
//         //.isDirectory() checks if path is a file or directory
//         if(fs.statSync(absolute).isDirectory()){
//             getFilesRecursively(absolute)
//         }else if(absolute.includes('.mdx')){
//         blogFiles.push(absolute.replace(`${directory}/`, ''))
//         }
    
//     }
// }

// getFilesRecursively(postsDirectory)
// console.log(blogFiles)


//function to get all posts in the subdirectory method three
const getFilesFromSubDirectories = (dir, fileTypes) => {

    const walkDir = (currentPath) => {
        const files = fs.readdirSync(currentPath)
        for(let i in files) {
            let currentFile = path.join(currentPath, files[i])
            if(fs.statSync(currentFile).isFile() && fileTypes.indexOf(path.extname(currentFile)) !=-1){

                console.log(currentFile)

                blogFiles.push(currentFile.replace(`${dir}/`, ''))
            }else if(fs.statSync(currentFile).isDirectory()){

                walkDir(currentFile)
            }
        }
    }

    walkDir(dir)

    return blogFiles
}

getFilesFromSubDirectories(postsDirectory, ['.mdx'])

//console.log(blogFiles)

export const getAllPosts = () => {
    //const fileNames = fs.readdirSync(postsDirectory)

    const posts = blogFiles?.map((fileName) => {
        //console.log(fileName)
        

        const slug = fileName.replace('.mdx', "" )

        const fullPath = path.join(postsDirectory, fileName)
        //console.log(fullPath)

         const fileContents = fs.readFileSync(fullPath, 'utf-8')
     //console.log(fileContents)

        const {data: frontmatter} = matter(fileContents)

        return {
            slug,
            frontmatter: {
                            wordCount : fileContents.split(/\s+/gu).length,
            readingTime:readingTime(fileContents),
            slug:slug || null,
            ...frontmatter,

            },
        }



    })

    return posts.sort(sortByDate)
}


export const getSinglePost = async(slug) => {
    //gets full path
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    const source = fs.readFileSync(fullPath, 'utf-8')
    
    const {content, data:frontmatter} =  matter(source)

  console.log(content)
    //  console.log(frontmatter)
    const mdxSource = await serialize(content, {
        mdxOptions:{
            remarkPlugins:[[remarkToc, {heading: 'contents'}],[remarkCodeHike,{autoImport:false, theme}], remarkMdxImages],
            rehypePlugins:[rehypeFormat, rehypeSlug,rehypeCodeTitles ,  [rehypeAutolinkHeadings, { behavior: "wrap" }],[imageSize, {dir:'public'}]],
            useDynamicImport: true,
        },
         scope:frontmatter,
    })
     console.log(frontmatter)
    

    return {
      
            slug,
            frontmatter:{
             wordCount : content.split(/\s+/gu).length,
            readingTime:readingTime(content),
            slug:slug || null,
            ...frontmatter,
            }, 
            source:mdxSource

            
}

}