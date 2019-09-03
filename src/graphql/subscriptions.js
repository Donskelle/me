/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrack = `subscription OnCreateTrack {
  onCreateTrack {
    id
    addedBy
    createdAt
    youtubeId
    version
  }
}
`;
export const onUpdateTrack = `subscription OnUpdateTrack {
  onUpdateTrack {
    id
    addedBy
    createdAt
    youtubeId
    version
  }
}
`;
export const onDeleteTrack = `subscription OnDeleteTrack {
  onDeleteTrack {
    id
    addedBy
    createdAt
    youtubeId
    version
  }
}
`;
export const onCreatePlayer = `subscription OnCreatePlayer {
  onCreatePlayer {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
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
