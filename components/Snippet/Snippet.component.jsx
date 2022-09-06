import React from 'react'
import Image from 'next/image'
import { SnippetCard, SnippetBody, SnippetHeading, SnippetExcerpt, SnippetLink, LinkArrow } from './Snippet.style'
import Link from 'next/link'

const Snippet = ({ post }) => {

    return (

       
                          
        <SnippetCard>
            <SnippetBody>
                <Link href={`/snippet/${post.slug}`}>
                    <a>
                <SnippetHeading> {post.frontmatter.title}</SnippetHeading>
                    </a>
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