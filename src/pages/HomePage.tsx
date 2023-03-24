import LeftSide from '@components/LeftSide/LeftSide'
import VideoCard from '@components/VideoCard/VideoCard'
import Wrapper from '@components/Wrapper/Wrapper'
import classNames from 'classnames'
import React from 'react'

type Props = {}

function HomePage({ }: Props) {
    return (
        <Wrapper>
            <LeftSide />

            <div className="w-full chip-bar gap-3 flex-wrap sticky top-[var(--chipBar-top-pos)] bg-white items-center flex py-4">
                {
                    new Array(20).fill(0).map((value, index) => {
                        return (
                            <span key={index + ""} className={classNames(`py-1 [&.active]:bg-black [&.active]:text-white cursor-pointer whitespace-nowrap 
                                 text-sm px-2 font-roboto rounded-md bg-[rgba(0,0,0,0.05)]`)}>
                                Trò chơi
                            </span>
                        )
                    })
                }

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-x-4 gap-y-8">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </Wrapper>
    )
}

export default HomePage