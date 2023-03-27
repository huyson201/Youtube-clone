import React from 'react'
import avatar from '@assets/images/avatar.jpg'
import thumb from '@assets/images/thumb.webp'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import youtubeApis from '@services/youtubeApis'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import formatNumber from '@utils/formatNumber'

interface Props {
    data: Video
}
const VideoCard = React.forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
    const channelQuery = useQuery({
        queryKey: ["channel", data.snippet.channelId],
        queryFn: () => youtubeApis.getChannel(data.snippet.channelId)
    })
    return (
        <div ref={ref} className='max-w-[360px] w-full  mx-auto sm:w-auto'>
            <Link to={`/watch?v=${data.id}`} className='w-full h-full'>
                <div className='w-full aspect-video '>
                    <LazyLoadImage wrapperClassName=' w-full h-full' className='w-full h-full rounded-lg object-cover' effect='black-and-white' loading='lazy' src={data?.snippet.thumbnails.high.url || ""} alt={data.snippet.title} />
                </div>
            </Link>
            <div className='flex mt-4 gap-4'>
                <Link to={"#"}>
                    <div className='w-8 h-8' >
                        <img loading='lazy' className='w-full rounded-full object-cover' src={channelQuery.data && channelQuery.data.data.items[0].snippet.thumbnails.high.url || ""} alt='avatar'></img>
                    </div>
                </Link>
                <div className='space-y-1'>
                    <Link className='font-semibold block' to={"#"}>
                        <h2 className='line-clamp-2'>{data.snippet.title}</h2>
                    </Link>
                    <Link className='text-text-secondary text-sm block duration-200 transition-colors hover:text-black' to={"#"}>
                        <div>{data.snippet.channelTitle}</div>
                    </Link>

                    <Link className='text-text-secondary text-sm  block' to={"#"}>
                        <div>{formatNumber(+data.statistics.viewCount)} lượt xem {new Date(data.snippet.publishedAt).getFullYear() || "N/A"}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default VideoCard
