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

    // #CCD6F6
  return (
      <PostCard>
    {/* <Image src={post.frontmatter.cover_image} alt={post.frontmatter.title}
    height={200} width={100}/> */}
         
<PostCardTop>
<PostCardTopChild>
<Calendar size={30}/>
                  <span>
                      {post.frontmatter.date}
                  </span>

</PostCardTopChild>
  
<PostCardTopChild>
    <Watch size={30}/>
    <span>{post.frontmatter.readingTime.text}</span>
</PostCardTopChild>
              <PostCardTopChild>
                  <Eye size={30} />
                  <span>views</span>
              </PostCardTopChild>
    <span style={{marginLeft:'.5rem'}}>
        {post.frontmatter.category}
    </span>
</PostCardTop>

          
<PostBody>

              <Link href={`/blog/${post.slug}`}>
                  <a>
                      <PostHeading> {post.frontmatter.title}</PostHeading>
                  </a>
              </Link>
           
    <PostExcerpt>
        {post.frontmatter.excerpt}
    </PostExcerpt>
              
</PostBody>
          <PostLink href={`/blog/${post.slug}`}> Read More <span> <LinkArrow/>  </span>  </PostLink>
    </PostCard>
  )
}

export default Post