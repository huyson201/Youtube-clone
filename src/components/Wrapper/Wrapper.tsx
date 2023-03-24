import React from 'react'

interface Props {
    children: any | any[]
}

const Wrapper = (props: Props) => {
    return (
        <div className='mt-[var(--navbar-height)] md:ml-[var(--leftSide-width)] px-4'>
            {props.children}
        </div>
    )
}

export default Wrapper