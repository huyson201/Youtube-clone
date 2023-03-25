import { ChipResults } from "~types/Chip";
import axiosInstance from "./axiosInstance"
import { PaginationResult } from "~types/Common";
import { Video } from "~types/Video";
import { Channel } from "~types/Channel";
import { Search } from "~types/Search";
import { Activity } from "~types/Activity";
import { CommentThreads } from "~types/Comment";

const youtubeApis = {
    getPopular: ({ pageToken, cateId }: { pageToken?: string, cateId?: number }) => {
        return axiosInstance.get<PaginationResult<Video>>("videos", {
            params: {
                part: "snippet,statistics",
                chart: "mostPopular",
                maxResults: 15,
                pageToken: pageToken || "",
                videoCategoryId: cateId || 0
            }
        })
    },
    getChips: () => {
        return axiosInstance.get<ChipResults>("videoCategories", {
            params: {
                part: "snippet",
                regionCode: "VN",
                hl: "vi"
            }
        })
    },
    getChannel: (id: string) => {
        return axiosInstance.get<PaginationResult<Channel>>("channels", {
            params: {
                part: "snippet,statistics",
                id: id
            }
        })
    },
    getRelatedVideo: ({ key, tokenPage }: { key: string, tokenPage?: string }) => {
        return axiosInstance.get<PaginationResult<Search>>("search", {
            params: {
                part: "snippet",
                q: key,
                type: "video",
                maxResults: 10,
                tokenPage: tokenPage || ""
            }
        })
    },
    getDetailVideo: (videoId: string) => {
        return axiosInstance.get<PaginationResult<Video>>("videos", {
            params: {
                id: videoId,
                part: "snippet,contentDetails,statistics,status,topicDetails"
            }
        })
    },
    getParentComments: ({ videoId, pageToken, order }: { videoId: string, pageToken?: string, order?: "time" | "relevance" }) => {
        // https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId={V,IDEO_ID}&maxResults=100&key={YOUR_API_KEY}
        return axiosInstance.get<PaginationResult<CommentThreads>>("commentThreads", {
            params: {
                part: "snippet,replies,id",
                videoId: videoId,
                maxResults: 20,
                pageToken: pageToken || "",
                order: order || "relevance"
            }
        })
    }
    // getRecommendedVideos: ({ channelId, videoId }: { channelId: string, videoId: string }) => {
    //     return axiosInstance.get<PaginationResult<Activity>>("activities", {
    //         params: {
    //             channelId,
    //             videoId,
    //             part: "snippet,contentDetails",
    //             type: "video",
    //             maxResults: 15
    //         }
    //     })
    // }
}

export default youtubeApis;