import LeftSide from '@components/LeftSide/LeftSide'
import VideoCard from '@components/VideoCard/VideoCard'
import Wrapper from '@components/Wrapper/Wrapper'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import youtubeApis from '@services/youtubeApis'
import CardVideoSkeleton from '@components/CardVideoSkeleton/CardVideoSkeleton'
import ChipSkeleton from '@components/ChipSkeleton/ChipSkeleton'
import RotatingLoader from '@components/RotatingLoader/RotatingLoader'
import ChipBars from '@components/Chipbars/ChipBars'

type Props = {}

function HomePage({ }: Props) {
    const [currentCate, setCurrentCate] = useState<number>(0)

    const popularVideoQuery = useInfiniteQuery({
        queryKey: ["popular", currentCate],
        queryFn: ({ pageParam }) => youtubeApis.getPopular({ pageToken: pageParam || "", cateId: currentCate }),
        getNextPageParam: (data) => {
            return data.data.nextPageToken ? data.data.nextPageToken : undefined
        }
    })

    const observer = React.useRef<IntersectionObserver>()
    const lastVideoCard = useCallback<(node: HTMLDivElement) => void>((node) => {

        if (popularVideoQuery.isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(videoCard => {
            if (videoCard[0] && videoCard[0].isIntersecting && popularVideoQuery.hasNextPage) {
                popularVideoQuery.fetchNextPage()
            }
        })

        if (node) {
            observer.current.observe(node)
        }
    }, [popularVideoQuery.data])



    return (
        <Wrapper>
            <LeftSide />
            <ChipBars onSelect={(data) => setCurrentCate(data)} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-x-4 gap-y-8 pb-8">
                {
                    popularVideoQuery.isLoading && new Array(10).fill(0).map((_, index) => {
                        return <CardVideoSkeleton key={index.toString()} />
                    })
                }
                {
                    popularVideoQuery.data && popularVideoQuery.data.pages.map((page, pageIndex) => {
                        return page.data.items.map((item, itemIndex) => {
                            if (popularVideoQuery.data.pages.length - 1 === pageIndex && page.data.items.length - 1 === itemIndex) {
                                return <VideoCard ref={lastVideoCard} data={item} key={item.id} />
                            }
                            return <VideoCard data={item} key={item.id} />
                        })
                    })
                }
                {

                    popularVideoQuery.isFetchingNextPage && <RotatingLoader />
                }
            </div>
        </Wrapper>
    )
}

export default HomePage