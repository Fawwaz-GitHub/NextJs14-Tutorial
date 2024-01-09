import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date}>08/08/2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <Link className={styles.link} href="/blogs/post">READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard