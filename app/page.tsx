
import fs from 'fs'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const getPostMetaData = () => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)

  const markdownPosts = files.filter((file)=> file.endsWith(".md"))
  const slugs = markdownPosts.map((file)=> file.replace('.md',''))
  return slugs
}

const HomePage = () => {

  const postMetadata = getPostMetaData()
  const postPreviews = postMetadata.map((slug)=>( 
    <div key={slug}>
      <Link href={`posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
    ))

  return <div>{postPreviews}</div>
};

export default HomePage