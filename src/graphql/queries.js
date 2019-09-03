/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const youtubesearch = `query Youtubesearch($search: String) {
  youtubesearch(search: $search) {
    youtubeId
    title
    publishedAt
    description
    channelTitle
  }
}
`;
export const getTrack = `query GetTrack($id: ID!) {
  getTrack(id: $id) {
    id
    addedBy
    createdAt
    youtubeId
    version
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
      version
    }
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    time
    status
    currentTrack {
      id
      addedBy
      createdAt
      youtubeId
      version
    }
    playlist {
      id
      addedBy
      createdAt
      youtubeId
      version
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
      time
      status
      currentTrack {
        id
        addedBy
        createdAt
        youtubeId
        version
      }
      playlist {
        id
        addedBy
        createdAt
        youtubeId
        version
      }
    }
    nextToken
  }
}
`;
