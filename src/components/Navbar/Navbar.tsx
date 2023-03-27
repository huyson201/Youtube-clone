import React, { MouseEvent, useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io'
import avatar from '@assets/images/avatar.jpg'
import NavButton from './NavButton'
import Logo from '../Logo/Logo'
import SearchBox from '../SearchBox/SearchBox'
import { Link } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { config } from 'process'
import configs from '@services/youtubeApiConfigs'
import { GOOGLE_LOGIN_SCOPE } from '@services/google'
import { useAuth } from '@contexts/authContext'
interface Props {
    onShowLeftNav?: () => void
}

const Navbar = ({ onShowLeftNav }: Props) => {
    const auth = useAuth()

    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            axios.post('https://oauth2.googleapis.com/token', {
                client_id: configs.clientId,
                client_secret: configs.clientSecret,
                redirect_uri: "http://localhost:5173",
                code: codeResponse.code,
                grant_type: 'authorization_code'
            })
                .then((response) => {
                    // Xử lý kết quả trả về để lấy access token và refresh token
                    const access_token = response.data.access_token;
                    const refresh_token = response.data.refresh_token;

                    axios.get<AuthProfile>('https://www.googleapis.com/oauth2/v3/userinfo', {
                        headers: {
                            Authorization: `Bearer ${access_token}`
                        }
                    }).then(res => {
                        auth.signIn({
                            access_token,
                            refresh_token,
                            authProfile: res.data
                        })
                    })
                })
        },
        flow: 'auth-code',
        scope: GOOGLE_LOGIN_SCOPE.join(" ")
    });

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
                    {/* <NavButton icons={<RiVideoAddLine className='text-2xl' />} />
                    <NavButton icons={<IoMdNotificationsOutline className='text-2xl' />} /> */}


                    <div className='relative'>
                        {
                            !auth.isAuthenticated() ? <button onClick={() => login()}>Login</button> : <>
                                <button className='w-8 text-white  focus:outline-none text-center flex  items-center '>
                                    <img src={auth.authProfile?.picture} className='rounded-full w-full h-full object-cover' alt="avatar" referrerPolicy='no-referrer' />
                                </button>
                                <div id="dropdownDelay" className="z-[3] hiden absolute top-0 flex flex-col right-full bg-white  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <Link to="#">

                                    </Link>

                                </div>
                            </>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar