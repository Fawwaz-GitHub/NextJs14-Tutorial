import styles from "./singlePost.module.css"
import Image from "next/image"

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          {/* <Image src="/noavatar.png" alt="" fill className={styles.avatar}/> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Marc Anderson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>08/01/2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet iste nam at rerum. Voluptates fugit vitae voluptatibus, pariatur sit laboriosam aspernatur et itaque natus eveniet obcaecati tempora quam error? Consequatur?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit molestiae sunt corporis modi, obcaecati esse iste dolorem nostrum fuga sequi veritatis minima animi in ad maxime? Nihil enim velit quis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed vero, eaque dolorem illum vitae rem distinctio necessitatibus quod odio consectetur doloribus voluptatibus magnam laborum debitis aut voluptate laboriosam amet.
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage