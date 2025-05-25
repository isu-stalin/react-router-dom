import React from 'react'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Post from './pages/post/Post'
import User from './pages/user/User'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import NotFound from './pages/notFound/NotFound'
import ProductDetail from './pages/product-detail/ProductDetail'
import Dashboard from './pages/dashboard/Dashboard'
import Group from './pages/dashboard/group/Group'
import Student from './pages/dashboard/student/Student'
import Profile from './pages/dashboard/profile/Profile'
import Notifications from './pages/dashboard/notifications/Notifications'
import Courses from './pages/dashboard/courses/Courses'
import Teachers from './pages/dashboard/teachers/Teachers'
import MyFiles from './pages/dashboard/my-files/MyFiles'
import Records from './pages/dashboard/records/Records'
import Briefing from './pages/dashboard/briefing/Briefing'
import Settings from './pages/dashboard/settings/Settings'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='recipes' element={<Recipe/>} />
          <Route path='users' element={<User/>} />
          <Route path='posts' element={<Post/>} />
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='*' element={<NotFound/>} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Group/>}/>
          <Route path='student' element={<Student/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='notifications' element={<Notifications/>}/>
          <Route path='my-files' element={<MyFiles/>}/>
          <Route path='teachers' element={<Teachers/>}/>
          <Route path='briefing' element={<Briefing/>}/>
          <Route path='records' element={<Records/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App