// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentuser} = useSelector(state => state.user);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Profile</h1>
      <form  className='flex flex-col gap-4'> 
        <img src={currentuser.avatar} alt="profile" 
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <input type="text" placeholder="username" id="username " className='border p-3 rounded-lg' />
        <input type="email" placeholder="email" id="email " className='border p-3 rounded-lg' />
        <input type="password" placeholder="password" id="password " className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg uppercase p-3 hover:opacity-95 disabled:opacity-95'>update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
