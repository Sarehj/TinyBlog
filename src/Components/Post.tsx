import React from 'react';
import { IPost } from '../Interface/IPost';
import './style.css'
interface ICard {
    post: IPost
}

export const Post = ({post}: ICard) => {
  return (
    <article className="article-card">
      <div className="article-content">
        <h3 className='card-title'>{post.title}</h3>
        <p className='card-excerpt'>{post.body}</p>
        <footer>
          <div className='tags'>
            {post.tags.map(tag => <label className='tag'>{tag}</label>)}
          </div>
          <div className='reaction'>reactions: {post.reactions}</div>
        </footer>
     </div>
    </article>
  )
}
