import React, { useCallback, useRef } from 'react'
import avatar from '@assets/images/avatar.jpg'
import { CommentThreads } from '~types/Comment'
import numberWithCommas from '@utils/numberCommas'
import timeSince from '@utils/timeSince'
import { useInfiniteQuery } from '@tanstack/react-query'
import youtubeApis from '@services/youtubeApis'


type Props = {
    total?: string,
    videoId: string
}

const Comment = ({ total, videoId }: Props) => {
    const commentsQuery = useInfiniteQuery({
        queryKey: ["comments", videoId],
        queryFn: ({ pageParam }) => youtubeApis.getParentComments({ videoId, pageToken: pageParam }),
        getNextPageParam: data => {
            return data.data.nextPageToken || undefined
        }
    })

    const observer = useRef<IntersectionObserver>()
    const lastCommentRef = useCallback<(node: HTMLDivElement) => void>(node => {
        if (commentsQuery.isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(comments => {
            if (comments[0] && comments[0].isIntersecting && commentsQuery.hasNextPage) {
                commentsQuery.fetchNextPage()
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [commentsQuery.data])
    return (
        <div className='mt-8 pb-8'>
            <div className=''>{numberWithCommas(total || "")} Bình luận</div>
            <div className='mt-4 space-y-6'>
                <CommentForm />
                {
                    commentsQuery.data && commentsQuery.data.pages.map((page, pageIndex) => {

                        return page.data.items.map((comment, index) => {
                            if (pageIndex === commentsQuery.data.pages.length - 1 && index === page.data.items.length - 1) {
                                return <CommentItem ref={lastCommentRef} key={comment.id} data={comment} />
                            }
                            return <CommentItem key={comment.id} data={comment} />
                        })
                    })
                }
            </div>
        </div>
    )
}
export interface CommentItemProps {
    data: CommentThreads
}

const CommentItem = React.forwardRef<HTMLDivElement, CommentItemProps>(({ data }, ref) => {
    return (
        <div ref={ref} className='flex gap-4'>
            <div className='w-10  h-10'>
                <img src={data?.snippet.topLevelComment.snippet.authorProfileImageUrl}
                    className='rounded-full w-full h-full object-cover' alt={data?.snippet.topLevelComment.snippet.authorDisplayName} />
            </div>
            <div className='flex-1'>
                <div><span className='text-sm font-bold'>{data?.snippet.topLevelComment.snippet.authorDisplayName}</span> <span className='text-xs text-text-secondary'> {timeSince(new Date(data?.snippet.topLevelComment.snippet.updatedAt))}</span></div>
                <p className='text-sm comment-content' dangerouslySetInnerHTML={{ __html: data?.snippet.topLevelComment.snippet.textDisplay }}>
                </p>
            </div>
        </div>
    )
})


const CommentForm = () => {
    return (
        <div className='flex gap-4'>
            <div className='w-10  h-10'>
                <img src={avatar} className='rounded-full w-full h-full object-cover' alt="avatar" />
            </div>
            <div className='flex-1'>
                <div className='text-sm border-b py-1 border-black/40  focus-within:after:w-full peer
                                relative after:content-[""] after:absolute after:top-full after:left-2/4 after:-translate-x-2/4 
                                after:w-0 after:h-[2px] after:transition-[width] after:duration-300 after:bg-black '>
                    <input className='w-full  outline-none' type="text" placeholder='Viết bình luận...' />
                </div>
                <div className=' justify-end mt-4 gap-4 hidden peer-focus-within:flex'>
                    <button className='text-sm rounded-3xl font-medium py-2 px-4 transition duration-200 hover:bg-light-gray'>Hủy</button>
                    <button className='text-sm rounded-xl font-medium py-2 px-4 disabled [&.disabled]:bg-[#f2f2f2] [&.disabled]:pointer-events-none [&.disabled]:text-text-secondary'>Bình luận</button>
                </div>
            </div>
        </div>
    )
}

export default Comment