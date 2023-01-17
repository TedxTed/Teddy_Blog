import fs from 'fs'
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) =>{
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  console.log('-----------');
  console.log(`${file}`);
  console.log('-----------');
  
  const content = fs.readFileSync(file, 'utf8')
  return content
}


const PostPage = (props: any) =>{
  const slug = decodeURIComponent(props.params.slug)

  return (
    <div>
      <h1>this is a post: {slug} </h1>
      <Markdown>{getPostContent(slug)}</Markdown>
    </div>
    
  )
}

export default PostPage