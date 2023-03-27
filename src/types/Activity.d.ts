interface Activity {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            [key: string]: {
                url: string,
                width: string,
                height: string
            }
        },
        channelTitle: string,
        type: string,
        groupId: string
    },
    contentDetails: {
        upload: {
            videoId: string
        },
        like: {
            resourceId: {
                kind: string,
                videoId: string,
            }
        },
        favorite: {
            resourceId: {
                kind: string,
                videoId: string,
            }
        },
        comment: {
            resourceId: {
                kind: string,
                videoId: string,
                channelId: string,
            }
        },
        subscription: {
            resourceId: {
                kind: string,
                channelId: string,
            }
        },
        playlistItem: {
            resourceId: {
                kind: string,
                videoId: string,
            },
            playlistId: string,
            playlistItemId: string
        },
        recommendation: {
            resourceId: {
                kind: string,
                videoId: string,
                channelId: string,
            },
            reason: string,
            seedResourceId: {
                kind: string,
                videoId: string,
                channelId: string,
                playlistId: string
            }
        },
        social: {
            type: string,
            resourceId: {
                kind: string,
                videoId: string,
                channelId: string,
                playlistId: string
            },
            author: string,
            referenceUrl: string,
            imageUrl: string
        },
        channelItem: {
            resourceId: {
            }
        },
    }
}