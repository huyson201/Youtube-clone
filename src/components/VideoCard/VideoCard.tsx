import React from 'react'
import avatar from '@assets/images/avatar.jpg'
import thumb from '@assets/images/thumb.webp'
import { Link } from 'react-router-dom'
interface Props {

}

export default function VideoCard({ }: Props) {
    return (
        <div>
            <Link to={"#"} className='w-full'>
                <div>
                    <img className='w-full rounded-lg ' src={thumb} alt="thumb" />
                </div>
            </Link>
            <div className='flex mt-4 gap-4'>
                <Link to={"#"}>
                    <div >
                        <img className='w-8 h-8 rounded-full object-cover' src={avatar} alt='avatar'></img>
                    </div>
                </Link>
                <div className='space-y-1'>
                    <Link className='font-semibold block' to={"#"}>
                        <h2>How to design a Youtube clone with html/css</h2>
                    </Link>
                    <Link className='text-text-secondary text-sm block duration-200 transition-colors hover:text-black' to={"#"}>
                        <div>Web dev simplified</div>
                    </Link>

                    <Link className='text-text-secondary text-sm  block' to={"#"}>
                        <div>1000N lượt xem 1 năm trước</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}