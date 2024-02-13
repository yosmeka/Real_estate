// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form className='flex flex-col gap-4'>
      <input type="text" placeholder='Username'  id='usermane' className='p-3 border rounded-lg'/>
      <input type="email" placeholder='email'  id='email' className='p-3 border rounded-lg'/>
      <input type="password" placeholder='password'  id='password' className='p-3 border rounded-lg'/>
      <button className='uppercase text-white bg-slate-700 rounded-lg p-3 hover:opacity-95 disabled:opacity-80'>sign up</button>
    </form>
    <div className='flex gap-2 mt-4'>
      <p>Have an account?</p>
     <Link to={"/sign-in"}> <span className='text-blue-700'>sign in</span></Link> 
    </div>
  </div>
  )
}
