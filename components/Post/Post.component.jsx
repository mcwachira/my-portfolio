import React from 'react'
import Image from 'next/image'
import { PostCard , PostCardTop,PostBody,  PostLink} from './Post.style'

const Post = ({post}) => {
//    console.log(post)
  return (
    <PostCard>
    <Image src={post.frontmatter.cover_image} alt={post.frontmatter.title}
    height={200} width={100}/>
         
<PostCardTop>
    <span>
        {post.frontmatter.date}
    </span>

    <span>
        {post.frontmatter.category}
    </span>
</PostCardTop>

<PostBody>
    <PostLink href={`/blog/${post.slug}`}> {post.frontmatter.title}</PostLink>

    <p>
        {post.frontmatter.excerpt}
    </p>
              <PostLink href={`/blog/${post.slug}`}> Read More</PostLink>
</PostBody>
    </PostCard>
  )
}

export default Post