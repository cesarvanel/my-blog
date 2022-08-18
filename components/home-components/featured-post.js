
import styles from './featured-post.module.css'
import PostGrid from '../posts/post-grid';

function FeaturedPost(props){

    return(
        <section className= {styles.latest}>
            <h2>FeaturedPost</h2>
            <PostGrid posts = {props.posts}/>
        </section>
    )

}

export default FeaturedPost ;