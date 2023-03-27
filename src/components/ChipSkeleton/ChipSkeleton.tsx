import React from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {}

const ChipSkeleton = (props: Props) => {
    return (

        <span className='h-full w-16'>
            <Skeleton className='w-full h-full -z-[-1] py-1 block ' containerClassName='w-full h-full inline-block' />
        </span>
    )
}

export default ChipSkeleton