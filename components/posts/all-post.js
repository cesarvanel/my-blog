
import styles from './all-post.module.css' ;
import PostGrid from './post-grid';

function AllPost(props){

    return(
        <section className= {styles.posts}>
            <h2>All Posts</h2>
            <PostGrid posts = {props.post}/>
        </section>
    )

}

export default AllPost