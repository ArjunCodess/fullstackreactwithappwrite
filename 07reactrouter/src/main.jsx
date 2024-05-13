import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Github, { githubInfoLoader } from './components/Github.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user' element={<User />} >
        <Route path=':userId' element={<User />} />
      </Route>
      <Route loader={ githubInfoLoader } path='github' element={<Github />} />
      <Route path='*' element={<div className='font-bold text-4xl text-center flex justify-center items-center h-[80vh]'>404 NOT FOUND</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
