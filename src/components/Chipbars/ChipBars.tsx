import ChipSkeleton from '@components/ChipSkeleton/ChipSkeleton'
import youtubeApis from '@services/youtubeApis'
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import React, { MouseEvent, useEffect, useState } from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

type Props = {
    onSelect?: (value: number) => void
}

function ChipBars({ onSelect }: Props) {
    const chipsQuery = useQuery({
        queryKey: ["chips"],
        queryFn: () => youtubeApis.getChips()
    })
    const [isDragging, setIsDragging] = useState(false);
    const [hiddenLeft, setHiddenLeft] = useState(true);
    const [hiddenRight, setHiddenRight] = useState(false);

    const chipBox = React.useRef<HTMLDivElement>(null)
    const chipWrapper = React.useRef<HTMLDivElement>(null)

    const handleMouseDown = () => {
        setIsDragging(true);
    };
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const [currentCate, setCurrentCate] = useState<number>(0)

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        event.currentTarget.scrollLeft -= event.movementX
        handleHiddenLeftRight()
    }

    const handleHiddenLeftRight = () => {
        if (chipBox.current && chipWrapper.current) {
            let scrollVal = Math.round(chipBox.current?.scrollLeft)
            let currentScrollVal = Math.ceil(scrollVal + chipWrapper.current.clientWidth)
            if (scrollVal > 0) {
                setHiddenLeft(false)
            } else {
                setHiddenLeft(true)
            }

            if (currentScrollVal >= chipBox.current.scrollWidth) {
                setHiddenRight(true)
            } else {
                setHiddenRight(false)
            }
        }
    }


    return (
        <>
            {
                chipsQuery.isLoading && <div className="w-full chip-bar gap-3 flex-wrap sticky top-[var(--chipBar-top-pos)] bg-white items-center flex py-4">
                    {
                        chipsQuery.isLoading && new Array(8).fill(0).map((_, index) => {
                            return <ChipSkeleton key={index.toString()} />
                        })
                    }
                </div>
            }

            {
                chipsQuery.data && <div ref={chipWrapper} className=' max-w-full z-[4]  overflow-x-hidden sticky top-[var(--chipBar-top-pos)] bg-white '>
                    <div className={classNames('absolute top-2/4 -translate-y-2/4 right-0 h-full w-14 bg-red-400 flex items-center justify-end gradient-right ', { "hidden": hiddenRight })}>
                        <button onClick={() => { if (chipBox.current) chipBox.current.scrollLeft += 350; handleHiddenLeftRight() }} className=' w-8 h-8 rounded-full flex items-center justify-center hover:bg-light-gray'><FaAngleRight /></button>
                    </div>

                    <div className={classNames('absolute top-2/4 -translate-y-2/4 left-0  h-full w-14 bg-red-400 flex items-center gradient-left', { "hidden": hiddenLeft })}>
                        <button onClick={() => { if (chipBox.current) chipBox.current.scrollLeft += -350; handleHiddenLeftRight() }} className=' w-8 h-8 rounded-full flex items-center justify-center hover:bg-light-gray'><FaAngleLeft /></button>
                    </div>

                    <div onMouseMove={handleMouseMove}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        ref={chipBox}
                        className={classNames("tab-box overflow-x-hidden chip-bar gap-3 items-center flex py-4", { "scroll-smooth": !isDragging })}>


                        <span onClick={() => { onSelect && onSelect(0); setCurrentCate(0) }} className={classNames(`py-1 [&.active]:bg-black [&.active]:text-white cursor-pointer whitespace-nowrap 
             text-sm px-2 font-roboto rounded-md transition duration-200 hover:bg-light-gray bg-[rgba(0,0,0,0.05)]`, { active: currentCate === 0 })}>
                            Tất cả
                        </span>

                        {
                            chipsQuery.data.data.items.slice(0, 15).map((value, index) => {
                                return (
                                    <span onClick={() => { onSelect && onSelect(+value.id); setCurrentCate((+value.id)) }} key={value.id} className={classNames(`py-1 [&.active]:bg-black [&.active]:text-white cursor-pointer whitespace-nowrap 
             text-sm px-2 font-roboto rounded-md transition duration-200 hover:bg-light-gray bg-[rgba(0,0,0,0.05)]`, { active: currentCate === +value.id })}>
                                        {value.snippet.title}
                                    </span>
                                )
                            })
                        }

                    </div>
                </div>
            }
        </>
    )
}

export default ChipBars