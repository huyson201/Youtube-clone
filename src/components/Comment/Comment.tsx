import React from 'react'
import avatar from '@assets/images/avatar.jpg'

type Props = {}

const Comment = (props: Props) => {
    return (
        <div className='mt-8 pb-8'>
            <div className=''>616 Bình luận</div>
            <div className='mt-4 space-y-6'>
                <CommentForm />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />

            </div>
        </div>
    )
}

const CommentItem = () => {
    return (
        <div className='flex gap-4'>
            <div className='w-10  h-10'>
                <img src={avatar} className='rounded-full w-full h-full object-cover' alt="avatar" />
            </div>
            <div className='flex-1'>
                <div><span className='text-sm font-bold'>Tanush Sathiyaseelan</span> <span className='text-xs text-text-secondary'> 1 năm trước</span></div>
                <p className='text-sm'>
                    To all the beginners. This video is great for you to practice however most of the things like the videos in the homepage and their details and when u play a video most of the details actually come from the database. So don't get confused. For every video there isn't many HTML pages. They trigger events and data comes from databases.
                </p>
            </div>
        </div>
    )
}

const CommentForm = () => {
    return (
        <div className='flex gap-4'>
            <div className='w-10  h-10'>
                <img src={avatar} className='rounded-full w-full h-full object-cover' alt="avatar" />
            </div>
            <div className='flex-1'>
                <div className='text-sm border-b py-1 border-black/40  focus-within:after:w-full peer
                                relative after:content-[""] after:absolute after:top-full after:left-2/4 after:-translate-x-2/4 
                                after:w-0 after:h-[2px] after:transition-[width] after:duration-300 after:bg-black '>
                    <input className='w-full  outline-none' type="text" placeholder='Viết bình luận...' />
                </div>
                <div className=' justify-end mt-4 gap-4 hidden peer-focus-within:flex'>
                    <button className='text-sm rounded-3xl font-medium py-2 px-4 transition duration-200 hover:bg-light-gray'>Hủy</button>
                    <button className='text-sm rounded-xl font-medium py-2 px-4 disabled [&.disabled]:bg-[#f2f2f2] [&.disabled]:pointer-events-none [&.disabled]:text-text-secondary'>Bình luận</button>
                </div>
            </div>
        </div>
    )
}

export default Comment