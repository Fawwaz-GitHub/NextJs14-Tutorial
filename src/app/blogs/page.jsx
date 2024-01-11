import PostCard from "@/components/postCard/PostCard"
import styles from "./blogs.module.css"
import { getPosts } from "@/lib/data"

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache : "force-cache"})

  if(!res.ok){
    throw new Error("Something Went Wrong")
  }

  return res.json();
}

const BlogPage = async () => {

  const posts = await getPosts();

  return (    
    <div className={styles.container}>
      { posts.map((post) => {
        return <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      })}
    </div>
  )
}

export default BlogPage