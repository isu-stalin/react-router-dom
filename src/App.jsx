import React from 'react'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Post from './pages/post/Post'
import User from './pages/user/User'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='recipes' element={<Recipe/>} />
          <Route path='users' element={<User/>} />
          <Route path='posts' element={<Post/>} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App