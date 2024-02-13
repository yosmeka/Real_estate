// eslint-disable-next-line no-unused-vars
// import React from 'react'
import Home from "./pages/Home"
import SignIn from "./pages/SignUp"
import SignUp from "./pages/SignIn"
import Profile from "./pages/Profile"
import About from "./pages/About"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from "./component/Header"


export default function App() {
  return (
<BrowserRouter>
<Header />
<Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/Sign-in' element={<SignIn />}/>
   <Route path='/Sign-up' element={<SignUp />}/>
   <Route path='/About' element={<About />}/>
   <Route path='/Profile' element={<Profile />}/>

</Routes>
</BrowserRouter>
  )
}
