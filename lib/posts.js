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
const postsDirectory = path.join(process.cwd(), 'content/posts')



//function to get the file Contents

export const getFileContents = (fileName) => {
    return fs.readFileSync(path.join(postsDirectory, fileName), 'utf-8')
}

//function to compile my mdx
const getCompiledMDX = async (content) => {
    // console.log(content)
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
    // console.log(content)
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
                return options
            }
        });
    } catch (error) {
        throw new Error(error);
    }
};



//function to show all the blog posts in form of cards
export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory)

    const allPosts = fileNames.map((fileName) => {
//    console.log(fileName)
        //used as a link to the individual post
        const slug = fileName.replace('.mdx', "")

        const fullPath = path.join(postsDirectory, fileName)

        const fileContent = fs.readFileSync(fullPath, 'utf-8')

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
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {

        return {
            params: {
                slug: fileName.replace('.mdx',)

            }

        }

    })

}

export const getSinglePost = async (slug) => {
    // const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    // console.log(fullPath)
    // const source = fs.readFileSync(fullPath, 'utf-8')
    // const {data:frontmatter, content} = matter(source)

    const source = getFileContents(`${slug}.mdx`)
    // console.log(source)
    //bundleMdx gets code in the server side + parsing frontmatter for us
    const { code, frontmatter } = await getCompiledMDX({source:source})
    // console.log(frontmatter)
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