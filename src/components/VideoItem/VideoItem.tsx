import React from 'react'
import thumb from '@assets/images/thumb.webp'
import { Link } from 'react-router-dom'
type Props = {}

const VideoItem = (props: Props) => {
    return (
        <div className='mt-4 sm:mt-0 flex flex-col sm:flex-row gap-4 lg:gap-2'>
            <div className='w-full sm:w-[168px]' >
                <Link className='inline-block w-full' to={"#"}><img className='w-full rounded-md' src={thumb} alt="thumb" /></Link>
            </div>
            <div className='flex-1'>
                <Link to={"#"}>
                    <h3 className='text-base leading-5  text-black font-medium sm:line-clamp-2 '>Build and Deploy 3 Modern React API Applications in 8 Hours - Full Course | RapidAPI</h3>
                    <div className='text-text-secondary text-xs mt-1'>Javascript Mastery</div>
                    <div className='text-text-secondary text-xs mt-0.5'>70 N lượt xem &#x2022; 5 ngày trước</div>
                </Link>
            </div>
        </div>
    )
}

export default VideoItem