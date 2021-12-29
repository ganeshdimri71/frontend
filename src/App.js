import React,{useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import PostLoadingComponent from './components/PostLoading'
import Posts from './components/Posts'

function App() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading:false,
    posts:null,
  })
  useEffect(()=>{
    const apiUrl = 'http://127.0.0.1:8000/api/';
    fetch(apiUrl)
    .then((response)=>response.json())
    .then((posts)=>{
      setAppState({loading:false, posts:posts});
    }),[setAppState]
    // axios.get('http://127.0.0.1:8000/api/').then((response)=>response.json())
    // .then((data)=>console.log(data))

  },[])
  return (
    <div className='App'>
    <h1>Latest Posts...!</h1>
    <PostLoading isLoading={appState.loading}
    posts={appState.posts} />
    </div>
  )
}

export default App
