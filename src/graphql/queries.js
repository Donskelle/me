/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const youtubesearch = `query Youtubesearch($search: String) {
  youtubesearch(search: $search) {
    youtubeId
    title
  }
}
`;
export const getTrack = `query GetTrack($id: ID!) {
  getTrack(id: $id) {
    id
    addedBy
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
      youtubeId
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
      youtubeId
    }
    playlist {
      id
      addedBy
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
      time
      status
      currentTrack {
        id
        addedBy
        youtubeId
      }
      playlist {
        id
        addedBy
        youtubeId
      }
    }
    nextToken
  }
}
`;
