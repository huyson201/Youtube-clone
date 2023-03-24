
export interface Chip {
    kind: string
    etag: string
    id: string
    snippet: {
        title: string
        assignable: boolean
        channelId: string
    }

}


export interface ChipResults {
    kind: string
    etag: string
    items: Chip[]
}