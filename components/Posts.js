import React from 'react'

const Posts = ({title,content}) => {
  return (
    <div className='p-10 bg-zinc-200 rounded w-1/3 mb-10 '>
      <div className='flex flex-col gap-y-5'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <p className='font-semibold'>{content}</p>
      </div>
      

    </div>
  )
}

export default Posts