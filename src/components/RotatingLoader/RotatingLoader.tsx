import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

type Props = {}

const RotatingLoader = (props: Props) => {
    return (
        <div className='flex items-center justify-center'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
            />
        </div>
    )
}

export default RotatingLoader