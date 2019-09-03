/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrack = `subscription OnCreateTrack {
  onCreateTrack {
    id
    addedBy
    createdAt
    youtubeId
  }
}
`;
export const onUpdateTrack = `subscription OnUpdateTrack {
  onUpdateTrack {
    id
    addedBy
    createdAt
    youtubeId
  }
}
`;
export const onDeleteTrack = `subscription OnDeleteTrack {
  onDeleteTrack {
    id
    addedBy
    createdAt
    youtubeId
  }
}
`;
export const onCreatePlayer = `subscription OnCreatePlayer {
  onCreatePlayer {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
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
