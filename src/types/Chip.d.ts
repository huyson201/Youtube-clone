
interface Chip {
    kind: string
    etag: string
    id: string
    snippet: {
        title: string
        assignable: boolean
        channelId: string
    }

}


interface ChipResults {
    kind: string
    etag: string
    items: Chip[]
}