import Link from 'next/link'
import React from 'react'
import {FiArrowLeftCircle} from "react-icons/fi"
import PostForm from '../_components/post-form'

const NewPostPage = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-screen-lg'>
        <nav className='flex items-center p-2'>
          <Link
          href={'/'}
          className='flex items-center '>
            <FiArrowLeftCircle className='h-6 w-6' /><span>Home</span>
            <p className='text-xl ml-4 font-extrabold text-gray-600 lead py-4'>MyBlog</p>
          </Link>
        </nav>
        <PostForm />
      </div>
    </div>
  )
}

export default NewPostPage