import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { SortByDate } from '@/utils/sortByDate'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'


//generating table of content from markdown
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'

import rehypeFormat from 'rehype-format'
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMdxImages from 'remark-mdx-images'

const ROOT = process.cwd()
const postsDirectory = path.join(ROOT, 'content/posts')

const PUBLIC_PATH = path.join(ROOT, 'public')

//function to get the file Contents

export const getFileContents = (fileName) => {
    return fs.readFileSync(path.join(postsDirectory, fileName), 'utf-8')
}

//function to compile my mdx
const getCompiledMDX = async (content) => {
    // (content)
    if (process.platform === "win32") {
        process.env.ESBUILD_BINARY_PATH = path.join(
            ROOT,
            "node_modules",
            "esbuild",
            "esbuild.exe"
        );
    } else {
        process.env.ESBUILD_BINARY_PATH = path.join(
            ROOT,
            "node_modules",
            "esbuild",
            "bin",
            "esbuild"
        );
    }
    // (content)
    // Add your remark and rehype plugins here
    const remarkPlugins = [
       [ remarkToc, { heading: 'contents' }],
       remarkGfm,
        remarkMdxImages
    
    ];
    const rehypePlugins = [rehypeFormat, 
        rehypeSlug, 
        rehypeCodeTitles]
        [
        rehypeAutolinkHeadings,
        {
            properties: {
                className: ['heading_title']
            }
        }];

    try {
        return await bundleMDX(content, {
            xdmOptions(options) {
                options.remarkPlugins = [
                    ...(options.remarkPlugins ?? []),
                    ...remarkPlugins,
                    
                ];
                options.rehypePlugins = [
                    ...(options.rehypePlugins ?? []),
                    ...rehypePlugins,
                ];

                return options;
            },
            esbuildOptions:(options)  =>{
              
                options.loader = {
                    ...options.loader,
                    ".png": "dataurl",
                    ".gif": "dataurl",
                    ".jpg": "dataurl",
                    ".jpeg": "dataurl",
                    ".svg": "dataurl",
                }
                options.outdir = path.join(rocess.cwd(), 'images')
                options.publicPath ='/img/posts/'
                options.write=true

                return options
            }
        });
    } catch (error) {
        throw new Error(error);
    }
};


//function to get all the posts in the sub directory
const BlogFiles = []
const getFilesFromSubDirectories = (dir, fileTypes) =>{

    const walkDir = (currentPath)  =>{
            const files = fs.readdirSync(currentPath)
            for(let i in files) {
                let currentFile = path.join(currentPath, files[i])
            
            if(fs.statSync(currentFile).isFile() && fileTypes.indexOf(path.extname(currentFile)) !=-1 ){

                //console.log(currentFile)
                BlogFiles.push(currentFile.replace(`${dir}/`, ''))
            }else if(fs.statSync(currentFile).isDirectory()){
                walkDir(currentFile)
            }
        }
    }
 walkDir(dir)
    return BlogFiles
}
getFilesFromSubDirectories(postsDirectory, [".mdx"])
//console.log(BlogFiles)

// const BlogFiles=[]
// const readTargetDir = directory => {

//     fs.readdirSync(directory).forEach(file => {

//         const absoluteFilepath = path.join(directory, file)

//         if (fs.statSync(absoluteFilepath).isDirectory()) {
//             return readTargetDir(absoluteFilepath)
//         } else {
//             return BlogFiles.push(absoluteFilepath)
//         }

//     })

// }
// readTargetDir(postsDirectory)
// console.log(BlogFiles)

const allBlogFiles=[]
const getFilesRecursively = (directory) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            getFilesRecursively(absolute);
        
        
        } else if(absolute.includes('.mdx')) {
            allBlogFiles.push(absolute.replace(`${directory}/`, ''));
        }
    }
};

getFilesRecursively(postsDirectory)
// console.log(allBlogFiles)

//function to show all the blog posts in form of cards
export const getAllPosts = () => {
    // const fileNames = fs.readdirSync(postsDirectory)
    // console.log(fileNames)

    const allPosts = BlogFiles?.map((fileName) => {
   //console.log(fileName)
//    (fileName)
// const name = fileName.replace('/', "")
// console.log(name)
        //used as a link to the individual post
        const slug = fileName.replace('.mdx', "")
// console.log(slug)
        const fullPath = path.join(postsDirectory, fileName)
        //  console.log(fullPath)

        const fileContent = fs.readFileSync(fullPath, 'utf-8')
         //console.log(fileContent)

        // Use gray-matter to parse the post metadata section
        const { data: frontmatter } = matter(fileContent)

        // combines the individual meta data with its slug
        return {
            slug,
            frontmatter: {
                wordCount: fileContent.split(/\s+/gu).length,
                readingTime: readingTime(fileContent),
                slug: slug || null,
                ...frontmatter,
            },
        }
    })

    return allPosts.sort(SortByDate)
}

//function to get all post slugs which will be used as links to the individual posts

export const getAllPostSlugs = () => {
    // const fileNames = fs.readdirSync(postsDirectory)
    return BlogFiles?.map.map((fileName) => {

        return {
            params: {
                slug: fileName.replace('.mdx',)

            }

        }

    })

}

export const getSinglePost = async (slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    // (fullPath)
    const source = fs.readFileSync(fullPath, 'utf-8')
    // const {data:frontmatter, content} = matter(source)
  
    // const source = getFileContents(`${slug}.mdx`)
    // (source)
    //console.log(source)
    //bundleMdx gets code in the server side + parsing frontmatter for us
    const { code, frontmatter } = await getCompiledMDX({source:source})
    // (frontmatter)
    // (slug)
    
    // console.log(slug)
    return {
        slug,
        frontmatter :{
            wordCount:source.split(/\s+/gu).length,
            readingTime:readingTime(source),
            slug: slug || null,
            ...frontmatter,
        },
        code,
    };
}



export const getPostCategory = () => {
   
}