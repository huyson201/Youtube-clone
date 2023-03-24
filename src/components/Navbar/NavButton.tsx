import classNames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icons: React.ReactNode
}

const NavButton = ({ icons, className, ...props }: Props) => {
    return (
        <button {...props} className={classNames('flex justify-center items-center w-10 h-10 text-3xl rounded-full hover:bg-light-gray transition duration-200', className)}>
            {icons}
        </button>
    )
}

export default NavButton