/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrack = `mutation CreateTrack($input: CreateTrackInput!) {
  createTrack(input: $input) {
    id
    addedBy
    createdAt
    youtubeId
    version
  }
}
`;
export const updateTrack = `mutation UpdateTrack($input: UpdateTrackInput!) {
  updateTrack(input: $input) {
    id
    addedBy
    createdAt
    youtubeId
    version
  }
}
`;
export const deleteTrack = `mutation DeleteTrack($input: DeleteTrackInput!) {
  deleteTrack(input: $input) {
    id
    addedBy
    createdAt
    youtubeId
    version
  }
}
`;
export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
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
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
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
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
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
