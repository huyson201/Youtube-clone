import React from 'react'
import './LeftSide.css'
import { Link } from 'react-router-dom'
import { IoHomeSharp, IoHomeOutline } from 'react-icons/io5'
import { MdOutlineSubscriptions } from 'react-icons/md'
type Props = {}

const LeftSide = (props: Props) => {
    return (
        <div className='left-side py-4 bg-white w-[var(--leftSide-width)] hidden md:block'>
            <SidebarOptions icon={<IoHomeSharp />} title='Trang chủ' />
            <SidebarOptions icon={<MdOutlineSubscriptions className='text-2xl h-6 w-6 min-w-[24px]' />} title='Kênh đăng ký' />
        </div>
    )
}

export default LeftSide


export interface LeftSideItemsProps {
    icon: React.ReactNode,
    title: string
}

export const SidebarOptions = ({ icon, title }: LeftSideItemsProps) => {
    return (
        <Link to={"#"} className='gap-2 text-center flex items-center justify-center py-2 w-full hover:bg-[#f2f2f2] rounded-md flex-col text-[10px]'>
            <span className='text-xl'>{icon}</span>
            {title}
        </Link>
    )
}