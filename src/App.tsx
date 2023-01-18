import React from 'react';
import { useState,useEffect } from 'react';
import {IPost} from './Interface/IPost';
import { Blog } from './Components/Blog';
import './App.css';

function App() {

  const [Allposts, setAllPosts] = useState<IPost[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/posts/')
      const data = await response.json()
      setAllPosts(data.posts)
    }
    getData()
  }, [])

  const posts = (t: string) => Allposts.filter(p => p.tags.includes(t));
  const sections = ['classic', 'crime', 'magical', 'mystery', 'love'];

  return (
    <div className="App">
      <nav className="header">
        <h1>Tiny Blog</h1>
      </nav>

      {sections.map(s =>
        <Blog posts={posts(s)} tag={s}/>)
      }
    </div>
  );
}

export default App;
