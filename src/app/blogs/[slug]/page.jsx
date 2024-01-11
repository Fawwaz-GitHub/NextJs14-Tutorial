import { Suspense } from "react"
import styles from "./singlePost.module.css"
import Image from "next/image"
import { getPost, getUser } from "@/lib/data"

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: "no-store"})

  if(!res.ok){
    throw new Error("Something Went Wrong")
  }

  return res.json();
}

const get_User = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "no-store"})

  if(!res.ok){
    throw new Error("Something Went Wrong")
  }

  return res.json();
}

const SingleBlogPage = async ({ params }) => {

  const { slug } = params;
  const post = await getPost(slug);
  const user = await getUser(post.userId)
  console.log("USER", post)

  return (
    <div className={styles.container}>
      { post.img &&
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="" fill className={styles.img}/>
      </div>
      }
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          { post &&
          <div className={styles.subcontainer}>
            {/* <Image src={user.img ? user.img : "/noavatar.png"} alt="" fill className={styles.avatar}/> */}
            <div className={styles.texts}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>{user.username}</span>
            </div>
          </div>
          }
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.date}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage