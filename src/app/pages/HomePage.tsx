import CodeArea from '@/components/shared/CodeArea'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex items-center m-10 flex-col h-[80vh]'>
        <h1 className='text-2xl font-extrabold m-3'>Code Review</h1>
        <p className='text-slate-500'>Paste your code to AI powered review</p>
        <CodeArea/>
    </div>
  )
}

export default HomePage