import React from 'react'
import Image from 'next/image'
import { SnippetCard, SnippetBody, SnippetHeading, SnippetExcerpt, SnippetLink, LinkArrow } from './Snippet.style'
import Link from 'next/link'

const Snippet = ({ post }) => {

    return (

       
                          
        <SnippetCard>
            <SnippetBody>
                <Link href={`/snippet/${post.slug}`}>
         
                <SnippetHeading> {post.frontmatter.title}</SnippetHeading>
          
                </Link>
                <SnippetExcerpt>
                    {post.frontmatter.excerpt}
                </SnippetExcerpt>
                <SnippetLink href={`/blog/${post.slug}`}> Read More   </SnippetLink>
           
        
            </SnippetBody>
          
        </SnippetCard>
       
    )
}

export default Snippet