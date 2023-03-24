import Wrapper from '@components/Wrapper/Wrapper'
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '@assets/images/avatar.jpg'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import VideoItem from '@components/VideoItem/VideoItem'
import Comment from '@components/Comment/Comment'
type Props = {}

const WatchPage = (props: Props) => {
    return (
        <Wrapper>
            <div className='flex flex-col  lg:flex-row pt-6 gap-4'>
                {/* video */}
                <div className="video-play lg:w-[55%]">
                    <div className='aspect-video md:aspect-auto lg:aspect-video flex justify-center lg:block'>
                        <iframe className='lg:w-full h-full md:h-[370px] lg:h-full' width="660" height="371" src="https://www.youtube.com/embed/4ykAepVkG5Y" title="Create A Website Like YouTube Using HTML CSS JS | YouTube Clone Website Design Step By Step" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-black mt-2 lg:mt-0 font-medium text-xl'>Create A Website Like YouTube Using HTML CSS JS | YouTube Clone Website Design Step By Step</h2>
                        <div className='flex flex-wrap sm:flex-nowrap  mt-2 sm:items-center gap-6'>
                            <div className='flex items-center gap-4'>
                                <Link to={"#"}>
                                    <img className='w-10 h-10 rounded-full object-cover' src={avatar} alt="" />
                                </Link>
                                <div>
                                    <Link to={"#"}><div className='text-black font-medium'>Easy Tutorials</div></Link>
                                    <div className='text-text-secondary text-xs'>804 N người đăng ký</div>
                                </div>
                            </div>
                            <div className='flex ml-0 sm:ml-auto items-center h-8'>
                                <button className=' h-full bg-[rgba(0,0,0,0.05)] transition duration-200 hover:bg-light-gray rounded-tl-full rounded-bl-full border-r text-sm border-[#d9d9d9] px-4 flex items-center gap-2'><AiOutlineLike className='text-xl' /> 20 N</button>
                                <button className='h-full bg-[rgba(0,0,0,0.05)] transition duration-200 hover:bg-light-gray rounded-tr-full rounded-br-full px-4  '><AiOutlineDislike className='text-xl' /></button>
                            </div>

                            <button className='h-8 gap-2 flex text-sm font-medium items-center bg-[rgba(0,0,0,0.05)] transition duration-200 hover:bg-light-gray rounded-full px-4 '><RiShareForwardLine className='text-xl' />Chia sẻ</button>
                        </div>
                    </div>

                    {/* list video */}
                    <div className='block lg:hidden mt-12'>
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                    </div>

                    {/* comments */}
                    <Comment />
                </div>

                {/* list video */}
                <div className='hidden lg:block flex-1'>
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                </div>
            </div>
        </Wrapper>
    )
}

export default WatchPage