import React, { useState } from 'react';
import PostItems from './Components/PostItems.js';
import PostList from './Components/PostList.js';
import './style/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS 1', body: 'Description'},
    {id: 2, title: 'JS 2', body: 'Description'},
    {id: 3, title: 'JS 3', body: 'Description'},
    {id: 4, title: 'JS 4', body: 'Description'},
    {id: 5, title: 'JS 5', body: 'Description'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="List Title 1"/>
      <PostList posts={posts} title="List Title 2"/>
      <PostList posts={posts} title="List Title 3"/>
    </div>
  );
}

export default App;
