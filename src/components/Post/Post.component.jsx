import React from 'react'
import Image from 'next/image'
import { PostCard, PostCardTop, PostCardTopChild, PostBody, PostHeading, PostExcerpt , PostLink, LinkArrow } from './Post.style'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { Calendar } from 'styled-icons/zondicons'
import { Watch } from 'styled-icons/material-outlined'
// import { Watch } from 'styled-icons/boxicons-solid'
import { Eye } from 'styled-icons/bootstrap'
import Link from 'next/link'

const Post = ({post}) => {

  console.log(post.slug)
  return (
      <PostCard>
    {/* <Image src={post.frontmatter.cover_image} alt={post.frontmatter.title}
    height={200} width={100}/> */}
         
<PostCardTop>

<PostCardTopChild>

<span>
        #{post.frontmatter.category}
    </span>
</PostCardTopChild>


<PostCardTopChild>

    <span>{post.frontmatter.readingTime.text}</span>
</PostCardTopChild>
           
{/* <PostCardTopChild>

                  <span>
                      {post.frontmatter.date}
                  </span>

</PostCardTopChild> */}

</PostCardTop>

          
<PostBody>

              <Link href={`/blog/${post.slug}`}>
            
                      <PostHeading> {post.frontmatter.title}</PostHeading>
                  
              </Link>
           
    <PostExcerpt>
        {post.frontmatter.excerpt}
    </PostExcerpt>
              
</PostBody>
          <PostLink href={`/blog/${post.slug}`}> Read More  </PostLink>
    </PostCard>
  )
}

export default Post