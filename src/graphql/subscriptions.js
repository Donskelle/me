/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrack = `subscription OnCreateTrack {
  onCreateTrack {
    id
    addedBy
    youtubeId
  }
}
`;
export const onUpdateTrack = `subscription OnUpdateTrack {
  onUpdateTrack {
    id
    addedBy
    youtubeId
  }
}
`;
export const onDeleteTrack = `subscription OnDeleteTrack {
  onDeleteTrack {
    id
    addedBy
    youtubeId
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
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
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
