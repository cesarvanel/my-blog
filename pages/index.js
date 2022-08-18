
import {Fragment} from 'react'
import Hero from '../components/home-components/hero';
import FeaturedPost from '../components/home-components/featured-post';
import { getFeaturedPost } from '../lib/post-utils';

/*
const Dummy = [
  {
    title : 'get started with nextjs', 
    date: '2022-02-02', 
    execpt: 'Nextjs is the React FrameWork for Production',
    image:'nextjs.png',
    slug: 'p1'

  }
]*/
function HomePage(props) {

  return (
    <Fragment >
      <Hero/>
      <FeaturedPost posts = {props.post}/>   
    </Fragment>
  )
}

export async function getStaticProps(){

  const featuredPost =  getFeaturedPost() ; 

  console.log(featuredPost)

  return{
    props: {

      post : featuredPost,
    },
    revalidate : 50
  }
}

export default HomePage ; 
