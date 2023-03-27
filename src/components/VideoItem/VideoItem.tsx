import React from 'react'
import thumb from '@assets/images/thumb.webp'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import youtubeApis from '@services/youtubeApis'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import formatNumber from '@utils/formatNumber'
import timeSince from '@utils/timeSince'
type Props = {
    data: Search
}



const VideoItem = React.forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
    const detailVideo = useQuery({
        queryKey: ["detail", data.id.videoId],
        queryFn: () => youtubeApis.getDetailVideo(data.id.videoId + "")
    })
    return (
        <>
            {detailVideo.data && <div ref={ref} className='mt-4 max-w-[360px] mx-auto sm:mx-0 w-full sm:max-w-none sm:mt-0 flex flex-col sm:flex-row gap-x-4 lg:gap-2'>
                <div className='w-full sm:w-auto h-full ' >
                    <Link className='inline-block w-full aspect-video sm:w-[168px]' to={"#"}>
                        <LazyLoadImage wrapperClassName=' w-full h-full' className='w-full h-full object-cover rounded-md' effect='black-and-white' loading='lazy' src={data.snippet.thumbnails.high.url || ""} alt={data.snippet.title} />
                    </Link>
                </div>
                <div className='flex-1'>
                    <Link to={"#"}>
                        <h3 className='text-base leading-5  text-black font-medium sm:line-clamp-2 '>{data?.snippet.title}</h3>
                        <div className='text-text-secondary text-xs mt-1'>{data?.snippet.channelTitle}</div>
                        <div className='text-text-secondary text-xs mt-0.5'>{formatNumber(+detailVideo.data?.data.items[0].statistics.viewCount)} lượt xem &#x2022; {timeSince(new Date(detailVideo.data?.data.items[0].snippet.publishedAt))}</div>
                    </Link>
                </div>
            </div>}
        </>
    )
})

export default VideoItem