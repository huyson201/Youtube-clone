import React, { MouseEvent, useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io'
import avatar from '@assets/images/avatar.jpg'
import NavButton from './NavButton'
import Logo from '../Logo/Logo'
import SearchBox from '../SearchBox/SearchBox'
import { Link } from 'react-router-dom'
interface Props {
    onShowLeftNav?: () => void
}

const Navbar = ({ onShowLeftNav }: Props) => {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const handleOpenSearch = () => {
        setActiveSearch(true)
    }

    const handleCloseSearch = () => {
        setActiveSearch(false)
    }

    const handleShowLeftNav = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if (onShowLeftNav) onShowLeftNav()
    }

    return (
        <div>
            <div className='flex items-center   gap-4 top-0 left-0 bg-white z-[1] fixed w-full h-[var(--navbar-height)] justify-between px-4 py-2 shadow'>
                <div className='flex items-center'>
                    <NavButton icons={<HiBars3 />} onClick={handleShowLeftNav} />
                    <Logo />
                </div>
                <SearchBox active={activeSearch} onClose={handleCloseSearch} />
                <div className='flex items-center gap-4'>
                    <NavButton onClick={handleOpenSearch} className='sm:hidden' icons={<IoIosSearch className='text-2xl' />} />
                    <NavButton icons={<RiVideoAddLine className='text-2xl' />} />
                    <NavButton icons={<IoMdNotificationsOutline className='text-2xl' />} />


                    <div className='relative'>
                        <button className='w-8 text-white  focus:outline-none text-center inline-flex items-center '>
                            <img src={avatar} className='rounded-full w-full h-full object-cover' alt="avatar" />
                        </button>
                        <div id="dropdownDelay" className="z-[3] hiden absolute top-0 flex flex-col right-full bg-white  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <Link to="#">

                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar