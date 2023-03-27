import React from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {}

const CardVideoSkeleton = (props: Props) => {
    return (
        <div className='max-w-[360px] w-full  mx-auto '>
            <div className='w-full aspect-video '>
                <Skeleton className='w-full h-full -z-[1]' />
            </div>
            <div className='flex mt-4 gap-4'>

                <div className='w-8 h-8' >
                    <Skeleton circle={true} className='-z-[1] w-8 h-8' />
                </div>

                <div className='flex-1'>
                    <Skeleton count={3} className='-z-[1]' />
                </div>

            </div>
        </div>
    )
}

export default CardVideoSkeleton