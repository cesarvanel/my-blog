
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postdirpath = path.join(process.cwd(), 'posts')

export function getPostFile() {

    return fs.readdirSync(postdirpath);
}

export function getPostData(postidentifier){

    const postSlug = postidentifier.replace(/\.md$/,'');
    const filepath = path.join(postdirpath, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filepath, 'utf-8')
    const {data, content} = matter(fileContent)

     // remove the files extensions 

    const postData = {
        slug : postSlug, 
        ...data,
        content 
    }
    return postData ;
}

export function getAllPosts(){

   const postFiles =  fs.readdirSync(postdirpath)

    const allPost = postFiles.map((postFile) =>{
        return getPostData(postFile)
    });

    const sortedPost = allPost.sort((postA,postB) => postA.data > postB.data ? -1 : 1)

    return sortedPost ;  
}

export function getFeaturedPost(){

    const allPost = getAllPosts()

    const featuredPost = allPost.filter((post) => post.isFeatured) ;

    return featuredPost ;
}

export function getDetailPost(slug){

    const allpost = getAllPosts() ; 

    const detailPost = allpost.filter((post) => post.slug === slug)

    return detailPost ; 


}