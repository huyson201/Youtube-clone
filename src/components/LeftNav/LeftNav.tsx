import Logo from '@components/Logo/Logo'
import NavButton from '@components/Navbar/NavButton'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { IoHomeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

interface Props {
    active?: boolean,
    onClose?: () => void,
    onClickOutside?: () => void
}

const LeftNav = ({ active, onClose, onClickOutside }: Props) => {
    const leftNavRef = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (leftNavRef.current && leftNavRef.current.contains(event.target)) return

            if (onClickOutside) onClickOutside()
        }

        window.document.addEventListener("click", handleClickOutside)
        return () => window.document.removeEventListener("click", handleClickOutside)
    })
    return (
        <>
            <div className={classNames('fixed hidden [&.active]:block peer z-[6] w-full h-screen bg-black/70 top-0 left-0', { active })}></div>

            <div ref={leftNavRef} className={classNames('fixed z-[7] w-[240px] h-screen bg-white top-0 -translate-x-full [&.active]:translate-x-0 left-0 transition-all duration-300 py-2', { active })}>
                <div className='flex h-12 py-2 px-4 items-center'>
                    <NavButton icons={<HiBars3 />} onClick={onClose} />
                    <Logo />
                </div>
                <div className='px-4 mt-2'>
                    <LeftNavOption icon={<IoHomeSharp className='text-xl' />} title='Trang chủ' />
                </div>
            </div>
        </>
    )
}

export default LeftNav

interface LeftNavProps {
    icon: React.ReactNode,
    title: string,
    sidebarActive?: boolean
}

export function LeftNavOption({ icon, title, sidebarActive }: LeftNavProps) {
    return (
        <Link to={"#"} className={classNames(" whitespace-nowrap flex gap-6 hover:bg-search-button-hover py-2 px-2 rounded-lg items-center justify-start flex-nowrap text-sm font-normal")}>
            <span> {icon}</span>
            <span className='side-bar_opts-text'>{title}</span>
        </Link>
    )
}