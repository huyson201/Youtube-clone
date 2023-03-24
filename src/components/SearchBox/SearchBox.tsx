import NavButton from '@components/Navbar/NavButton'
import classNames from 'classnames'
import React, { useState } from 'react'
import { IoIosSearch, IoMdArrowBack } from 'react-icons/io'
interface Props {
    onClose?: () => void,
    active?: boolean
}

export default function SearchBox({ active, onClose }: Props) {
    return (
        <div className={classNames(`absolute w-full top-0 left-0 h-full bg-white z-[4]  gap-4 hidden [&.active]:flex items-center px-4 
                                     sm:w-2/4 sm:static sm:block`, { active })}>
            <NavButton onClick={onClose} className='sm:hidden' icons={<IoMdArrowBack className='text-xl' />} />
            <div className=' w-full flex  border border-border-button rounded-full pl-4'>
                <input className='outline-none flex-1 text-left text-base ' type="text" placeholder='Tìm kiếm' />
                <button className='w-14 h-[36px] bg-search-button-color rounded-tr-full rounded-br-full  flex justify-center items-center
             border-border-button border-l hover:bg-search-button-hover duration-200 transition'><IoIosSearch />
                </button>
            </div>
        </div>
    )
}