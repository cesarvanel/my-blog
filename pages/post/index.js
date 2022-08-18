
import { Fragment } from "react";
import AllPost from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-utils";

function AllpostPage(props) {
    return (
      
      <Fragment>
        <AllPost post = {props.posts}  />
      </Fragment>
    )
}

export async function getStaticProps(){

  const posts = getAllPosts()

  return{

    props: {

      posts : posts
    }
  }
}
  
  export default AllpostPage ; 