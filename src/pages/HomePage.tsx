import LeftSide from '@components/LeftSide/LeftSide'
import VideoCard from '@components/VideoCard/VideoCard'
import Wrapper from '@components/Wrapper/Wrapper'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import youtubeApis from '@services/youtubeApis'

type Props = {}

function HomePage({ }: Props) {
    const [currentCate, setCurrentCate] = useState<number>(0)

    const chipsQuery = useQuery({
        queryKey: ["chips"],
        queryFn: () => youtubeApis.getChips()
    })

    const popularVideoQuery = useInfiniteQuery({
        queryKey: ["popular", currentCate],
        queryFn: ({ pageParam }) => youtubeApis.getPopular({ pageToken: pageParam || "", cateId: currentCate }),
        getNextPageParam: (data) => {
            return data.data.nextPageToken ? data.data.nextPageToken : undefined
        }
    })

    useEffect(() => {
        let fetching = false
        const handleScrollBottom = async (event: any) => {
            let scrollEl = event.target.scrollingElement as HTMLElement
            const { scrollHeight, clientHeight, scrollTop } = scrollEl
            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
                fetching = true
                if (popularVideoQuery.hasNextPage) {
                    await popularVideoQuery.fetchNextPage()
                }
                fetching = false
            }
        }
        window.addEventListener("scroll", handleScrollBottom)

        return () => window.removeEventListener("scroll", handleScrollBottom)
    }, [])
    return (
        <Wrapper>
            <LeftSide />

            {
                chipsQuery.data && <div className="w-full chip-bar gap-3 flex-wrap sticky top-[var(--chipBar-top-pos)] bg-white items-center flex py-4">
                    <span onClick={() => setCurrentCate(0)} className={classNames(`py-1 [&.active]:bg-black [&.active]:text-white cursor-pointer whitespace-nowrap 
                                 text-sm px-2 font-roboto rounded-md bg-[rgba(0,0,0,0.05)]`, { active: currentCate === 0 })}>
                        Tất cả
                    </span>
                    {
                        chipsQuery.data.data.items.slice(0, 8).map((value, index) => {
                            return (
                                <span onClick={() => setCurrentCate((+value.id))} key={value.id} className={classNames(`py-1 [&.active]:bg-black [&.active]:text-white cursor-pointer whitespace-nowrap 
                                 text-sm px-2 font-roboto rounded-md bg-[rgba(0,0,0,0.05)]`, { active: currentCate === +value.id })}>
                                    {value.snippet.title}
                                </span>
                            )
                        })
                    }

                </div>
            }

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-x-4 gap-y-8 pb-8">
                {
                    popularVideoQuery.data && popularVideoQuery.data.pages.map((page) => {
                        return page.data.items.map(item => {
                            return <VideoCard data={item} key={item.id} />
                        })
                    })
                }

            </div>
        </Wrapper>
    )
}

export default HomePage