interface Comment {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        authorDisplayName: string,
        authorProfileImageUrl: string,
        authorChannelUrl: string,
        authorChannelId: {
            value: string
        },
        channelId: string,
        videoId: string,
        textDisplay: string,
        textOriginal: string,
        parentId: string,
        canRate: boolean,
        viewerRating: string,
        likeCount: string,
        moderationStatus: string,
        publishedAt: string,
        updatedAt: string
    }
}

interface CommentThreads {

    kind: string,
    etag: string,
    id: string,
    snippet: {
        channelId: string,
        videoId: string,
        topLevelComment: Comment,
        canReply: boolean,
        totalReplyCount: number,
        isPublic: boolean
    },
    replies: {
        comments: Comment[]
    }

}