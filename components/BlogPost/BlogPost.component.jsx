import React from 'react'
import Image from 'next/image'
import { BlogPostCard, BlogPostBody, BlogPostHeading, BlogPostExcerpt, BlogPostLink, LinkArrow } from './BlogPost.style'


const BlogPost = ({ post }) => {

    return (
        <BlogPostCard href={`/blog/${post.slug}`}>
            <BlogPostBody>
                <BlogPostHeading> {post.frontmatter.title}</BlogPostHeading>
                <BlogPostExcerpt>
                    {post.frontmatter.excerpt}
                </BlogPostExcerpt>
                <BlogPostLink href={`/blog/${post.slug}`}> Read More <span> <LinkArrow />  </span>  </BlogPostLink>
           
        
            </BlogPostBody>
          
        </BlogPostCard>
    )
}

export default BlogPost