import React from 'react'
import Image from 'next/image'
import { BlogPostCard, BlogPostBody, BlogPostHeading, BlogPostExcerpt, BlogPostLink, LinkArrow } from './BlogPost.style'
import Link from 'next/link'

const BlogPost = ({ post }) => {

    return (

       
                          
        <BlogPostCard>
            <BlogPostBody>
                <Link href={`/blog/${post.slug}`}>
    
                <BlogPostHeading> {post.frontmatter.title}</BlogPostHeading>
       
                </Link>
                <BlogPostExcerpt>
                    {post.frontmatter.excerpt}
                </BlogPostExcerpt>
                <BlogPostLink href={`/blog/${post.slug}`}> Read More   </BlogPostLink>
           
        
            </BlogPostBody>
          
        </BlogPostCard>
       
    )
}

export default BlogPost