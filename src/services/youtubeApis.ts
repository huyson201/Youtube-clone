import { ChipResults } from "~types/Chip";
import axiosInstance from "./axiosInstance"
import { PaginationResult } from "~types/Common";
import { Video } from "~types/Video";

const youtubeApis = {
    getPopular: ({ pageToken, cateId }: { pageToken?: string, cateId?: number }) => {
        return axiosInstance.get<PaginationResult<Video>>("videos", {
            params: {
                part: "snippet,statistics",
                chart: "mostPopular",
                maxResults: 25,
                regionCode: "VN",
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
    }
}

export default youtubeApis;