export interface Video {
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
        width: number,
        height: number
      }
    },
    channelTitle: string,
    tags: [
      string
    ],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage: string,
    localized: {
      title: string,
      description: string
    },
    defaultAudioLanguage: string
  },

  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
  }
}