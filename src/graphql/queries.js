/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const youtubesearch = `query Youtubesearch($search: String) {
  youtubesearch(search: $search) {
    youtubeId
    title
    publishedAt
    description
    channelTitle
    thumbnails {
      default {
        url
        width
        height
      }
      medium {
        url
        width
        height
      }
      high {
        url
        width
        height
      }
    }
  }
}
`;
export const getTrack = `query GetTrack($id: ID!) {
  getTrack(id: $id) {
    id
    addedBy
    createdAt
    youtubeId
  }
}
`;
export const listTracks = `query ListTracks(
  $filter: ModelTrackFilterInput
  $limit: Int
  $nextToken: String
) {
  listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      addedBy
      createdAt
      youtubeId
    }
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    startTime
    status
    currentTrack {
      id
      addedBy
      createdAt
      youtubeId
    }
  }
}
`;
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      startTime
      status
      currentTrack {
        id
        addedBy
        createdAt
        youtubeId
      }
    }
    nextToken
  }
}
`;
export const tracksByDate = `query TracksByDate(
  $createdAt: AWSDateTime
  $sortDirection: ModelSortDirection
  $filter: ModelTrackFilterInput
  $limit: Int
  $nextToken: String
) {
  tracksByDate(
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      addedBy
      createdAt
      youtubeId
    }
    nextToken
  }
}
`;
