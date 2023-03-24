
import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
type Props = {}

export default function Logo({ }: Props) {
    return (
        <Link to={"/"} className='flex items-center gap-2 ml-4'>
            <BsYoutube className='text-3xl text-yt-red' />
            <span className='text-black font-roboto text-xl font-extrabold'>Youtube</span>
        </Link>
    )
}