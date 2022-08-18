import Link from "next/link";
import Image from "next/image";
import styles from "./post-items.module.css";

function PostItem(props) {
  const { title, date, execpt, image, slug } = props.post;

  const formateddate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const linkpath = `/post/${slug}`

  return (
    <li className={styles.post}>
      <Link href={linkpath}>
        <a>
          <div className={styles.image}>
            <Image
              src={`/images/post/${image}`}
              alt={title}
              width={300}
              height={200}
              layout = 'responsive'
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formateddate}</time>
            <p>{execpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
