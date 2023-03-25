import React from 'react'
import thumb from '@assets/images/thumb.webp'
import { Link } from 'react-router-dom'
import { Search } from '~types/Search'
import { useQuery } from '@tanstack/react-query'
import youtubeApis from '@services/youtubeApis'
import { LazyLoadImage } from 'react-lazy-load-image-component'
type Props = {
    data: Search
}

const VideoItem = ({ data }: Props) => {
    const detailVideo = useQuery({
        queryKey: ["detail", data.id.videoId],
        queryFn: () => youtubeApis.getDetailVideo(data.id.videoId + "")
    })
    return (
        <>
            {detailVideo.data && <div className='mt-4 w-[360px] sm:w-auto sm:mt-0 flex flex-col sm:flex-row gap-4 lg:gap-2'>
                <div className='w-full aspect-video sm:w-[168px]' >
                    <Link className='inline-block w-full h-full' to={"#"}>
                        <LazyLoadImage wrapperClassName=' w-full h-full' className='w-full h-full object-cover rounded-md' effect='black-and-white' loading='lazy' src={data.snippet.thumbnails.high.url || ""} alt={data.snippet.title} />
                    </Link>
                </div>
                <div className='flex-1'>
                    <Link to={"#"}>
                        <h3 className='text-base leading-5  text-black font-medium sm:line-clamp-2 '>{data?.snippet.title}</h3>
                        <div className='text-text-secondary text-xs mt-1'>{data?.snippet.channelTitle}</div>
                        <div className='text-text-secondary text-xs mt-0.5'>{detailVideo.data?.data.items[0].statistics.viewCount} lượt xem &#x2022; {detailVideo.data?.data.items[0].snippet.publishedAt}</div>
                    </Link>
                </div>
            </div>}
        </>
    )
}

export default VideoItem