export interface PaginationResult<T> {
  kind: string,
  etag: string,
  nextPageToken: string,
  prevPageToken: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: T[]
}