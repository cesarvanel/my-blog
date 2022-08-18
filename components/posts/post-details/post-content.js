import ReactMarkdown from "react-markdown";
import reactMarkdown from "react-markdown";
import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";

function PostContent(props) {
  const { post } = props;

  const imagepath = `/images/post/${post.image}`;

  const customrenderes = {
    /*image(image) {
      return (
        <Image
          src={`/images/post/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },*/
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/post/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagepath} />
      <ReactMarkdown renderers={customrenderes}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
