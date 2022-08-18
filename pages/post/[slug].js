
import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostFile } from "../../lib/post-utils";

function PostDetailsPage(props) {
  return (
    <PostContent post = {props.post}/>
  );
}

export async function getStaticProps(context){

    const slug = context.params.slug;

  
    const detailPost = getPostData(slug) ; 

    if(!detailPost){

      return(
        <p>Loading ...</p>
      )
    }

    return{

      props: {

        post : detailPost
      }
    }
}

export async function getStaticPaths(){


  const postFilenames = getPostFile()

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/,''));

  const pathwithPost = slugs.map((slug) => ({params : {slug: slug}}));


  return{
     
    paths : pathwithPost, 
    fallback : false
  }

}
export default PostDetailsPage;
