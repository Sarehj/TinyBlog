import React, { useState } from "react"
import { IPost } from "../Interface/IPost"
import { Post } from './Post'
import './style.css'
import { BiChevronsRight, BiChevronsDown } from "react-icons/bi"


interface IBlog {
    tag: string
    posts: IPost[]
}


export const Blog = ({posts, tag}: IBlog) => {
    const [toggle, setToggle] = useState(true)
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => setToggle(!toggle)

    
return(
    <div>
      <main className="container">
       <div  onClick={ handleClick } >
        <h3 className="category">{tag}</h3>
        {toggle ?
          <>
            <BiChevronsDown/>
            <section className="article-container">
            {posts.map(post => <Post post={post}/>)}
            </section>
          </> 
         : 
          <BiChevronsRight/>
        }
       </div>
    </main>
  </div>
)
}
